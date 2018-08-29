$(document).ready(function() {
    console.log( "ready!" );
    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 600);
    });

    $(window).scroll( function(i) {
        $('.fade-in').each( function(i) {
            let object_height = $(this).outerHeight()/2;
            let object_top = $(this).offset().top + object_height;
            let window_bottom = $(window).scrollTop() + $(window).height();

            if(window_bottom > object_top) {
                $(this).animate({'opacity':'1'}, 500);
            }
        });
    });
});
