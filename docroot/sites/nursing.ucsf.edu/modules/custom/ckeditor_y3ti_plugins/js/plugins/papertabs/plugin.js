// CKEDITOR.config.extraPlugins = 'paper-collapse-item';
// CKEDITOR.config.allowedContent = true;
var maxEditable = 10;
CKEDITOR.plugins.add('papertabs', {
  requires: 'widget',

  icons: 'papertabs',
  init: function(editor) {
    CKEDITOR.dialog.add('papertabs', this.path + 'dialogs/papertabs.js' );
    var pluginDirectory = this.path;
    editor.addContentsCss( pluginDirectory + 'css/papertabs.css' );
    editor.widgets.add('papertabs', {
      allowedContent:
        'div(!wysiwyg-tabs); nursing-paper-tabs(*); nursing-iron-pages(*); nursing-paper-tab(*); div',

      requiredContent: 'div(!wysiwyg-tabs); nursing-paper-tabs(*); nursing-iron-pages(*); nursing-paper-tab; div',

      editables: _editables(),

      // Define the template of a new Simple Box widget.
      // The template will be used when creating new instances of the Simple Box widget.
      template:
        '<div class="wysiwyg-tabs">'+
          '<nursing-paper-tabs selected="0">'+
            '<nursing-paper-tab link><div class="tab1"><a href="#item1">Tab title</a></div></nursing-paper-tab>'+
            '<nursing-paper-tab link><div class="tab2"><a href="#item2">Tab title</a></div></nursing-paper-tab>'+
            '<nursing-paper-tab link><div class="tab3"><a href="#item3">Tab title</a></div></nursing-paper-tab>'+
            '<nursing-paper-tab link><div class="tab4"><a href="#item4">Tab title</a></div></nursing-paper-tab>'+
            '<nursing-paper-tab link><div class="tab5"><a href="#item5">Tab title</a></div></nursing-paper-tab>'+
            '<nursing-paper-tab link><div class="tab6"><a href="#item6">Tab title</a></div></nursing-paper-tab>'+
            '<nursing-paper-tab link><div class="tab7"><a href="#item7">Tab title</a></div></nursing-paper-tab>'+
            '<nursing-paper-tab link><div class="tab8"><a href="#item8">Tab title</a></div></nursing-paper-tab>'+
            '<nursing-paper-tab link><div class="tab9"><a href="#item9">Tab title</a></div></nursing-paper-tab>'+
            '<nursing-paper-tab link><div class="tab10"><a href="#item10">Tab title</a></div></nursing-paper-tab>'+
          '</nursing-paper-tabs>'+
          '<nursing-iron-pages selected="0">'+
            '<div class="content1">Tab content</div>'+
            '<div class="content2">Tab content</div>'+
            '<div class="content3">Tab content</div>'+
            '<div class="content4">Tab content</div>'+
            '<div class="content5">Tab content</div>'+
            '<div class="content6">Tab content</div>'+
            '<div class="content7">Tab content</div>'+
            '<div class="content8">Tab content</div>'+
            '<div class="content9">Tab content</div>'+
            '<div class="content10">Tab content</div>'+
          '</nursing-iron-pages>'+
        '</div>',

      button: 'Create a tab items',
      dialog: 'papertabs',

      upcast: function(element) {
        return element.name == 'div' && element.hasClass( 'wysiwyg-tabs' );
      },

      init: function() {
        var tabs = this.element.findOne('nursing-paper-tabs')
        // this.element.setHtml('<paper-tabs selected="0"></paper-tabs><iron-pages selected="0"></iron-pages>')
        if (tabs.$.length != 10) {
          this.setData( 'numOfTabs', tabs.$.length );
        }

        var pages = this.element.find('nursing-iron-pages div');
        var tabs = this.element.find('nursing-paper-tab');
        tabs.$.forEach(function(el, index){
          pages.$.forEach(function(el, index){
            pages.getItem(index).removeClass('iron-selected') ;
          });
          if (tabs.getItem(index).hasClass('iron-selected')) {
            pages.getItem(index).addClass('iron-select') ;
          }
          el.addEventListener('click', function() {
            pages.$.forEach(function(el, index){
              pages.getItem(index).removeClass('iron-select');
              pages.getItem(index).removeClass('iron-selected');
            });
            tabs.$.forEach(function(el, index){
              tabs.getItem(index).removeClass('iron-selected') ;
            });

            tabs.getItem(index).addClass('iron-selected') ;
            pages.getItem(index).addClass('iron-select') ;
          });
        });
      },
      data: function() {
        if ( this.data.numOfTabs && this.data.numOfTabs != this.element.find('nursing-paper-tab').$.length){
          var tabs = this.element.find('nursing-paper-tab')
          var content = this.element.find('nursing-iron-pages div')
          for (var i = 9; i >= this.data.numOfTabs; i--) {
            tabs.$[i].remove()
            content.$[i].remove()
          }
        }
      }
    });
  }
});
function _editables() {
  var editables = {};

  for (var i = 1; i <= maxEditable; i++) {
    editables['tab' + i] = {
      selector: '.tab' + i,
      allowedContent: 'a[!href]'
    };
    editables['content' + i] = {
      selector: '.content' + i
    };
  }

  return editables;
}
