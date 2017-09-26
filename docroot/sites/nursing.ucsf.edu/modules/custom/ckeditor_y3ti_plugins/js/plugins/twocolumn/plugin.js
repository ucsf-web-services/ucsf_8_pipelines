
CKEDITOR.plugins.add('twocolumn', {
  requires: 'widget',
  icons: 'twocolumn',

  init: function(editor) {
    CKEDITOR.dialog.add('twocolumn', this.path + 'dialogs/twocolumn.js' );

    var pluginDirectory = this.path;
    editor.addContentsCss( pluginDirectory + 'css/twocolumn.css' );
    editor.widgets.add('twocolumn', {
      allowedContent:
        'div(!wysiwyg_twocols,layout--50-50,layout--80-20,layout--70-30,layout--60-40,layout--40-60,layout--30-70,layout--20-80);' +
        'div(!wysiwyg_twocols--first); div(!wysiwyg_twocols--second)',

      requiredContent: 'div(wysiwyg_twocols); div(!wysiwyg_twocols--first); div(!wysiwyg_twocols--second)',

      editables: {
        firstCol: {
          selector: '.wysiwyg_twocols--first',
        },
        secondCol: {
          selector: '.wysiwyg_twocols--second',
        }
      },

      // Define the template of a new Simple Box widget.
      // The template will be used when creating new instances of the Simple Box widget.
      template:
        '<div class="wysiwyg_twocols">' +
          '<div class="wysiwyg_twocols--first"><p>Lorem ipsum dolor sit amet, ex labore vivendo laboramus has, vel at putant legendos. Quod appareat id eos, noster malorum et mea.</p></div>' +
          '<div class="wysiwyg_twocols--second"><p>Lorem ipsum dolor sit amet, ex labore vivendo laboramus has, vel at putant legendos. Quod appareat id eos, noster malorum et mea.</p></div>' +
        '</div>',

      button: 'Create two columns',
      dialog: 'twocolumn',

      upcast: function(element) {
        return element.name == 'div' && element.hasClass( 'wysiwyg_twocols' );
      },
      init: function() {
        /* column color 1*/
          if ( this.element.getChild(0).hasClass( 'bg--transparent' ) )
            this.setData( 'FirstColumn_color', 'transparent' );
  		    if ( this.element.getChild(0).hasClass( 'bg--white' ) )
            this.setData( 'FirstColumn_color', 'white' );
          if ( this.element.getChild(0).hasClass( 'bg--grey' ) )
            this.setData( 'FirstColumn_color', 'grey' );
          if ( this.element.getChild(0).hasClass( 'bg--blue' ) )
            this.setData( 'FirstColumn_color', 'blue' );
          if ( this.element.getChild(0).hasClass( 'bg--teal' ) )
            this.setData( 'FirstColumn_color', 'teal' );
          if ( this.element.getChild(0).hasClass( 'bg--lime' ) )
            this.setData( 'FirstColumn_color', 'lime' );
          if ( this.element.getChild(0).hasClass( 'bg--orange' ) )
            this.setData( 'FirstColumn_color', 'orange' );
          if ( this.element.getChild(0).hasClass( 'bg--interactive-blue' ) )
            this.setData( 'FirstColumn_color', 'interactive-blue' );
          if ( this.element.getChild(0).hasClass( 'bg--interactive-dark-blue' ) )
            this.setData( 'FirstColumn_color', 'interactive-dark-blue' );
          if ( this.element.getChild(0).hasClass( 'bg--interactive-green' ) )
            this.setData( 'FirstColumn_color', 'interactive-green' );
          if ( this.element.getChild(0).hasClass( 'bg--interactive-orange' ) )
            this.setData( 'FirstColumn_color', 'interactive-orange' );
          if ( this.element.getChild(0).hasClass( 'bg--interactive-teal' ) )
            this.setData( 'FirstColumn_color', 'interactive-teal' );
          if ( this.element.getChild(0).hasClass( 'bg--interactive-purple' ) )
            this.setData( 'FirstColumn_color', 'interactive-purple' );
          if ( this.element.getChild(0).hasClass( 'bg--interactive-red' ) )
            this.setData( 'FirstColumn_color', 'interactive-red' );
          if ( this.element.getChild(0).hasClass( 'bg--interactive-yellow' ) )
            this.setData( 'FirstColumn_color', 'interactive-yellow' );
        /* column color 2*/
          if ( this.element.getChild(1).hasClass( 'bg--transparent' ) )
            this.setData( 'SecondColumn_color', 'transparent' );
  		    if ( this.element.getChild(1).hasClass( 'bg--white' ) )
            this.setData( 'SecondColumn_color', 'white' );
          if ( this.element.getChild(1).hasClass( 'bg--grey' ) )
            this.setData( 'SecondColumn_color', 'grey' );
          if ( this.element.getChild(1).hasClass( 'bg--blue' ) )
            this.setData( 'SecondColumn_color', 'blue' );
          if ( this.element.getChild(1).hasClass( 'bg--teal' ) )
            this.setData( 'SecondColumn_color', 'teal' );
          if ( this.element.getChild(1).hasClass( 'bg--lime' ) )
            this.setData( 'SecondColumn_color', 'lime' );
          if ( this.element.getChild(1).hasClass( 'bg--orange' ) )
            this.setData( 'SecondColumn_color', 'orange' );
          if ( this.element.getChild(1).hasClass( 'bg--interactive-blue' ) )
            this.setData( 'SecondColumn_color', 'interactive-blue' );
          if ( this.element.getChild(1).hasClass( 'bg--interactive-dark-blue' ) )
            this.setData( 'SecondColumn_color', 'interactive-dark-blue' );
          if ( this.element.getChild(1).hasClass( 'bg--interactive-green' ) )
            this.setData( 'SecondColumn_color', 'interactive-green' );
          if ( this.element.getChild(1).hasClass( 'bg--interactive-orange' ) )
            this.setData( 'SecondColumn_color', 'interactive-orange' );
          if ( this.element.getChild(1).hasClass( 'bg--interactive-teal' ) )
            this.setData( 'SecondColumn_color', 'interactive-teal' );
          if ( this.element.getChild(1).hasClass( 'bg--interactive-purple' ) )
            this.setData( 'SecondColumn_color', 'interactive-purple' );
          if ( this.element.getChild(1).hasClass( 'bg--interactive-red' ) )
            this.setData( 'SecondColumn_color', 'interactive-red' );
          if ( this.element.getChild(1).hasClass( 'bg--interactive-yellow' ) )
            this.setData( 'SecondColumn_color', 'interactive-yellow' );

        if ( this.element.hasClass( 'layout--50-50' ) )
          this.setData( 'layout', '50-50' );
        if ( this.element.hasClass( 'layout--80-20' ) )
          this.setData( 'layout', '80-20' );
        if ( this.element.hasClass( 'layout--70-30' ) )
          this.setData( 'layout', '70-30' );
        if ( this.element.hasClass( 'layout--60-40' ) )
          this.setData( 'layout', '60-40' );
        if ( this.element.hasClass( 'layout--40-60' ) )
          this.setData( 'layout', '40-60' );
        if ( this.element.hasClass( 'layout--30-70' ) )
          this.setData( 'layout', '30-70' );
        if ( this.element.hasClass( 'layout--20-80' ) )
          this.setData( 'layout', '20-80' );
      },
      data: function() {
        if ( this.data.FirstColumn_color )
          this.element.getChild(0).removeClass( 'bg--transparent' );
          this.element.getChild(0).removeClass( 'bg--white' );
          this.element.getChild(0).removeClass( 'bg--grey' );
          this.element.getChild(0).removeClass( 'bg--blue' );
          this.element.getChild(0).removeClass( 'bg--teal' );
          this.element.getChild(0).removeClass( 'bg--lime' );
          this.element.getChild(0).removeClass( 'bg--orange' );
          this.element.getChild(0).removeClass( 'bg--interactive-blue' );
          this.element.getChild(0).removeClass( 'bg--interactive-dark-blue' );
          this.element.getChild(0).removeClass( 'bg--interactive-green' );
          this.element.getChild(0).removeClass( 'bg--interactive-orange' );
          this.element.getChild(0).removeClass( 'bg--interactive-teal' );
          this.element.getChild(0).removeClass( 'bg--interactive-purple' );
          this.element.getChild(0).removeClass( 'bg--interactive-red' );
          this.element.getChild(0).removeClass( 'bg--interactive-yellow' );
          this.element.getChild(0).addClass( 'bg--' + this.data.FirstColumn_color );
        if ( this.data.SecondColumn_color )
          this.element.getChild(1).removeClass( 'bg--transparent' );
          this.element.getChild(1).removeClass( 'bg--white' );
          this.element.getChild(1).removeClass( 'bg--grey' );
          this.element.getChild(1).removeClass( 'bg--blue' );
          this.element.getChild(1).removeClass( 'bg--teal' );
          this.element.getChild(1).removeClass( 'bg--lime' );
          this.element.getChild(1).removeClass( 'bg--orange' );
          this.element.getChild(1).removeClass( 'bg--interactive-blue' );
          this.element.getChild(1).removeClass( 'bg--interactive-dark-blue' );
          this.element.getChild(1).removeClass( 'bg--interactive-green' );
          this.element.getChild(1).removeClass( 'bg--interactive-orange' );
          this.element.getChild(1).removeClass( 'bg--interactive-teal' );
          this.element.getChild(1).removeClass( 'bg--interactive-purple' );
          this.element.getChild(1).removeClass( 'bg--interactive-red' );
          this.element.getChild(1).removeClass( 'bg--interactive-yellow' )
          this.element.getChild(1).addClass( 'bg--' + this.data.SecondColumn_color );



        this.element.removeClass( 'layout--50-50' );
        this.element.removeClass( 'layout--80-20' );
        this.element.removeClass( 'layout--70-30' );
        this.element.removeClass( 'layout--60-40' );
        this.element.removeClass( 'layout--40-60' );
        this.element.removeClass( 'layout--30-70' );
        this.element.removeClass( 'layout--20-80' );
        if ( this.data.layout )
          this.element.addClass( 'layout--' + this.data.layout );
      }
    });
  }
});
