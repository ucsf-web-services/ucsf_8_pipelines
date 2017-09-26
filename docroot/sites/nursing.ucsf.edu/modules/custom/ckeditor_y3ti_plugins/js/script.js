/**
 * @file
 * Scripts for UCSF nursing
 *
 */
(function ($, Drupal, drupalSettings) {

  /**
   * Use this behavior as a template for custom Javascript.
   */
  Drupal.behaviors.nursing = {
    attach: function (context, settings) {
      _this = this;
      _this.tabContentSwitch();

    },
    tabContentSwitch: function() {
      var pages = document.querySelectorAll('nursing-iron-pages');
      var tabs = document.querySelectorAll('nursing-paper-tabs');
      tabs.forEach(function(el, index){
        console.log(el);
        el.selected = 0;
        pages[index].selected = 0;
        el.addEventListener('iron-select', function() {
            pages[index].selected = el.selected;
        });
      });
    }
  };

})(jQuery, Drupal, drupalSettings);
