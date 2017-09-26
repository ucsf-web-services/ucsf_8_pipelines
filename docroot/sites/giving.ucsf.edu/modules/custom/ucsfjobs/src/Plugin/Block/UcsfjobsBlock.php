<?php
/**
 * Provides a "UCSF Jobs" block.
 *
 * @Block(
 *   id = "ucsfjobs",
 *   admin_label = @Translation("UCSF Jobs Block"),
 * )
 */
namespace Drupal\ucsfjobs\Plugin\Block;
use Drupal\Core\Block\BlockBase;


class UcsfjobsBlock extends BlockBase {
  /**
   * {@inheritdoc}
   */
  public function build() {

  $items = array();

  $markup = <<<EOT
  <section>
  <div class="container" id="jobs-container">
    <h3>Open UCSF Jobs</h3>
    <div class="jobs-list">
    </div>
  </div>
  </section>
EOT;


  return array(
    '#items' => $items,
    '#theme' => 'ucsfjobs',
    '#markup' => $markup,
    '#attached' => array(
      'library' => array('ucsfjobs/ucsfjobs'),
      ),
    );

  }

}
