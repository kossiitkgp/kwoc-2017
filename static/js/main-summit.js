/* ===================================
    sticky nav
 ====================================== */

$(window).scroll(function () {
    if ($(document).scrollTop() > 50) {
        $('nav').addClass('shrink');
    } else {
        $('nav').removeClass('shrink');
    }
});

$(document).ready(function () {

    //Disable mouse scroll wheel zoom on embedded Google Maps
    $('.maps').click(function () {
        $('.maps iframe').css("pointer-events", "auto");
    });

    $(".maps").mouseleave(function () {
        $('.maps iframe').css("pointer-events", "none");
    });

/* ===================================
    counter number reset while scrolling
====================================== */

    $('.timer').appear();
    $(document.body).on('appear', '.timer', function (e) {
        // this code is executed for each appeared element
        if (!$(this).hasClass('appear')) {
            animatecounters();
            $(this).addClass('appear');
        }
    });

/* ===================================
    owl slider
 ====================================== */

    $(".owl-slider-full").owlCarousel({
        navigation: true, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
    });

    $("#owl-demo-background").owlCarousel({
        transitionStyle: "fade",
        autoPlay: 3000,
        slideSpeed: 100,
        singleItem: true,
        navigation: false,
        pagination: false,
        touchDrag: false,
        mouseDrag: false
    });

    $(".blog-slider").owlCarousel({
        autoPlay: 4000,
        slideSpeed: 1000,
        navigation: false,
        pagination: false,
        items: 4,
        itemsDesktop: [1200, 3],
        itemsTablet: [800, 2],
        itemsMobile: [700, 1]
    });

/* ===================================
    shrink navigation
 ====================================== */

    $(window).scroll();
    $(window).scroll(function () {
        if ($(window)
                .scrollTop() > 10) {
            $('nav')
                    .addClass('shrink');
        } else {
            $('nav')
                    .removeClass('shrink');
        }
    });

    $('.navigation-menu')
            .onePageNav({
                scrollSpeed: 750,
                scrollThreshold: 0.2, // Adjust if Navigation highlights too early or too late
                scrollOffset: 79, //Height of Navigation Bar
                currentClass: 'active',
                filter: ':not(.btn-very-small)'
            });

    setTimeout(function () {
        $(window).scroll();
    }, 500);

    //close navbar menu after clicking menu href
    $('ul.navbar-nav li a')
            .click(function (e) {
                $(this)
                        .parents('div.navbar-collapse')
                        .removeClass('in');
            });

    // pull-menu close on href click event in mobile devices
    $('.pull-menu a.section-link')
            .click(function (e) {
                if ($(window).width() <= 500)
                    $('#close-button').click();
            });

/*==============================================================
    smooth scroll
 ==============================================================*/
    var hash = window.location.hash.substr(1);
    if (hash != "") {
        var scrollAnimationTime = 1200,
                scrollAnimation = 'easeInOutExpo';

        var target = '#' + hash;
        $('html, body').stop()
                .animate({
                    'scrollTop': $(target)
                            .offset()
                            .top
                }, scrollAnimationTime, scrollAnimation, function () {
                    window.location.hash = target;
                });
    }



    var scrollAnimationTime = 1200,
            scrollAnimation = 'easeInOutExpo';
    $('a.scrollto').bind('click.smoothscroll', function (event) {
        event.preventDefault();
        var target = this.hash;
        $('html, body').stop()
                .animate({
                    'scrollTop': $(target)
                            .offset()
                            .top
                }, scrollAnimationTime, scrollAnimation, function () {
                    window.location.hash = target;
                });
    });

    // Inner links
    $('.inner-link').smoothScroll({
        speed: 900,
        offset: -59
    });
    $('.section-link').smoothScroll({
        speed: 900,
        offset: 1
    });


/*==============================================================
    set parallax
 ==============================================================*/

    SetParallax();

    $('.parallax-fix').each(function () {
        if ($(this).children('.parallax-background-img').length) {
            var imgSrc = jQuery(this).children('.parallax-background-img').attr('src');
            jQuery(this).css('background', 'url("' + imgSrc + '")');
            jQuery(this).children('.parallax-background-img').remove();
            $(this).css('background-position', '50% 0%');
        }

    });
    var IsParallaxGenerated = false;
    function SetParallax() {
        if ($(window).width() > 1030 && !IsParallaxGenerated) {
            $('.parallax1').parallax("50%", 0.1);
            $('.parallax2').parallax("50%", 0.2);
            $('.parallax3').parallax("50%", 0.3);
            $('.parallax4').parallax("50%", 0.4);
            $('.parallax5').parallax("50%", 0.5);
            $('.parallax6').parallax("50%", 0.6);
            $('.parallax7').parallax("50%", 0.7);
            $('.parallax8').parallax("50%", 0.8);
            $('.parallax9').parallax("50%", 0.05);
            $('.parallax10').parallax("50%", 0.02);
            $('.parallax11').parallax("50%", 0.01);
            $('.parallax12').parallax("50%", 0.099);
            IsParallaxGenerated = true;
        }
    }

/*==============================================================
    portfolio-filter
 ==============================================================*/

    $portfolio_filter = $('.grid');
    $portfolio_filter.imagesLoaded(function () {
        $portfolio_filter.isotope({
            itemSelector: 'li',
            layoutMode: 'masonry'
        });
    });

    $grid_selectors = $('.portfolio-filter > li > a');
    $grid_selectors.on('click', function () {
        $grid_selectors.parent().removeClass('active');
        $(this).parent().addClass('active');
        var selector = $(this).attr('data-filter');
        $portfolio_filter.isotope({filter: selector});
        return false;
    });

    $(window).resize(function () {
        setTimeout(function () {
            $portfolio_filter.isotope('layout');
        }, 500);
    });

/*==============================================================
    lightbox gallery
 ==============================================================*/

    $('.lightbox-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-fade',
        fixedContentPos: true,
        closeBtnInside: true,
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        }
    });

