<?php
namespace Drupal\ucsf_nursing_migrate_news\Plugin\migrate\process;
use Drupal\migrate\MigrateExecutableInterface;
use Drupal\migrate\ProcessPluginBase;
use Drupal\migrate\Row;
/**
 * Example on how to migrate an image from any place in Drupal.
 *
 * @MigrateProcessPlugin(
 *   id = "gallery_import"
 * )
 */
class GalleryImport extends ProcessPluginBase {
  /**
   * {@inheritdoc}
   */
  public function transform($value, MigrateExecutableInterface $migrate_executable, Row $row, $destination_property) {
    // Switch to external database
     \Drupal\Core\Database\Database::setActiveConnection('upgrade');

     // Get a connection going
     $db = \Drupal\Core\Database\Database::getConnection();

     $query = $db->select('field_data_field_basic_spotlight_items', 'i');
     $query->fields('i', array('field_basic_spotlight_items_title','field_basic_spotlight_items_alt', 'field_basic_spotlight_items_fid'));
     $query->condition('entity_id', $value, '=');
     $ImagesInfo = $query->execute()->fetchAll();
     // Switch back
     \Drupal\Core\Database\Database::setActiveConnection();

    foreach ($ImagesInfo as $key => $image) {
      // Switch to external database
     \Drupal\Core\Database\Database::setActiveConnection('upgrade');

     // Get a connection going
     $db = \Drupal\Core\Database\Database::getConnection();

     $query = $db->select('file_managed', 'f');
     $query->fields('f', array('uri', 'fid'));
     $query->condition('fid', $image->field_basic_spotlight_items_fid, '=');
     $result = $query->execute()->fetchObject();
     // Switch back
     print_r(var_dump($result),1);
     \Drupal\Core\Database\Database::setActiveConnection();
     $path = str_replace('public://', '', $result->uri);
     $source = str_replace('public://', 'https://nursing.ucsf.edu/sites/nursing.ucsf.edu/files/', $result->uri);
     $pathinfo = pathinfo($path);
     $directory = 'public://'.$pathinfo['dirname'];
     // $output = "URI: ".$path." Source: ".$source." Basename: ".$pathinfo['basename'] ;
     // if($pathinfo['dirname']) {
     //   $output .= " directory: ".$directory;
     // }
     file_prepare_directory($directory, FILE_CREATE_DIRECTORY);
      // Load the file.
      $file = file_save_data(file_get_contents($source), $directory.'/'.$pathinfo['basename'], FILE_EXISTS_REPLACE);


      $finalImages[$key]['fid'] = $file->id();
      $finalImages[$key]['title'] = $image->field_basic_spotlight_items_title;
      $finalImages[$key]['alt'] = $image->field_basic_spotlight_items_alt;
    }
    print_r(var_dump($finalImages),1);
    return $finalImages;
  }
}
