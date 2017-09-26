// CKEDITOR.config.extraPlugins = 'paper-collapse-item';
// CKEDITOR.config.allowedContent = true;
CKEDITOR.on('instanceReady', function (ev) {
        ev.editor.setKeystroke(CKEDITOR.ALT + 32 /*0*/, false);
    });
CKEDITOR.plugins.add('papercollapseitem', {
  requires: 'widget',

  icons: 'papercollapseitem',
  init: function(editor) {
    CKEDITOR.dialog.add('papercollapseitem', this.path + 'dialogs/papercollapseitem.js' );
    var pluginDirectory = this.path;
    editor.addContentsCss( pluginDirectory + 'css/papercollapseitem.css' );
    editor.addContentsCss('https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css');
    editor.widgets.add('papercollapseitem', {
      allowedContent:
        'nursing-paper-collapse-item',

      requiredContent: 'nursing-paper-collapse-item',

      editables: {
        header: '.header-text',
        content: '.content-text'
      },

      // Define the template of a new Simple Box widget.
      // The template will be used when creating new instances of the Simple Box widget.
      template:
        '<nursing-paper-collapse-item opened>'+
          '<div slot="header-text" class="header-text">Item 1</div>'+
          '<div slot="content-text" class="content-text">Enter content.</div>'+
        '</nursing-paper-collapse-item>',

      button: 'Create a collapsible item',
      // dialog: 'papercollapseitem',

      upcast: function(element) {
        return element.name == 'nursing-paper-collapse-item';
      },

      init: function() {
        this.setData( 'header', this.element.getAttribute('header') );
        // console.log(this.element.$.getEventListeners());
        // // $(this.element.$)
      },
      data: function() {
        if ( this.data.header )
          this.element.setAttribute( 'header', this.data.header );
      }
    });
  }
});
