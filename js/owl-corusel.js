let owl1 = $('.owl-carousel1');
$(owl1).owlCarousel({
    loop:true,
    margin:15,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    nav:true,
    dots: false,
    center: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }
    }
});

let owl2 = $('.owl-carousel2');
$(owl2).owlCarousel({
    loop:true,
    margin:15,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    nav:true,
    dots: false,
    center: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});
