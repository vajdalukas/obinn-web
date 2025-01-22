$(function () {
    var swiper = new Swiper('.swiper-container', {
        autoplay: {
            delay: 500
        },
        speed: 1000,
        slidesPerView: 4,
        slidesPerGroup: 1,
        spaceBetween: 0,
        loop: false,
        breakpoints: {
            // when window width is >= 360px
            360: {
                slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
                slidesPerView: 2,
            },
            // when window width is >= 1024px
            1024: {
                slidesPerView: 3,
            }
        },
        pagination: {
            enabled: true,
            el: '.swiper-pagination',
            type: 'bullets',
            clickable : true ,
        }
    });
});