/*==============================================================
    single image lightbox - zoom animation
==============================================================*/
    $('.single-image-lightbox').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        fixedContentPos: true,
        closeBtnInside: true,
        mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
        image: {
            verticalFit: true,
        },
        zoom: {
            enabled: true,
            duration: 300 // don't foget to change the duration also in CSS
        }
    });

/*==============================================================
    zoom gallery
==============================================================*/

    $('.zoom-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        fixedContentPos: true,
        closeBtnInside: true,
        image: {
            verticalFit: true,
            titleSrc: function (item) {
                return item.el.attr('title');
            }
        },
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true,
            duration: 300, // don't foget to change the duration also in CSS
            opener: function (element) {
                return element.find('img');
            }
        }

    });

/*==============================================================
    popup with form
==============================================================*/
    $('.popup-with-form').magnificPopup({
        type: 'inline',
        preloader: false,
        closeBtnInside: true,
        fixedContentPos: true,
        focus: '#name',
        // When elemened is focused, some mobile browsers in some cases zoom in
        // It looks not nice, so we disable it:
        callbacks: {
            beforeOpen: function () {
                if ($(window).width() < 700) {
                    this.st.focus = false;
                } else {
                    this.st.focus = '#name';
                }
            }
        }
    });

/*==============================================================
    video magnific popup
==============================================================*/

    $('.popup-youtube, .popup-vimeo, .popup-googlemap').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: true
    });

/*==============================================================
    ajax magnific popup for onepage portfolio
==============================================================*/

    $('.ajax-popup').magnificPopup({
        type: 'ajax',
        alignTop: true,
        fixedContentPos: true,
        overflowY: 'scroll', // as we know that popup content is tall we set scroll overflow by default to avoid jump
        callbacks: {
            open: function () {
                $('.navbar .collapse').removeClass('in');
                $('.navbar a.dropdown-toggle').addClass('collapsed');
            }
        }
    });

