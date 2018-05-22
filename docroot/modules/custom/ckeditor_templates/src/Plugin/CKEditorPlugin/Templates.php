<?php
namespace Drupal\ckeditor_templates\Plugin\CKEditorPlugin;

use Drupal\Core\Plugin\PluginBase;
use Drupal\ckeditor\CKEditorPluginInterface;
use Drupal\ckeditor\CKEditorPluginButtonsInterface;
use Drupal\ckeditor\CKEditorPluginContextualInterface;

use Drupal\editor\Entity\Editor;

use Drupal\ckeditor\Annotation\CKEditorPlugin;
use Drupal\Core\Annotation\Translation;
/**
 * Defines the "Templates" plugin.
 *
 * @CKEditorPlugin(
 *   id = "templates",
 *   label = @Translation("Templates"),
 *   module = "ckeditor"
 * )
 */
class Templates extends PluginBase implements CKEditorPluginInterface, CKEditorPluginButtonsInterface, CKEditorPluginContextualInterface {


 /**
    * Implements \Drupal\ckeditor\Plugin\CKEditorPluginInterface::getDependencies().
    * Returns a list of plugins this plugin requires.
    */
  public function getDependencies(Editor $editor) {
    return ['dialog','dialogui'];
  }

  /**
    * Implements \Drupal\ckeditor\Plugin\CKEditorPluginInterface::getLibraries().
    * Returns a list of libraries this plugin requires.
    */
  public function getLibraries(Editor $editor) {
    return [];
  }

  /**
    * Implements \Drupal\ckeditor\Plugin\CKEditorPluginInterface::isInternal().
    * Indicates if this plugin is part of the optimized CKEditor build.
    */
  public function isInternal() {
    return FALSE;
  }

 /**
   * Implements \Drupal\ckeditor\Plugin\CKEditorPluginInterface::getFile().
   * Returns the Drupal root-relative file path to the plugin JavaScript file.
   */
  public function getFile() {
    return drupal_get_path('module', 'ckeditor_templates') . '/js/plugins/templates/plugin.js';
  }

  /**
   * Implements \Drupal\ckeditor\Plugin\CKEditorPluginInterface::getConfig().
   * Returns the additions to CKEDITOR.config for a specific CKEditor instance.
   */
  public function getConfig(Editor $editor) {
    return [];
  }

  /**
   * Implements \Drupal\ckeditor\Plugin\CKEditorPluginButtonsInterface::getButtons().
   * Returns the buttons that this plugin provides, along with metadata.
   */
  public function getButtons() {
    return [
      'Templates' => [
        'label' => t('Templates'),
        'image' => drupal_get_path('module', 'ckeditor_templates') . '/js/plugins/templates/icons/hidpi/templates.png'
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
