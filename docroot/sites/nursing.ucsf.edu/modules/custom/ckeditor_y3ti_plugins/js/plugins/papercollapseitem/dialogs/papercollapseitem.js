/**
 * Copyright (c) 2014, CKSource - Frederico Knabben. All rights reserved.
 * Licensed under the terms of the MIT License (see LICENSE.md).
 */

CKEDITOR.dialog.add('papercollapseitem', function( editor ) {
  return {
    title: 'Paper collapsible Item',
    minWidth: 400,
    minHeight: 100,
    contents: [
      {
        id: 'info',
        elements: [
          {
            id: 'header',
            type: 'text',
            label: 'Header',
            setup: function( widget ) {
              this.setValue( widget.data.header ? widget.data.header : '' );
            },
            // When committing (saving) this field, set its value to the widget data.
            commit: function( widget ) {
              widget.setData( 'header', this.getValue() );
            }
          }
        ]
      }
    ]
  };
} );
