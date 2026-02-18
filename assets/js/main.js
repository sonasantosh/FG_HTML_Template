$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        center: true,
        items: 2,
        loop: true,
        margin: 30,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1,
                stagePadding: 0,
                margin: 0,
            },
            1024: {
                items: 1,
                stagePadding: 200,
            },
            1200: {
                items: 2
            },
        }
    })
});

