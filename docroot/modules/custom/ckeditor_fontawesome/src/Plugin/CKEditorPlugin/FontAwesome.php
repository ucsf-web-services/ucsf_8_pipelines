<?php
namespace Drupal\ckeditor_fontawesome\Plugin\CKEditorPlugin;

use Drupal\Core\Plugin\PluginBase;
use Drupal\ckeditor\CKEditorPluginInterface;
use Drupal\ckeditor\CKEditorPluginButtonsInterface;
use Drupal\ckeditor\CKEditorPluginContextualInterface;

use Drupal\editor\Entity\Editor;

use Drupal\ckeditor\Annotation\CKEditorPlugin;
use Drupal\Core\Annotation\Translation;

/**
 * Defines the "fontawesome" plugin.
 *
 * @CKEditorPlugin(
 *   id = "fontawesome",
 *   label = @Translation("CKEditor Fontawesome"),
 *   module = "ckeditor"
 * )
 */
class FontAwesome extends PluginBase implements CKEditorPluginInterface, CKEditorPluginButtonsInterface, CKEditorPluginContextualInterface
{
  /**
   * Implements \Drupal\ckeditor\Plugin\CKEditorPluginInterface::getDependencies().
   */
  public function getDependencies(Editor $editor) {
    return [];
  }
  /**
   * Implements \Drupal\ckeditor\Plugin\CKEditorPluginInterface::getLibraries().
   */
  function getLibraries(Editor $editor)
  {
    return [];
  }
  /**
   * Implements \Drupal\ckeditor\Plugin\CKEditorPluginInterface::isInternal().
   */
  function isInternal()
  {
    return FALSE;
  }
  /**
   * Implements \Drupal\ckeditor\Plugin\CKEditorPluginInterface::getFile().
   */
  function getFile()
  {
    $plugin = drupal_get_path('module', 'ckeditor_fontawesome') . '/js/plugins/fontawesome/plugin.js';
    return $plugin;
  }
  /**
   * Implements \Drupal\ckeditor\Plugin\CKEditorPluginInterface::getConfig().
   */
  public function getConfig(Editor $editor)
  {
    return [];
  }

  /**
   * Implements \Drupal\ckeditor\Plugin\CKEditorPluginButtonsInterface::getButtons().
   * Returns the buttons that this plugin provides, along with metadata.
   */
  
  public function getButtons() {
    return [
      'FontAwesome' => [
        'label' => t('Add Fontawesome Icon'),
        'image' => drupal_get_path('module', 'ckeditor_fontawesome') . '/js/plugins/fontawesome/icons/fontawesome.png'
      ]
    ];
  }

  /**
   * Implements \Drupal\ckeditor\Plugin\CKEditorPluginContextualInterface::isEnabled().
   * Checks if this plugin should be enabled based on the editor configuration.
   */
  public function isEnabled(Editor $editor) {
    return TRUE;
  }

}
