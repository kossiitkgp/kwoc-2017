/* =================================
 Masonry                 
 =================================== */
"use strict";
jQuery(function ($) {
    $blog = $('.blog-masonry');
    $blog.imagesLoaded(function () {
        $blog.isotope({
            itemSelector: '.blog-listing',
            layoutMode: 'masonry'
        });
    });
});