/*==============================================================
    accordion
 ==============================================================*/

    $('.collapse').on('show.bs.collapse', function () {
        var id = $(this).attr('id');
        $('a[href="#' + id + '"]').closest('.panel-heading').addClass('active-accordion');
        $('a[href="#' + id + '"] .panel-title span').html('<i class="fa fa-minus"></i>');
    });
    $('.collapse').on('hide.bs.collapse', function () {
        var id = $(this).attr('id');
        $('a[href="#' + id + '"]').closest('.panel-heading').removeClass('active-accordion');
        $('a[href="#' + id + '"] .panel-title span').html('<i class="fa fa-plus"></i>');
    });
    $('.accordion-style2 .collapse').on('show.bs.collapse', function () {
        var id = $(this).attr('id');
        $('a[href="#' + id + '"]').closest('.panel-heading').addClass('active-accordion');
        $('a[href="#' + id + '"] .panel-title span').html('<i class="fa fa-angle-up"></i>');
    });
    $('.accordion-style2 .collapse').on('hide.bs.collapse', function () {
        var id = $(this).attr('id');
        $('a[href="#' + id + '"]').closest('.panel-heading').removeClass('active-accordion');
        $('a[href="#' + id + '"] .panel-title span').html('<i class="fa fa-angle-down"></i>');
    });

/*==============================================================
    toggles
==============================================================*/

    $('.toggles-style2 .collapse').on('show.bs.collapse', function () {
        var id = $(this).attr('id');
        $('a[href="#' + id + '"]').closest('.panel-heading').addClass('active-accordion');
        $('a[href="#' + id + '"] .panel-title span').html('<i class="fa fa-angle-up"></i>');
    });
    $('.toggles-style2 .collapse').on('hide.bs.collapse', function () {
        var id = $(this).attr('id');
        $('a[href="#' + id + '"]').closest('.panel-heading').removeClass('active-accordion');
        $('a[href="#' + id + '"] .panel-title span').html('<i class="fa fa-angle-down"></i>');
    });

/*==============================================================
    fit videos
==============================================================*/

    $(".fit-videos").fitVids();


