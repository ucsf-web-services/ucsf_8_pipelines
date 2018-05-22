<?php

/**
 * @file
 * Contains Drupal\views_filter_autosubmit\Plugin\views\exposed_form\Autosubmit.
 */

namespace Drupal\views_filter_autosubmit\Plugin\views\exposed_form;

use Drupal\Core\Form\FormStateInterface;
use Drupal\views\Plugin\views\exposed_form\ExposedFormPluginBase;
use Drupal\views\Views;

/**
 * Extends the exposed form to provide an autosubmit functionality.
 *
 * @ingroup views_exposed_form_plugins
 *
 * @ViewsExposedForm(
 *   id = "autosubmit",
 *   title = @Translation("Autosubmit"),
 *   help = @Translation("Exposed form with autosubmit.")
 * )
 */
class Autosubmit extends ExposedFormPluginBase {
  /**
   * {@inheritdoc}.
   */
  protected function defineOptions() {
    return parent::defineOptions();

    $options['autosubmit_hide'] = array('default' => TRUE);

    return $options;
  }

  /**
   * {@inheritdoc}.
   */
  public function buildOptionsForm(&$form, FormStateInterface $form_state) {
    parent::buildOptionsForm($form, $form_state);

    $form['autosubmit_hide'] = array(
      '#type' => 'checkbox',
      '#title' => t('Hide submit button'),
      '#description' => t('Hide submit button if javascript is enabled.'),
      '#default_value' => $this->options['autosubmit_hide'],
    );
  }

  /**
   * {@inheritdoc}.
   */
  public function exposedFormAlter(&$form, FormStateInterface $form_state) {
    // Apply autosubmit values.
    $form = array_merge_recursive($form, array('#attributes' => array('class' => array('views-auto-submit-full-form'))));
    $form['actions']['submit']['#attributes']['class'][] = 'views-use-ajax';
    $form['actions']['submit']['#attributes']['class'][] = 'views-auto-submit-click';
    $form['#attached']['library'][] = 'views_filter_autosubmit/autosubmit';

    if (!empty($this->options['autosubmit_hide'])) {
      $form['actions']['submit']['#attributes']['class'][] = 'js-hide';
    }
  }

}
