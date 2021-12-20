$(function() {
    var offset = $(".sidebar-block").offset();
    var mbOffset = $(".site-footer").offset();
    var mbPos = mbOffset.top - $(".sidebar-block").outerHeight() - 30; /*30px extra space*/
    var topPadding = 15;
    $(window).scroll(function() {
        if ($(window).scrollTop() > offset.top ) {
            if(  $(window).scrollTop() < mbPos ) {
                $(".sidebar-block").stop().animate({
                    marginTop: $(window).scrollTop() - offset.top + topPadding
                });
            }
        } else {
            $(".sidebar-block").stop().animate({
                marginTop: 0
            });
        };
    });
});