function init_scroll_navigate() {

    var sections = $("section");
    var menu_links = $(".navbar-nav li a");

    $(window).scroll(function () {
        setTimeout(function () {
            sections.filter(":in-viewport:first").each(function () {
                var active_section = $(this);
                var active_link = $('.navbar-nav li a[href="#' + active_section.attr("id") + '"]');
                menu_links.removeClass("active");
                active_link.addClass("active");
                
            });
        }, 500);
    });
}

$(window).load(function () {

    init_scroll_navigate();

    $(window).trigger("scroll");
    $(window).trigger("resize");
});
