<?php

/**
 * @file
 * Contains \Drupal\contact_ajax_popup\Tests\ContactAjaxTest.
 */

namespace Drupal\contact_ajax_popup\Tests;

use Drupal\field_ui\Tests\FieldUiTestTrait;
use Drupal\contact\Entity\ContactForm;
use Drupal\simpletest\WebTestBase;

/**
 * Tests storing contact messages and viewing them through UI.
 *
 * @group contact_storage
 */
class ContactAjaxPopupTest extends WebTestBase {

  use FieldUiTestTrait;

  /**
   * Modules to enable.
   *
   * @var array
   */
  public static $modules = array(
    'node',
    'text',
    'block',
    'contact',
    'contact_test',
    'field_ui',
    'contact_ajax_popup',
  );

  /**
   * Tests contact messages submitted through contact form.
   */
  public function testContactAjaxExtended() {
    $this->drupalPlaceBlock('system_breadcrumb_block');
    $this->drupalPlaceBlock('local_actions_block');
    $this->drupalPlaceBlock('page_title_block');

    // Create and login administrative user.
    $admin_user = $this->drupalCreateUser(array(
          'access site-wide contact form',
          'administer contact forms',
          'administer users',
          'administer account settings',
          'administer contact_message fields',
          'administer contact_message form display',
          'administer contact_message display',
          ));
    $this->drupalLogin($admin_user);

    // test if ajax settings has been added
    $this->drupalGet('admin/structure/contact/add');
    $this->assertText(t('Ajax Form'));

    $message = 'Your message has been sent.';

    // add a new contact form to test the default confirmation type
    // this form should be reloaded after submit
    $form_id = 'test_id';
    $mail = 'simpletest@example.com';

    $edit = [];
    // 8.2.x added the message field, which is by default empty. Conditionally
    // submit it if the field can be found.
    $this->drupalGet('admin/structure/contact/add');
    if ($this->xpath($this->constructFieldXpath('name', 'message'))) {
      $edit['message'] = $message;
    }
    $edit['label'] = 'test_label';
    $edit['id'] = $form_id;
    $edit['recipients'] = $mail;
    $edit['reply'] = '';
    $edit['selected'] = TRUE;
    // specific con contact_ajax_popup
    $edit['contact_ajax_popup_enabled'] = TRUE;
    $edit['contact_ajax_popup_confirmation_type'] = CONTACT_AJAX_POPUP_LOAD_FORM;

    $this->drupalPostForm('admin/structure/contact/add', $edit, t('Save'));
    $this->assertText(t('Contact form test_label has been added.'));

    // add a new contact form to test the custom message confirmation type
    // this form should be reload a custom text
    $form_id = 'test_custom_message_id';
    $mail = 'simpletest@example.com';

    $edit = [];
    $edit['label'] = 'test_label';
    $edit['id'] = $form_id;
    $edit['recipients'] = $mail;
    $edit['reply'] = '';
    $edit['selected'] = TRUE;
    // specific con contact_ajax_popup
    $edit['contact_ajax_popup_enabled'] = TRUE;
    $edit['contact_ajax_popup_confirmation_type'] = CONTACT_AJAX_POPUP_LOAD_FROM_MESSAGE;
    $edit['contact_ajax_popup_load_from_message[value]'] = '<div><b>test ajax message</b></div>';

    $this->drupalPostForm('admin/structure/contact/add', $edit, t('Save'));
    $this->assertText(t('Contact form test_label has been added.'));

    // add a new contact form to test the node content confirmation type
    // this form should be reload a node content
    $form_id = 'test_node_content';
    $mail = 'simpletest@example.com';

    $edit = [];
    $edit['label'] = 'test_label';
    $edit['id'] = $form_id;
    $edit['recipients'] = $mail;
    $edit['reply'] = '';
    $edit['selected'] = TRUE;
    // specific con contact_ajax_popup
    $edit['contact_ajax_popup_enabled'] = TRUE;
    $edit['contact_ajax_popup_confirmation_type'] = CONTACT_AJAX_POPUP_LOAD_FROM_URI;

    // create a content type
    $this->drupalCreateContentType(array('type' => 'article', 'name' => 'Article'));
    $node = $this->drupalCreateNode(array(
      'title' => 'test ajax title',
      'type' => 'article',
    ));

    $edit['contact_ajax_popup_load_from_uri'] = 'test ajax title (' . $node->id() . ')';

    $this->drupalPostForm('admin/structure/contact/add', $edit, t('Save'));
    $this->assertText(t('Contact form test_label has been added.'));

    // Ensure that anonymous can submit site-wide contact form.
    user_role_grant_permissions(DRUPAL_ANONYMOUS_RID, array('access site-wide contact form'));
    $this->drupalLogout();

    // send form reload the same form
    $form_id = 'test_id';
    $mail = 'simpletest@example.com';
    // submit a contact form
    $edit = [];
    $edit['name'] = 'Test name';
    $edit['mail'] = $mail;
    $edit['subject[0][value]'] = 'test subject';
    $edit['message[0][value]'] = 'test message';
    $this->drupalGet('contact/' . $form_id);
    $commands = $this->drupalPostAjaxForm(NULL, $edit, array('op' => t('Send message')));
    $match = strpos($commands[2]['data'], 'Your message has been sent.') !== FALSE ? TRUE : FALSE;
    $this->assertTrue($match, '[OK] Your message has been sent.');

    // submit form reload custom message
    $form_id = 'test_custom_message_id';
    $mail = 'simpletest@example.com';
    // submit a contact form
    $edit = [];
    $edit['name'] = 'Test name';
    $edit['mail'] = $mail;
    $edit['subject[0][value]'] = 'test subject';
    $edit['message[0][value]'] = 'test message';
    $this->drupalGet('contact/' . $form_id);
    $commands = $this->drupalPostAjaxForm(NULL, $edit, array('op' => t('Send message')));
    $match = strpos($commands[1]['data'], 'test ajax message') !== FALSE ? TRUE : FALSE;
    $this->assertTrue($match, '[OK] test ajax message');

    // send form reload another node
    $form_id = 'test_node_content';
    $mail = 'simpletest@example.com';
    // submit a contact form
    $edit = [];
    $edit['name'] = 'Test name';
    $edit['mail'] = $mail;
    $edit['subject[0][value]'] = 'test subject';
    $edit['message[0][value]'] = 'test message';
    $this->drupalGet('contact/' . $form_id);
    $commands = $this->drupalPostAjaxForm(NULL, $edit, array('op' => t('Send message')));
    $match = strpos($commands[1]['data'], 'test ajax title') !== FALSE ? TRUE : FALSE;
    $this->assertTrue($match, '[OK] test ajax title');
  }
}
