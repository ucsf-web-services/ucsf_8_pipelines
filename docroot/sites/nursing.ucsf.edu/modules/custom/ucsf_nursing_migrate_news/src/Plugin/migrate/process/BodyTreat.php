<?php
namespace Drupal\ucsf_nursing_migrate_news\Plugin\migrate\process;

use Drupal\migrate\MigrateSkipRowException;
use Drupal\migrate\MigrateExecutableInterface;
use Drupal\migrate\ProcessPluginBase;
use Drupal\migrate\Row;
use Drupal\Component\Utility\Html;
use Drupal\Component\Serialization\Json;
/**
 * Example on how to migrate an image from any place in Drupal.
 *
 * @MigrateProcessPlugin(
 *   id = "body_treat"
 * )
 */
class BodyTreat extends ProcessPluginBase {
  /**
   * {@inheritdoc}
   */
  public function transform($value, MigrateExecutableInterface $migrate_executable, Row $row, $destination_property) {


    $value = ' ' . $value . ' ';
    $value = preg_replace_callback('/\[\[.*?\]\]/s', [&$this, 'replaceToken'], $value);
    $doc = Html::load($value);
    // $new_html = '';
    // Get the links.
    $links = $doc->getElementsByTagName('a');
    foreach ($links as $link) {
      // Change the value of an attribute based on the current value.
      $href = $link->getAttribute('href');
      $urlParse = parse_url($href);
      $pathinfo = pathinfo($urlParse['path']);
      if ($pathinfo['extension'] == 'pdf' && strpos($href,'nursing.ucsf.edu')) {
        $cleanDir = str_replace('/sites/nursing.ucsf.edu/files','',$pathinfo['dirname']);
        $directory = 'public://'.$cleanDir;
        file_prepare_directory($directory, FILE_CREATE_DIRECTORY);
        if ($urlParse['host'] == 'nursing.ucsf.edu') {
          $source = $href;
        } else if (!$urlParse['host']){
          $source = 'https://nursing.ucsf.edu'.$href;
        }
        $file = file_save_data(file_get_contents($source), $directory.'/'.$pathinfo['basename'], FILE_EXISTS_REPLACE);
      }
    }

    // Get the images.
    $images = $doc->getElementsByTagName('img');
    foreach ($images as $image) {
      $src = $image->getAttribute('src');
      $urlParse = parse_url($src);
      if ($urlParse['host'] == 'nursing.ucsf.edu') {
        $pathinfo = pathinfo($urlParse['path']);
        $cleanDir = str_replace('/sites/nursing.ucsf.edu/files','',$pathinfo['dirname']);
        $directory = 'public://'.$cleanDir;
        file_prepare_directory($directory, FILE_CREATE_DIRECTORY);
        $source = $src;
        $file = file_save_data(file_get_contents($source), $directory.'/'.$pathinfo['basename'], FILE_EXISTS_REPLACE);
        $image->setAttribute('data-entity-type', 'file');
        $image->setAttribute('data-entity-uuid', $file->uuid());
      }
    }

    // Get the new HTML
    $new_html = Html::serialize($doc);
    return $new_html;
  }
  /**
  * Replace callback to convert a media file tag into HTML markup.
  *
  * Partially copied from 7.x media module media.filter.inc (media_filter).
  *
  * @param string $match
  *   Takes a match of tag code
  */
 private function replaceToken($match) {
   $settings = [];
   $match = str_replace("[[", "", $match);
   $match = str_replace("]]", "", $match);
   $tag = $match[0];

   try {
     if (!is_string($tag)) {
       throw new MigrateSkipRowException('No File Tag', TRUE);
     }

     // Make it into a fancy array.
     $tag_info = Json::decode($tag);
     if (!isset($tag_info['fid'])) {
       throw new MigrateSkipRowException('No FID', TRUE);
     }
     // The class attributes is a string, but drupal requires it to be an array, so we fix it here.
     if (!empty($tag_info['attributes']['class'])) {
       $tag_info['attributes']['class'] = explode(" ", $tag_info['attributes']['class']);
     }
     if ($tag_info['fields']['field_image_position[und]'] != '_none') {
       $tag_info['attributes']['class'][] = $tag_info['fields']['field_image_position[und]'];
     }

     $settings['attributes'] = is_array($tag_info['attributes']) ? $tag_info['attributes'] : [];
     // Switch to external database
    \Drupal\Core\Database\Database::setActiveConnection('upgrade');

    // Get a connection going
    $db = \Drupal\Core\Database\Database::getConnection();

    $query = $db->select('file_managed', 'f');
    $query->fields('f', array('uri', 'fid'));
    $query->condition('fid', $tag_info['fid'], '=');
    $result = $query->execute()->fetchObject();
    // Switch back
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
     $settings['attributes']['data-entity-type'] = 'file';
     $settings['attributes']['data-entity-uuid'] = $file->uuid();
     if (!$file) {
       throw new MigrateSkipRowException('Couldn\'t Load File', TRUE);
     }
   }
   catch (Exception $e) {
     $msg = t('Unable to render media from %tag. Error: %error', ['%tag' => $tag, '%error' => $e->getMessage()]);
     throw new MigrateSkipRowException($msg, TRUE);
   }

   print_r(var_dump($settings['attributes']),1);
   // Render the image.
   $element = [
     '#theme' => 'image',
     '#uri' => $result->uri,
     '#attributes' => isset($settings['attributes']) ? $settings['attributes'] : '',
     '#width' => $settings['width'],
     '#height' => $settings['height'],
   ];

   $output = \Drupal::service('renderer')->renderRoot($element);

   return $output;
 }
}
