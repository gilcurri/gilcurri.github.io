
var $root = $('html, body');
$('a').click(function() {
    var href = $.attr(this, 'href');
    $root.animate({
        scrollTop: $(href).offset().top
    }, 300, function () {
        window.location.hash = href;
    });
    return false;
});



$(function() {
    $('.toggle-nav').click(function(e) {
        e.preventDefault();
        // Calling a function in case you want to expand upon this.
        toggleNav();
    });
});



function toggleNav() {
    if ($('#wrapper').hasClass('show-nav')) {
        // Do things on Nav Close
        $('#wrapper').removeClass('show-nav');
    } else {
        // Do things on Nav Open
        $('#wrapper').addClass('show-nav');
    }

    //$('#site-wrapper').toggleClass('show-nav');
}

