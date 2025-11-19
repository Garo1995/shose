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
    breakpoints: {
        1020: {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        760: {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },

        570: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 16,
        },
        320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 16,
        },
    },
});

let workshopsSwiper = new Swiper(".workshops-slider", {
    slidesPerView: 1,
    allowTouchMove: false,
    breakpoints: {
        1020: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 30,
        },
        570: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 10,
            allowTouchMove: true,

        },
        320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 10,
            allowTouchMove: true,

        },
    },
    navigation: {
        nextEl: '.workshops-button-next',
        prevEl: '.workshops-button-prev',
    },
});



document.querySelectorAll('.briefcase-repair-scr').forEach(wrapper => {
    const sliderEl = wrapper.querySelector('.briefcase-repair-slider');
    const slidesCount = sliderEl.querySelectorAll('.swiper-slide').length;

    const benswiper = new Swiper(sliderEl, {
        slidesPerView: 3,
        spaceBetween: 20,
        breakpoints: {
            1020: { slidesPerView: 3, spaceBetween: 20 },
            767: { slidesPerView: 3, spaceBetween: 20, loop: true },
            575: { slidesPerView: 3, spaceBetween: 20, loop: true },
            320: { slidesPerView: 2, spaceBetween: 20, loop: true },
        },
    });

    const nextBtn = wrapper.querySelector('.briefcase-button-next');
    const prevBtn = wrapper.querySelector('.briefcase-button-prev');

    // === Показ/скрытие кнопок ===
    if (slidesCount <= 4) {
        nextBtn.style.display = 'none';
        prevBtn.style.display = 'none';
    } else {
        nextBtn.style.display = 'flex'; // или block, зависит от твоего CSS
        prevBtn.style.display = 'flex';
    }

    // === Навигация ===
    nextBtn.addEventListener('click', () => benswiper.slideNext());
    prevBtn.addEventListener('click', () => benswiper.slidePrev());
});





