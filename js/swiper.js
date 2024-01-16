document.addEventListener('DOMContentLoaded', function () {
    $(document).ready(function () {
        const bannerSwiper = new Swiper('.banner-swiper', {
            loop: true,
            spaceBetween: 20,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
                dynamicBullets: true,
                dynamicMainBullets: 5,
            },
            navigation: {
                prevEl: '.swiper-button-prev',
                nextEl: '.swiper-button-next',
            },
        });

        const productSwiper_1 = new Swiper('.product-swiper-1', {
            slidesPerView: 1,
            spaceBetween: 20,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
                dynamicBullets: true,
                dynamicMainBullets: 6,
            },
            breakpoints: {
                576: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                    spaceBetween: 20,
                },
                768:{
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                    spaceBetween: 20,
                },
                992:{
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                    spaceBetween: 80,
                },
                1200:{
                    slidesPerView: 4,
                    slidesPerGroup: 4,
                    spaceBetween: 20,
                },
                1400:{
                    slidesPerView: 5,
                    slidesPerGroup: 5,
                    spaceBetween: 30,
                },

            }
        });
        const productSwiper_2 = new Swiper('.product-swiper-2', {
            slidesPerView: 1,
            spaceBetween: 20,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
                dynamicBullets: true,
                dynamicMainBullets: 6,
            },
            breakpoints: {
                576: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                    spaceBetween: 20,
                },
                768:{
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                    spaceBetween: 20,
                    grid: {
                        fill: 'row',
                        rows: 2,
                    },
                },
                992:{
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                    spaceBetween: 80,
                    grid: {
                        fill: 'row',
                        rows: 2,
                    },
                },
                1200:{
                    slidesPerView: 4,
                    slidesPerGroup: 4,
                    spaceBetween: 20,
                    grid: {
                        fill: 'row',
                        rows: 2,
                    },
                },
                1400:{
                    slidesPerView: 5,
                    slidesPerGroup: 5,
                    spaceBetween: 30,
                    grid: {
                        fill: 'row',
                        rows: 2,
                    },
                },

            }
        })
        const productSwiper_3 = new Swiper('.product-swiper-3', {
            slidesPerView: 1,
            spaceBetween: 20,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
                dynamicBullets: true,
                dynamicMainBullets: 6,
            },
            breakpoints: {
                576: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                    spaceBetween: 20,
                },
                768:{
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                    spaceBetween: 20,
                    grid: {
                        fill: 'row',
                        rows: 2,
                    },
                },
                992:{
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                    spaceBetween: 80,
                    grid: {
                        fill: 'row',
                        rows: 2,
                    },
                },
                1200:{
                    slidesPerView: 4,
                    slidesPerGroup: 4,
                    spaceBetween: 20,
                    grid: {
                        fill: 'row',
                        rows: 3,
                    },
                },
                1400:{
                    slidesPerView: 5,
                    slidesPerGroup: 5,
                    spaceBetween: 30,
                    grid: {
                        fill: 'row',
                        rows: 3,
                    },
                },

            }
        });
    });
});