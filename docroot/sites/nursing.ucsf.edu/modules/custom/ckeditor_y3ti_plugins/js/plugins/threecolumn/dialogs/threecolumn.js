/**
 * Copyright (c) 2014, CKSource - Frederico Knabben. All rights reserved.
 * Licensed under the terms of the MIT License (see LICENSE.md).
 */

CKEDITOR.dialog.add('threecolumn', function( editor ) {
  return {
    title: 'Three Columns',
    minWidth: 200,
    minHeight: 100,
    contents: [
      {
        id: 'info',
        elements: [
          {
            id: 'layout',
            type: 'select',
            label: 'Layout',
            items: [
              [ '33/33/33', '33-33-33' ],
              [ '60/20/20', '60-20-20' ],
              [ '20/60/20', '20-60-20' ],
              [ '20/20/60', '20-20-60' ],
            ],
            // When setting up this field, set its value to the "align" value from widget data.
            // Note: Align values used in the widget need to be the same as those defined in the "items" array above.
            setup: function( widget ) {
              this.setValue( widget.data.layout ? widget.data.layout : '20-60-20' );
            },
            // When committing (saving) this field, set its value to the widget data.
            commit: function( widget ) {
              widget.setData( 'layout', this.getValue() );
            }
          },
		  {
            id: 'FirstColumn_color',
            type: 'select',
            label: 'First Column Background Color',
            items: [
              [ 'Transparent', 'transparent' ],
              [ 'White', 'white' ],
              [ 'Grey', 'grey' ],
              [ 'Blue', 'blue' ],
              [ 'Teal', 'teal' ],
              [ 'Lime', 'lime' ],
              [ 'Orange', 'orange'],
              [ 'Interactive Blue', 'interactive-blue'],
              [ 'Interactive Dark Blue', 'interactive-dark-blue'],
              [ 'Interactive Green', 'interactive-green'],
              [ 'Interactive Orange', 'interactive-orange'],
              [ 'Interactive Teal', 'interactive-teal'],
              [ 'Interactive Purple', 'interactive-purple'],
              [ 'Interactive Red', 'interactive-red'],
              [ 'Interactive Yellow', 'interactive-yellow']
            ],
            // When setting up this field, set its value to the "align" value from widget data.
            // Note: Align values used in the widget need to be the same as those defined in the "items" array above.
            setup: function( widget ) {
              this.setValue( widget.data.FirstColumn_color ? widget.data.FirstColumn_color : 'grey' );
            },
            // When committing (saving) this field, set its value to the widget data.
            commit: function( widget ) {
              widget.setData( 'FirstColumn_color', this.getValue() );
            }
          },
		  {
            id: 'SecondColumn_color',
            type: 'select',
            label: 'Second Column Background Color',
            items: [
              [ 'Transparent', 'transparent' ],
              [ 'White', 'white' ],
              [ 'Grey', 'grey' ],
              [ 'Blue', 'blue' ],
              [ 'Teal', 'teal' ],
              [ 'Lime', 'lime' ],
              [ 'Orange', 'orange'],
              [ 'Interactive Blue', 'interactive-blue'],
              [ 'Interactive Dark Blue', 'interactive-dark-blue'],
              [ 'Interactive Green', 'interactive-green'],
              [ 'Interactive Orange', 'interactive-orange'],
              [ 'Interactive Teal', 'interactive-teal'],
              [ 'Interactive Purple', 'interactive-purple'],
              [ 'Interactive Red', 'interactive-red'],
              [ 'Interactive Yellow', 'interactive-yellow']
            ],
            // When setting up this field, set its value to the "align" value from widget data.
            // Note: Align values used in the widget need to be the same as those defined in the "items" array above.
            setup: function( widget ) {
              this.setValue( widget.data.SecondColumn_color ? widget.data.SecondColumn_color : 'blue' );
            },
            // When committing (saving) this field, set its value to the widget data.
            commit: function( widget ) {
              widget.setData( 'SecondColumn_color', this.getValue() );
            }
          },
		  {
            id: 'ThirdColumn_color',
            type: 'select',
            label: 'Third Column Background Color',
            items: [
              [ 'Transparent', 'transparent' ],
              [ 'White', 'white' ],
              [ 'Grey', 'grey' ],
              [ 'Blue', 'blue' ],
              [ 'Teal', 'teal' ],
              [ 'Lime', 'lime' ],
              [ 'Orange', 'orange'],
              [ 'Interactive Blue', 'interactive-blue'],
              [ 'Interactive Dark Blue', 'interactive-dark-blue'],
              [ 'Interactive Green', 'interactive-green'],
              [ 'Interactive Orange', 'interactive-orange'],
              [ 'Interactive Teal', 'interactive-teal'],
              [ 'Interactive Purple', 'interactive-purple'],
              [ 'Interactive Red', 'interactive-red'],
              [ 'Interactive Yellow', 'interactive-yellow']
            ],
            // When setting up this field, set its value to the "align" value from widget data.
            // Note: Align values used in the widget need to be the same as those defined in the "items" array above.
            setup: function( widget ) {
              this.setValue( widget.data.ThirdColumn_color ? widget.data.ThirdColumn_color : 'orange' );
            },
            // When committing (saving) this field, set its value to the widget data.
            commit: function( widget ) {
              widget.setData( 'ThirdColumn_color', this.getValue() );
            }
          }
        ]
      }
    ]
  };
} );
