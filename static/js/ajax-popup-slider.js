$(document).ready(function () {
    $("#owl-demo-ajax").owlCarousel({
        navigation: true, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
    });
	$("#owl-demo-background-ajax").owlCarousel({
        transitionStyle: "fade",
        autoPlay: 3000,
        slideSpeed: 100,
        singleItem: true,
        navigation: false,
        pagination: false,
        touchDrag: false,
        mouseDrag: false
    });    

    /*==============================================================*/
//Stop Closing magnificPopup on selected elements - START CODE
/*==============================================================*/

$(".owl-pagination > .owl-page").click(function (e) {
    if ($(e.target).is('.mfp-close'))
        return;
    return false;
});
$(".owl-buttons > .owl-prev").click(function (e) {
    if ($(e.target).is('.mfp-close'))
        return;
    return false;
});
$(".owl-buttons > .owl-next").click(function (e) {
    if ($(e.target).is('.mfp-close'))
        return;
    return false;
});

/*==============================================================*/
//Stop Closing magnificPopup on selected elements - END CODE
/*==============================================================*/
});

function SetResizeContent() {
    var minheight = $(window).height();
    $(".full-screen").css('min-height', minheight);
}
SetResizeContent();