/*==============================================================
    form to email
==============================================================*/

    $("#success").hide();
    $("#success-contact").hide();
    //restaurant contact form

    $("#restaurant-contact-button").click(function () {
        var error = ValidationRestaurantContactForm();
        if (error) {
            $.ajax({
                type: "POST",
                url: "email-templates/restaurant-contact.php",
                data: $("#restaurantcontactform").serialize(),
                success: function (result) {
                    $('input[type=text],textarea').each(function () {
                        $(this).val('');
                    })
                    $("#success").html(result);
                    $("#success").fadeIn("slow");
                    $('#success').delay(4000).fadeOut("slow");
                }
            });
        }
    });
    function ValidationRestaurantContactForm() {
        var error = true;
        $('#restaurantcontactform input[type=text]').each(function (index) {
            if (index == 0) {
                if ($(this).val() == null || $(this).val() == "") {
                    $("#restaurantcontactform").find("input:eq(" + index + ")").addClass("required-error");
                    error = false;
                }
                else {
                    $("#restaurantcontactform").find("input:eq(" + index + ")").removeClass("required-error");
                }
            }
            else if (index == 1) {
                if (!(/(.+)@(.+){2,}\.(.+){2,}/.test($(this).val()))) {
                    $("#restaurantcontactform").find("input:eq(" + index + ")").addClass("required-error");
                    error = false;
                } else {
                    $("#restaurantcontactform").find("input:eq(" + index + ")").removeClass("required-error");
                }
            }

        });
        return error;
    }

    //architecture contact form

    $("#architecture-contact-button").click(function () {
        var error = ValidationArchitectureContactForm();
        if (error) {
            $.ajax({
                type: "POST",
                url: "email-templates/architecture-contact.php",
                data: $("#architecturecontactform").serialize(),
                success: function (result) {
                    $('input[type=text],textarea').each(function () {
                        $(this).val('');
                    })
                    $("#success").html(result);
                    $("#success").fadeIn("slow");
                    $('#success').delay(4000).fadeOut("slow");
                }
            });
        }
    });
    function ValidationArchitectureContactForm() {
        var error = true;
        $('#architecturecontactform input[type=text]').each(function (index) {
            if (index == 0) {
                if ($(this).val() == null || $(this).val() == "") {
                    $("#architecturecontactform").find("input:eq(" + index + ")").addClass("required-error");
                    error = false;
                }
                else {
                    $("#architecturecontactform").find("input:eq(" + index + ")").removeClass("required-error");
                }
            }
            else if (index == 1) {
                if (!(/(.+)@(.+){2,}\.(.+){2,}/.test($(this).val()))) {
                    $("#architecturecontactform").find("input:eq(" + index + ")").addClass("required-error");
                    error = false;
                } else {
                    $("#architecturecontactform").find("input:eq(" + index + ")").removeClass("required-error");
                }
            }

        });
        return error;
    }

    //wedding contact form

    $("#wedding-contact-button").click(function () {
        var error = ValidationWeddingContactForm();
        if (error) {
            $.ajax({
                type: "POST",
                url: "email-templates/wedding-contact.php",
                data: $("#weddingcontactform").serialize(),
                success: function (result) {
                    $('input[type=text],textarea').each(function () {
                        $(this).val('');
                    })
                    $("#success").html(result);
                    $("#success").fadeIn("slow");
                    $('#success').delay(4000).fadeOut("slow");
                }
            });
        }
    });
    function ValidationWeddingContactForm() {
        var error = true;
        $('#weddingcontactform input[type=text]').each(function (index) {
            if (index == 0) {
                if ($(this).val() == null || $(this).val() == "") {
                    $("#weddingcontactform").find("input:eq(" + index + ")").addClass("required-error");
                    error = false;
                }
                else {
                    $("#weddingcontactform").find("input:eq(" + index + ")").removeClass("required-error");
                }
            }
            else if (index == 1) {
                if (!(/(.+)@(.+){2,}\.(.+){2,}/.test($(this).val()))) {
                    $("#weddingcontactform").find("input:eq(" + index + ")").addClass("required-error");
                    error = false;
                } else {
                    $("#weddingcontactform").find("input:eq(" + index + ")").removeClass("required-error");
                }
            }

        });
        return error;
    }


    //travel contact form

    $("#travel-contact-button").click(function () {
        var error = ValidationTravelContactForm();
        if (error) {
            $.ajax({
                type: "POST",
                url: "email-templates/travel-contact.php",
                data: $("#travelcontactform").serialize(),
                success: function (result) {
                    $('input[type=text],textarea').each(function () {
                        $(this).val('');
                    })
                    $("#success").html(result);
                    $("#success").fadeIn("slow");
                    $('#success').delay(4000).fadeOut("slow");
                }
            });
        }
    });
    function ValidationTravelContactForm() {
        var error = true;
        $('#travelcontactform input[type=text]').each(function (index) {
            if (index == 0) {
                if ($(this).val() == null || $(this).val() == "") {
                    $("#travelcontactform").find("input:eq(" + index + ")").addClass("required-error");
                    error = false;
                }
                else {
                    $("#travelcontactform").find("input:eq(" + index + ")").removeClass("required-error");
                }
            }
            else if (index == 1) {
                if (!(/(.+)@(.+){2,}\.(.+){2,}/.test($(this).val()))) {
                    $("#travelcontactform").find("input:eq(" + index + ")").addClass("required-error");
                    error = false;
                } else {
                    $("#travelcontactform").find("input:eq(" + index + ")").removeClass("required-error");
                }
            }

        });
        return error;
    }


    //tatoo book now form

    $("#tattoobooknow-contact-button").click(function () {
        var error = ValidationTattooBooknowForm();
        if (error) {
            $.ajax({
                type: "POST",
                url: "email-templates/tattoo-booknow.php",
                data: $("#tattoobooknowform").serialize(),
                success: function (result) {
                    $('input[type=text],textarea').each(function () {
                        $(this).val('');
                    })
                    $("#success").html(result);
                    $("#success").fadeIn("slow");
                    $('#success').delay(4000).fadeOut("slow");
                }
            });
        }
    });
    function ValidationTattooBooknowForm() {
        var error = true;
        $('#tattoobooknowform input[type=text]').each(function (index) {
            if (index == 0) {
                if ($(this).val() == null || $(this).val() == "") {
                    $("#tattoobooknowform").find("input:eq(" + index + ")").addClass("required-error");
                    error = false;
                }
                else {
                    $("#tattoobooknowform").find("input:eq(" + index + ")").removeClass("required-error");
                }
            }
            else if (index == 1) {
                if (!(/(.+)@(.+){2,}\.(.+){2,}/.test($(this).val()))) {
                    $("#tattoobooknowform").find("input:eq(" + index + ")").addClass("required-error");
                    error = false;
                } else {
                    $("#tattoobooknowform").find("input:eq(" + index + ")").removeClass("required-error");
                }
            }

        });
        return error;
    }

    //tatoo contact form

    $("#tattoo-contact-button").click(function () {
        var error = ValidationTattooContactForm();
        if (error) {
            $.ajax({
                type: "POST",
                url: "email-templates/tattoo-contact.php",
                data: $("#tattoocontactform").serialize(),
                success: function (result) {
                    $('input[type=text],textarea').each(function () {
                        $(this).val('');
                    })
                    $("#success-contact").html(result);
                    $("#success-contact").fadeIn("slow");
                    $('#success-contact').delay(4000).fadeOut("slow");
                }
            });
        }
    });
    function ValidationTattooContactForm() {
        var error = true;
        $('#tattoocontactform input[type=text]').each(function (index) {
            if (index == 0) {
                if ($(this).val() == null || $(this).val() == "") {
                    $("#tattoocontactform").find("input:eq(" + index + ")").addClass("required-error");
                    error = false;
                }
                else {
                    $("#tattoocontactform").find("input:eq(" + index + ")").removeClass("required-error");
                }
            }
            else if (index == 1) {
                if (!(/(.+)@(.+){2,}\.(.+){2,}/.test($(this).val()))) {
                    $("#tattoocontactform").find("input:eq(" + index + ")").addClass("required-error");
                    error = false;
                } else {
                    $("#tattoocontactform").find("input:eq(" + index + ")").removeClass("required-error");
                }
            }

        });
        return error;
    }

    //spa contact form

    $("#spa-contact-button").click(function () {
        var error = ValidationSpaContactForm();
        if (error) {
            $.ajax({
                type: "POST",
                url: "email-templates/spa-contact.php",
                data: $("#spacontactform").serialize(),
                success: function (result) {
                    $('input[type=text],textarea').each(function () {
                        $(this).val('');
                    })
                    $("#success").html(result);
                    $("#success").fadeIn("slow");
                    $('#success').delay(4000).fadeOut("slow");
                }
            });
        }
    });
    function ValidationSpaContactForm() {
        var error = true;
        $('#spacontactform input[type=text]').each(function (index) {
            if (index == 0) {
                if ($(this).val() == null || $(this).val() == "") {
                    $("#spacontactform").find("input:eq(" + index + ")").addClass("required-error");
                    error = false;
                }
                else {
                    $("#spacontactform").find("input:eq(" + index + ")").removeClass("required-error");
                }
            }
            else if (index == 1) {
                if (!(/(.+)@(.+){2,}\.(.+){2,}/.test($(this).val()))) {
                    $("#spacontactform").find("input:eq(" + index + ")").addClass("required-error");
                    error = false;
                } else {
                    $("#spacontactform").find("input:eq(" + index + ")").removeClass("required-error");
                }
            }

        });
        return error;
    }

    //photography contact form

    $("#photography-contact-button").click(function () {
        var error = ValidationPhotographyContactForm();
        if (error) {
            $.ajax({
                type: "POST",
                url: "email-templates/photography-contact.php",
                data: $("#photographycontactform").serialize(),
                success: function (result) {
                    $('input[type=text],textarea').each(function () {
                        $(this).val('');
                    })
                    $("#success").html(result);
                    $("#success").fadeIn("slow");
                    $('#success').delay(4000).fadeOut("slow");
                }
            });
        }
    });
    function ValidationPhotographyContactForm() {
        var error = true;
        $('#photographycontactform input[type=text]').each(function (index) {
            if (index == 0) {
                if ($(this).val() == null || $(this).val() == "") {
                    $("#photographycontactform").find("input:eq(" + index + ")").addClass("required-error");
                    error = false;
                }
                else {
                    $("#photographycontactform").find("input:eq(" + index + ")").removeClass("required-error");
                }
            }
            else if (index == 1) {
                if (!(/(.+)@(.+){2,}\.(.+){2,}/.test($(this).val()))) {
                    $("#photographycontactform").find("input:eq(" + index + ")").addClass("required-error");
                    error = false;
                } else {
                    $("#photographycontactform").find("input:eq(" + index + ")").removeClass("required-error");
                }
            }

        });
        return error;
    }


    //Personal contact form

    $("#personal-contact-button").click(function () {
        var error = ValidationPersonalContactForm();
        if (error) {
            $.ajax({
                type: "POST",
                url: "email-templates/personal-contact.php",
                data: $("#personalcontactform").serialize(),
                success: function (result) {
                    $('input[type=text],textarea').each(function () {
                        $(this).val('');
                    })
                    $("#success").html(result);
                    $("#success").fadeIn("slow");
                    $('#success').delay(4000).fadeOut("slow");
                }
            });
        }
    });
    function ValidationPersonalContactForm() {
        var error = true;
        $('#personalcontactform input[type=text]').each(function (index) {
            if (index == 0) {
                if ($(this).val() == null || $(this).val() == "") {
                    $("#personalcontactform").find("input:eq(" + index + ")").addClass("required-error");
                    error = false;
                }
                else {
                    $("#personalcontactform").find("input:eq(" + index + ")").removeClass("required-error");
                }
            }
            else if (index == 1) {
                if (!(/(.+)@(.+){2,}\.(.+){2,}/.test($(this).val()))) {
                    $("#personalcontactform").find("input:eq(" + index + ")").addClass("required-error");
                    error = false;
                } else {
                    $("#personalcontactform").find("input:eq(" + index + ")").removeClass("required-error");
                }
            }

        });
        return error;
    }

    //Event ticket form

    $("#eventticket-contact-button").click(function () {
        var error = ValidationEventTicketForm();
        if (error) {
            $.ajax({
                type: "POST",
                url: "email-templates/event-ticket.php",
                data: $("#eventticketform").serialize(),
                success: function (result) {
                    $('input[type=text],textarea,select').each(function () {
                        $(this).val('');
                    })
                    $("#success").html(result);
                    $("#success").fadeIn("slow");
                    $('#success').delay(4000).fadeOut("slow");
                }
            });
        }
    });
    function ValidationEventTicketForm() {
        var error = true;
        $('#eventticketform input[type=text]').each(function (index) {
            if (index == 0) {
                if ($(this).val() == null || $(this).val() == "") {
                    $("#eventticketform").find("input:eq(" + index + ")").addClass("required-error");
                    error = false;
                }
                else {
                    $("#eventticketform").find("input:eq(" + index + ")").removeClass("required-error");
                }
            }
            else if (index == 1) {
                if (!(/(.+)@(.+){2,}\.(.+){2,}/.test($(this).val()))) {
                    $("#eventticketform").find("input:eq(" + index + ")").addClass("required-error");
                    error = false;
                } else {
                    $("#eventticketform").find("input:eq(" + index + ")").removeClass("required-error");
                }
            }

        });
        return error;
    }

    //Event contact form

    $("#event-contact-button").click(function () {
        var error = ValidationEventContactForm();
        if (error) {
            $.ajax({
                type: "POST",
                url: "email-templates/event-contact.php",
                data: $("#eventcontactform").serialize(),
                success: function (result) {
                    $('input[type=text],textarea').each(function () {
                        $(this).val('');
                    })
                    $("#success-contact").html(result);
                    $("#success-contact").fadeIn("slow");
                    $('#success-contact').delay(4000).fadeOut("slow");
                }
            });
        }
    });
    function ValidationEventContactForm() {
        var error = true;
        $('#eventcontactform input[type=text]').each(function (index) {
            if (index == 0) {
                if ($(this).val() == null || $(this).val() == "") {
                    $("#eventcontactform").find("input:eq(" + index + ")").addClass("required-error");
                    error = false;
                }
                else {
                    $("#eventcontactform").find("input:eq(" + index + ")").removeClass("required-error");
                }
            }
            else if (index == 1) {
                if (!(/(.+)@(.+){2,}\.(.+){2,}/.test($(this).val()))) {
                    $("#eventcontactform").find("input:eq(" + index + ")").addClass("required-error");
                    error = false;
                } else {
                    $("#eventcontactform").find("input:eq(" + index + ")").removeClass("required-error");
                }
            }

        });
        return error;
    }


    //Coming soon contact form

    $("#comingsoon-contact-button").click(function () {
        var error = ValidationcomingsoonContactForm();
        if (error) {
            $.ajax({
                type: "POST",
                url: "email-templates/comingsoon-contact.php",
                data: $("#comingsoonscontactform").serialize(),
                success: function (result) {
                    $('input[type=text],textarea').each(function () {
                        $(this).val('');
                    })
                    $("#success").html(result);
                    $("#success").fadeIn("slow");
                    $('#success').delay(4000).fadeOut("slow");
                }
            });
        }
    });
    function ValidationcomingsoonContactForm() {
        var error = true;
        $('#comingsoonscontactform input[type=text]').each(function (index) {
            if (index == 0) {
                if (!(/(.+)@(.+){2,}\.(.+){2,}/.test($(this).val()))) {
                    $("#comingsoonscontactform").find("input:eq(" + index + ")").addClass("required-error");
                    error = false;
                } else {
                    $("#comingsoonscontactform").find("input:eq(" + index + ")").removeClass("required-error");
                }
            }

        });
        return error;
    }


    //Agency contact form

    $("#agency-contact-button").click(function () {
        var error = ValidationAgencyContactForm();
        if (error) {
            $.ajax({
                type: "POST",
                url: "email-templates/agency-contact.php",
                data: $("#agencycontactform").serialize(),
                success: function (result) {
                    $('input[type=text],textarea').each(function () {
                        $(this).val('');
                    })
                    $("#success").html(result);
                    $("#success").fadeIn("slow");
                    $('#success').delay(4000).fadeOut("slow");
                }
            });
        }
    });
    function ValidationAgencyContactForm() {
        var error = true;
        $('#agencycontactform input[type=text]').each(function (index) {
            if (index == 0) {
                if ($(this).val() == null || $(this).val() == "") {
                    $("#agencycontactform").find("input:eq(" + index + ")").addClass("required-error");
                    error = false;
                }
                else {
                    $("#agencycontactform").find("input:eq(" + index + ")").removeClass("required-error");
                }
            }
            else if (index == 1) {
                if (!(/(.+)@(.+){2,}\.(.+){2,}/.test($(this).val()))) {
                    $("#agencycontactform").find("input:eq(" + index + ")").addClass("required-error");
                    error = false;
                } else {
                    $("#agencycontactform").find("input:eq(" + index + ")").removeClass("required-error");
                }
            }

        });
        return error;
    }





    //end ready
});

    /*==============================================================*/
    //Reload popup OwlCarousel
    /*==============================================================*/

    function ReloadOwlCarousel(){
        $(".popup-main .owl-slider-full").owlCarousel({
            navigation: true, // Show next and prev buttons
            slideSpeed: 300,
            paginationSpeed: 400,
            singleItem: true,
            navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
        });

        //Stop Closing magnificPopup on selected elements - START CODE

         $(".popup-main .owl-slider-full").click(function (e) {
            if ($(e.target).is('.mfp-close'))
                return;
            return false;
        });

    }

