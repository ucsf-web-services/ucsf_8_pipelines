<?php
namespace Drupal\ucsf_nursing_migrate_news\Plugin\migrate\process;
use Drupal\migrate\MigrateExecutableInterface;
use Drupal\migrate\ProcessPluginBase;
use Drupal\migrate\Row;
/**
 * Example on how to migrate an image from any place in Drupal.
 *
 * @MigrateProcessPlugin(
 *   id = "file_import"
 * )
 */
class FileImport extends ProcessPluginBase {
  /**
   * {@inheritdoc}
   */
  public function transform($value, MigrateExecutableInterface $migrate_executable, Row $row, $destination_property) {
    $source = 'https://nursing.ucsf.edu/sites/nursing.ucsf.edu/files/' . $value;
    // Create file object from remote URL.
    // $data = file_get_contents($source);
    if(!is_dir('public://general/')) {
      drupal_mkdir('public://general/');
    }

    $file = file_save_data(file_get_contents($source), 'public://'.$value, FILE_EXISTS_REPLACE);
    return $file->id();
  }
}
