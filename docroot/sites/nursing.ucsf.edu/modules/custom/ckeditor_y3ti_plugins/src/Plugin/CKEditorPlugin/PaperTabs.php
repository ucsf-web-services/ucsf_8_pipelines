<?php

/**
 * @file
 * Contains \Drupal\ckeditor_y3ti_plugins\Plugin\CKEditorPlugin\PaperTabs.
 */

namespace Drupal\ckeditor_y3ti_plugins\Plugin\CKEditorPlugin;

use Drupal\ckeditor\CKEditorPluginBase;
use Drupal\ckeditor\Annotation\CKEditorPlugin;
use Drupal\Component\Plugin\PluginBase;
use Drupal\ckeditor\CKEditorPluginInterface;
// use Drupal\ckeditor\CKEditorPluginContextualInterface;
// use Drupal\ckeditor\CKEditorPluginConfigurableInterface;
// use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Annotation\Translation;
use Drupal\editor\Entity\Editor;

/**
 * Defines the "PaperTabs" plugin.

 *
 * @CKEditorPlugin(
 *   id = "papertabs",
 *   label = @Translation("PaperTabs")
 * )
 */
class PaperTabs extends CKEditorPluginBase implements CKEditorPluginInterface {

  /**
   * Implements \Drupal\ckeditor\Plugin\CKEditorPluginInterface::getDependencies().
   */
  public function getDependencies(Editor $editor) {
    return array();
  }

  /**
   * Implements \Drupal\ckeditor\Plugin\CKEditorPluginInterface::getLibraries().
   */
  public function getLibraries(Editor $editor) {
    return array();
  }

  /**
   * Implements \Drupal\ckeditor\Plugin\CKEditorPluginInterface::isInternal().
   */
  public function isInternal() {
    return FALSE;
  }

  /**
   * Implements \Drupal\ckeditor\Plugin\CKEditorPluginInterface::getFile().
   */
  public function getFile() {
    return drupal_get_path('module', 'ckeditor_y3ti_plugins') . '/js/plugins/papertabs/plugin.js';
  }

  /**
   * Implements \Drupal\ckeditor\Plugin\CKEditorPluginInterface::getConfig().
   */
  public function getConfig(Editor $editor) {
    return array();
  }

  /**
   * Implements \Drupal\ckeditor\Plugin\CKEditorPluginButtonsInterface::getButtons().
   */
  public function getButtons() {
    return [
      'Papertabs' => [
        'label' => t('PaperTabs'),
        'image' => drupal_get_path('module', 'ckeditor_y3ti_plugins') . '/js/plugins/papertabs/icons/papertabs.png',
      ]
    ];
  }


}