/*==============================================================
    full screen
 ==============================================================*/

function SetResizeContent() {
    var minheight = $(window).height();
    $(".full-screen").css('min-height', minheight);
}
SetResizeContent();

$(window).resize(function () {
    SetResizeContent();
});


/*==============================================================
    counter
 ==============================================================*/

jQuery(function ($) {
    // start all the timers
    animatecounters();
});

function animatecounters() {

    $('.timer').each(count);
    function count(options) {
        var $this = $(this);
        options = $.extend({}, options || {}, $this.data('countToOptions') || {});
        $this.countTo(options);
    }

}
/*==============================================================
    elements active class
 ==============================================================*/

jQuery(function ($) {
    $('div.widget-body ul.category-list li a').click(function (e) {
        $('div.widget-body ul.category-list li a').removeClass('active');
        $(this).addClass('active');
    });
});

/*==============================================================
    wow animation - on scroll
 ==============================================================*/

var wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 90,
    mobile: false,
    live: true
});
wow.init();

/*==============================================================
    ajax aagnific popup for onepage portfolio
==============================================================*/

$('.work-details-popup').on('click', function () {
    $.magnificPopup.open({
        items: {
            src: $(this).parents('li').find('.popup-main'),
        },
        type: 'inline',
        fixedContentPos: true,
        closeOnContentClick: true,

    });

});

