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
      _this.heroImages();
      _this.setupMobileNav();
      _this.toggleMobileNav();
      _this.homepageVideo();
      _this.tabContentSwitch();
      _this.slickNews();
      _this.slickHomepage();
    },
    heroImages: function(){
      var header = $('.header-main')
      if (drupalSettings.heroImages) {
        header.css({'background-image':'url("'+drupalSettings.heroImages[Math.floor(Math.random() * drupalSettings.heroImages.length)]+'")'})
      }
    },
    setupMobileNav: function() {
      $('.region-header #block-mainnavigation-3').clone().appendTo('.mobile-content').attr('id', 'mobile-main-menu');
      $('#mobile-main-menu li.menu-item--expanded > a').append('<i class="arrow"></i>');
      $('#mobile-main-menu i').click(function(ev){
        ev.preventDefault();
        $li = $(this).parent().parent();
        if($li.hasClass('open')) {
          $li.removeClass('open');
        }
        else {
          $li.addClass('open');
        }
      });
    },
    toggleMobileNav: function() {
      $('.mobile-toggle').click(function(){
        $(this).toggleClass('open');
        $('body').toggleClass('mobile-nav-open');
      });
    },
    homepageVideo: function() {
      if ($('#block-homepagevideo').length) {
        var $blockBanner = $('#block-homepagevideo');
        $blockBanner.find('video').attr('controls', false)
        $blockBanner.find('.field--name-field-link-play-video').click(function(event){
          event.preventDefault()
          $blockBanner.find('video').hide()
          $blockBanner.find('.video-banner-content').hide()
          $blockBanner.find('.field--name-field-video-banner-on-click').show()
          var src = $blockBanner.find('.field--name-field-video-banner-on-click iframe').attr('src').replace('autoplay=0&','');
          $blockBanner.find('.field--name-field-video-banner-on-click iframe').attr('src', src + '&autoplay=1')
        })
      }
    },
    tabContentSwitch: function() {
      var pages = document.querySelectorAll('nursing-iron-pages');
      var tabs = document.querySelectorAll('nursing-paper-tabs');
      tabs.forEach(function(el, index){
        el.selected = 0;
        pages[index].selected = 0;
        el.addEventListener('iron-select', function() {
            pages[index].selected = el.selected;
        });
      });
      if (window.location.hash && document.querySelector('a[href="'+window.location.hash+'"]')) {
        var link = document.querySelector('a[href="'+window.location.hash+'"]')
        link.parentNode.click();
      }
    },
    slickNews: function() {
      if ($('.field--name-field-ref-spotlight').length) {
        $('.field--name-field-ref-spotlight .field--name-field-spotlight-images').slick({
          dots: true,
          infinite: true,
          speed: 300,
          slidesToShow: 1
        });
      }
    },
    slickHomepage: function() {
      if ($('.block-views-blockwelcome-to-ucsf-nursing-block-1 .view-content').length){
        $('.block-views-blockwelcome-to-ucsf-nursing-block-1 .view-content').slick({
          infinite: true,
          autoplay: true,
          speed: 300,
          slidesToShow: 1
        });
      }
    }
  };

})(jQuery, Drupal, drupalSettings);
