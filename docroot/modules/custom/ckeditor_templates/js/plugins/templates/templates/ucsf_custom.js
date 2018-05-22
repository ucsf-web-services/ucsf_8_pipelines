/**
 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

// Register a templates definition set named "ucsf_custom".
CKEDITOR.addTemplates( 'ucsf_custom', {
    // The name of sub folder which hold the shortcut preview images of the
    // templates.
    imagesPath: CKEDITOR.getUrl( CKEDITOR.plugins.getPath( 'templates' ) + 'templates/images/' ),

    // The templates definitions.
    templates: [
        {
            title: 'UCSF Custom Blockquote',
            image: 'custom_block_quote.png',
            description: 'Custom Blockquote for UCSF.',
            html: '<div class="block-quote-custom">'+
                    '<div class="quote">'+
                        '<span class="open-quote">&ldquo;</span>'+
                        '<p>'+
                        'Type the content for the blockquote here.'+
                        '</p>'+
                        '<span class="close-quote">&rdquo;</span>'+
                    '</div>'+
                    '<div class="from">'+
                        '<strong>-'+
                            'Type the source\'s name here.'+
                        '</strong> '+
                            'Type the source\'s occupation here.'+
                    '</div>'+
                 '</div>'
        },
        {
            title: 'Two Columns Text',
            image: 'two_columns.jpg',
            description: 'Two Columns Text',
            html: '<div class="column-wrapper">' +
                    '<div class="column-large-6 column-medium-6 column-small-12 column-xsmall-12">' +
                        '<p>Left Column</p>' +
                    '</div>'+
                    '<div class="column-large-6 column-medium-6 column-small-12 column-xsmall-12">' +
                        '<p>Right Column</p>' +
                    '</div>'+
                '</div>'
        },
        {
            title: 'Title and Content Group (h3+p)',
            image: 'tacg.jpg',
            description: 'Title and paragraph content wrapper',
            html: '<div class="title-and-content-group--wrapper">'+
                        '<h3>Title</h3>'+
                        '<p>Type your content here</p>'+
                    '</div>'
        }
    ]
} );

