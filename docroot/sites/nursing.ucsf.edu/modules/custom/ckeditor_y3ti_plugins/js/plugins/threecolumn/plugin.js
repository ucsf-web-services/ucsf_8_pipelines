
CKEDITOR.plugins.add('threecolumn', {
  requires: 'widget',
  icons: 'threecolumn',

  init: function(editor) {
    CKEDITOR.dialog.add('threecolumn', this.path + 'dialogs/threecolumn.js' );
    var pluginDirectory = this.path;
    editor.addContentsCss( pluginDirectory + 'css/threecolumn.css' );
    editor.widgets.add('threecolumn', {
      allowedContent:
        'div(!wysiwyg_threecols,layout--33-33,layout--33-33-33,layout--60-20-20,layout--20-60-20,layout--20-20-60);' +
        'div(!wysiwyg_threecols--first); div(!wysiwyg_threecols--second); div(!wysiwyg_threecols--third)',

      requiredContent: 'div(wysiwyg_threecols); div(!wysiwyg_threecols--first); div(!wysiwyg_threecols--second); div(!wysiwyg_threecols--third)',

      editables: {
        firstCol: {
          selector: '.wysiwyg_threecols--first',
        },
        secondCol: {
          selector: '.wysiwyg_threecols--second',
        },
        thirdCol: {
          selector: '.wysiwyg_threecols--third',
        }
      },

      // Define the template of a new Simple Box widget.
      // The template will be used when creating new instances of the Simple Box widget.
      template:
        '<div class="wysiwyg_threecols">' +
          '<div class="wysiwyg_threecols--first"><p>Lorem ipsum dolor sit amet, ex labore vivendo laboramus has, vel at putant legendos. Quod appareat id eos, noster malorum et mea.</p></div>' +
          '<div class="wysiwyg_threecols--second"><p>Lorem ipsum dolor sit amet, ex labore vivendo laboramus has, vel at putant legendos. Quod appareat id eos, noster malorum et mea.</p></div>' +
          '<div class="wysiwyg_threecols--third"><p>Lorem ipsum dolor sit amet, ex labore vivendo laboramus has, vel at putant legendos. Quod appareat id eos, noster malorum et mea.</p></div>' +
        '</div>',

      button: 'Create three columns',
      dialog: 'threecolumn',

      upcast: function(element) {
        return element.name == 'div' && element.hasClass( 'wysiwyg_threecols' );
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
      /* column color 2*/
        if ( this.element.getChild(2).hasClass( 'bg--transparent' ) )
          this.setData( 'ThirdColumn_color', 'transparent' );
		    if ( this.element.getChild(2).hasClass( 'bg--white' ) )
          this.setData( 'ThirdColumn_color', 'white' );
        if ( this.element.getChild(2).hasClass( 'bg--grey' ) )
          this.setData( 'ThirdColumn_color', 'grey' );
        if ( this.element.getChild(2).hasClass( 'bg--blue' ) )
          this.setData( 'ThirdColumn_color', 'blue' );
        if ( this.element.getChild(2).hasClass( 'bg--teal' ) )
          this.setData( 'ThirdColumn_color', 'teal' );
        if ( this.element.getChild(2).hasClass( 'bg--lime' ) )
          this.setData( 'ThirdColumn_color', 'lime' );
        if ( this.element.getChild(2).hasClass( 'bg--orange' ) )
          this.setData( 'ThirdColumn_color', 'orange' );
        if ( this.element.getChild(2).hasClass( 'bg--interactive-blue' ) )
          this.setData( 'ThirdColumn_color', 'interactive-blue' );
        if ( this.element.getChild(2).hasClass( 'bg--interactive-dark-blue' ) )
          this.setData( 'ThirdColumn_color', 'interactive-dark-blue' );
        if ( this.element.getChild(2).hasClass( 'bg--interactive-green' ) )
          this.setData( 'ThirdColumn_color', 'interactive-green' );
        if ( this.element.getChild(2).hasClass( 'bg--interactive-orange' ) )
          this.setData( 'ThirdColumn_color', 'interactive-orange' );
        if ( this.element.getChild(2).hasClass( 'bg--interactive-teal' ) )
          this.setData( 'ThirdColumn_color', 'interactive-teal' );
        if ( this.element.getChild(2).hasClass( 'bg--interactive-purple' ) )
          this.setData( 'ThirdColumn_color', 'interactive-purple' );
        if ( this.element.getChild(2).hasClass( 'bg--interactive-red' ) )
          this.setData( 'ThirdColumn_color', 'interactive-red' );
        if ( this.element.getChild(2).hasClass( 'bg--interactive-yellow' ) )
          this.setData( 'ThirdColumn_color', 'interactive-yellow' );
		/* column color*/
        if ( this.element.hasClass( 'layout--33-33-33' ) || this.element.hasClass( 'layout--33-33' ) )
          this.setData( 'layout', '33-33-33' );
        if ( this.element.hasClass( 'layout--60-20-20' ) )
          this.setData( 'layout', '60-20-20' );
        if ( this.element.hasClass( 'layout--20-60-20' ) )
          this.setData( 'layout', '20-60-20' );
        if ( this.element.hasClass( 'layout--20-20-60' ) )
          this.setData( 'layout', '20-20-60' );
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
          this.element.getChild(0).removeClass( 'bg--interactive-yellow' )
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
        if ( this.data.ThirdColumn_color )
          this.element.getChild(2).removeClass( 'bg--transparent' );
          this.element.getChild(2).removeClass( 'bg--white' );
          this.element.getChild(2).removeClass( 'bg--grey' );
          this.element.getChild(2).removeClass( 'bg--blue' );
          this.element.getChild(2).removeClass( 'bg--teal' );
          this.element.getChild(2).removeClass( 'bg--lime' );
          this.element.getChild(2).removeClass( 'bg--orange' );
          this.element.getChild(2).removeClass( 'bg--interactive-blue' );
          this.element.getChild(2).removeClass( 'bg--interactive-dark-blue' );
          this.element.getChild(2).removeClass( 'bg--interactive-green' );
          this.element.getChild(2).removeClass( 'bg--interactive-orange' );
          this.element.getChild(2).removeClass( 'bg--interactive-teal' );
          this.element.getChild(2).removeClass( 'bg--interactive-purple' );
          this.element.getChild(2).removeClass( 'bg--interactive-red' );
          this.element.getChild(2).removeClass( 'bg--interactive-yellow' )
          this.element.getChild(2).addClass( 'bg--' + this.data.ThirdColumn_color );

        this.element.removeClass( 'layout--33-33-33' );
        this.element.removeClass( 'layout--60-20-20' );
        this.element.removeClass( 'layout--20-60-20' );
        this.element.removeClass( 'layout--20-20-60' );
        if ( this.data.layout )
          this.element.addClass( 'layout--' + this.data.layout );
      }
    });
  }
});
