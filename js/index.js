
$(document).ready(function () {
    $('#slider-area').owlCarousel({
        // items: 4,
        // lazyLoad: true,
        nav: true,
        navText: [$('.button-prev'), $('.button-next')],
        dots: false,
        loop: true,
        margin: 10,
        items: 1,
        margin: 10,
        autoHeight: false,
        autoplay: true,
        autoplayTimeout: 3000,
        smartSpeed: 1000,
        autoplayHoverPause: true

    });



});