/*==============================================================
    pull menu
 ==============================================================*/

function bindEvent(el, eventName, eventHandler) {
    if (el.addEventListener) {
        el.addEventListener(eventName, eventHandler, false);
    } else if (el.attachEvent) {
        el.attachEvent('on' + eventName, eventHandler);
    }
}

(function () {

    var bodyEl = document.body,
            //content = document.querySelector( '.content-wrap' ),
            openbtn = document.getElementById('open-button'),
            closebtn = document.getElementById('close-button'),
            isOpen = false;

    function init() {
        initEvents();
    }

    function initEvents() {
        if (openbtn) {
            bindEvent(openbtn, 'click', toggleMenu);

        }
        //openbtn.addEventListener( 'click', toggleMenu );
        if (closebtn) {

            bindEvent(closebtn, 'click', toggleMenu);
            //closebtn.addEventListener( 'click', toggleMenu );
        }

        // close the menu element if the target itÂ´s not the menu element or one of its descendants..

    }

    function toggleMenu() {

        if (isOpen) {
            classie.remove(bodyEl, 'show-menu');
        }
        else {
            classie.add(bodyEl, 'show-menu');
        }
        isOpen = !isOpen;
    }

    init();

})();

/*==============================================================
    countdown timer
==============================================================*/

$('#counter-event').countdown($('#counter-event').attr("enddate")).on('update.countdown', function (event) {
    var $this = $(this).html(event.strftime('' + '<div class="counter-container"><div class="counter-box first"><div class="number">%-D</div><span>Day%!d</span></div>' + '<div class="counter-box"><div class="number">%H</div><span>Hours</span></div>' + '<div class="counter-box"><div class="number">%M</div><span>Minutes</span></div>' + '<div class="counter-box last"><div class="number">%S</div><span>Seconds</span></div></div>'))
});

$('body').on('touchstart click', function (e) {
    if ($(window).width() < 992) {
    }
});

/*==============================================================
    scroll to top
==============================================================*/
$(window).scroll(function () {
    if ($(this)
            .scrollTop() > 100) {
        $('.scrollToTop')
                .fadeIn();
    } else {
        $('.scrollToTop')
                .fadeOut();
    }
});

    //Click event to scroll to top
$('.scrollToTop').click(function () {
    $('html, body').animate({
        scrollTop: 0
    }, 1000);
    return false;
});

$('.panel a, .nav-tabs a').click(function (e) {
    if ($(this).is("[data-parent]") || $(this).is("[data-toggle]")) {
        e.preventDefault();
    }

});

/*==============================================================
    dropdown menu
==============================================================*/

$(function () {
    $(".dropdown").hover(
            function () {
                $('.dropdown-menu', this).stop(true, true).fadeIn("fast");
                $(this).toggleClass('open');
                $('b', this).toggleClass("caret caret-up");
            },
            function () {
                $('.dropdown-menu', this).stop(true, true).fadeOut("fast");
                $(this).toggleClass('open');
                $('b', this).toggleClass("caret caret-up");
            });
});
