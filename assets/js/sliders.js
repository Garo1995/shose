let brandsSwiper = new Swiper(".brands-slider", {
    slidesPerView: 5,
    spaceBetween: 20,
    loop: true,
    pagination: {
        el: ".brands-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: '.brands-button-next',
        prevEl: '.brands-button-prev',
    },
    breakpoints: {
        1020: {
            slidesPerView: 5,
            slidesPerGroup: 1,
            spaceBetween: 30,
        },
        760: {
            slidesPerView: 4,
            slidesPerGroup: 1,
            spaceBetween: 30,
            loop: true,

        },

        320: {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 10,
            loop: true,
        },
    },
});


let aboutSwiper = new Swiper(".about-slider", {
    slidesPerView: 1,
    allowTouchMove: false,
    loop: true,
    navigation: {
        nextEl: '.about-button-next',
        prevEl: '.about-button-prev',
    },
});


let worksSwiper = new Swiper(".works-slider", {
    slidesPerView: 1,
    loop: true,
    navigation: {
        nextEl: '.works-button-next',
        prevEl: '.works-button-prev',
    },
});


let reviewsSwiper = new Swiper(".reviews-slider", {
    slidesPerView: 3,
    loop: true,
    navigation: {
        nextEl: '.reviews-button-next',
        prevEl: '.reviews-button-prev',
    },
});

let workshopsSwiper = new Swiper(".workshops-slider", {
    slidesPerView: 1,
    navigation: {
        nextEl: '.workshops-button-next',
        prevEl: '.workshops-button-prev',
    },
});
