document.addEventListener('DOMContentLoaded', function () {
    $(document).ready(function () {
        // top alert button click
        $('.top-alert-wrapper .close-button').click(function () {
            $('.top-alert-wrapper').hide();
        });

        // header fixed
        $(window).scroll(function () {
            if ($(window).width() < 992) {
                if ($(window).scrollTop() > 300) {
                    $('.mobile-navbar').addClass('fixed-nav');
                } else {
                    $('.mobile-navbar').removeClass('fixed-nav');
                }
            } else {
                if ($(window).scrollTop() > 300) {
                    $('.general-navbar').addClass('fixed-nav');
                    $('.general-navbar.home .general-categories-wrapper').removeClass('d-none');
                } else {
                    $('.general-navbar').removeClass('fixed-nav');
                    $('.general-navbar.home .general-categories-wrapper').addClass('d-none');
                }
            }
        })

        // //mobile search
        $('.nav-tool.mobile-search-button').click(function () {
            $('.search-col').toggle();
            $('.search-form.mobile').toggleClass('active');
        });

        // // mobile menu
        $('.nav-tool.mobile-menu-button').click(function () {
            $('.menu-backdrop').show();
            $('.category-menu').addClass('active');
            $('body').addClass('locked');
        });
        $('.nav-tool.menu-close-button').click(function () {
            $('.menu-backdrop').hide();
            $('.category-menu').removeClass('active');
            $('body').removeClass('locked');
        });
        $('.menu-backdrop').click(function () {
            $('.menu-backdrop').hide();
            $('.category-menu').removeClass('active');
            $('body').removeClass('locked');
        });

        // category
        const categories = $('.general-navbar .col-12 .category-container').html();
        $('.category-menu .category-container').append(categories);
        
        $('.category.has-child .toggle-button').click(function () {
            if ($(window).width() < 992) {
                $(this).toggleClass('active')
                let id = $(this).closest('.category.has-child').data('id');
                $(`.altcategories[data-parent="${id}"]`).toggle();
            }
        });

        $('.general-categories-wrapper').hover(function(){
            $(this).addClass('active');
            $('.category-backdrop').show();
            $('body').addClass('locked');
        },function(){
            $(this).removeClass('active');
            $('.category-backdrop').hide();
            $('body').removeClass('locked');
        });


        $('.category.has-child .main-row').hover(function(){
            let parent = $(this).closest('.category');
            let result = parent.find('.category-result');
            result.show();
        },function(){
            let parent = $(this).closest('.category');
            let result = parent.find('.category-result');
            result.hide();
        })
        $('.category-result').hover(function(){
            $(this).show();
        }, function(){
            $(this).hide();
        })
        

        // $('.category.has-child').hover(function () {
        //     if ($(window).width() > 992) {
        //         let id = $(this).data('id');
        //         $(`.altcategories[data-parent="${id}"]`).show();
        //     }
        // }, function () {
        //     if ($(window).width() > 992) {
        //         let id = $(this).data('id');
        //         $(`.altcategories[data-parent="${id}"]`).hide();
        //     }
        // });






        // product favorite button
        $('.favorite-button').click(function () {
            $(this).toggleClass('active')
        });

        $('.product-button.basket').click(function(){
            $(this).addClass('active');
        })

        // product image height
        function setProductCartHeight() {
            let cartWidth = $('.product-card .product-image').innerWidth();
            $('.product-card .product-image').css('height', cartWidth + 'px');

            let productMainImage = $('.product-main-image').innerHeight();
            let productSmallImages = $('.product-small-images');
            if($(window).width() > 768){
                productSmallImages.css('height', productMainImage + 'px');
            }
        }
        $(window).on('load resize', function () {
            setProductCartHeight();
        });

        // product detail image
        $('.product-main-image img').removeClass('active');
        $('.product-main-image img').eq(0).addClass('active');

        $('.product-small-images img').click(function(){
            let id = $(this).data('id');
            $('.product-small-images img').removeClass('active');
            $(this).addClass('active');
            $('.product-main-image img').removeClass('active');
            $(`.product-main-image img[data-id="${id}"]`).addClass('active');
        });

        // product amount
        $('.product-amount .amount-button.decrement').click(function(){
            let input = $(this).parent('.product-amount').find('input');
            let value = parseInt(input.val());
            if (isNaN(value)) {
                value = 1;
            }
            if (value !== 1) {
                value -= 1;
            }
            input.val(value);
        });
        $('.product-amount .amount-button.increment').click(function(){
            let input = $(this).parent('.product-amount').find('input');
            let value = parseInt(input.val());
            if (isNaN(value)) {
                value = 0;
            }
            value += 1;
            input.val(value);
        });

        // price filter
        let rangeInputs = $('.price-filter input[type="range"]');
        let priceInputs = $('.price-filter input[type="number"]');

        let minVal = parseInt(rangeInputs.eq(0).val());
        let maxVal = parseInt(rangeInputs.eq(1).val());

        priceInputs.eq(0).val(minVal);
        priceInputs.eq(1).val(maxVal);

        rangeInputs.on("input", function () {
            let minVal = parseInt(rangeInputs.eq(0).val());
            let maxVal = parseInt(rangeInputs.eq(1).val());

            priceInputs.eq(0).val(minVal);
            priceInputs.eq(1).val(maxVal);
        });
        priceInputs.on('input', function () {
            let minVal = parseInt(priceInputs.eq(0).val());
            let maxVal = parseInt(priceInputs.eq(1).val());

            rangeInputs.eq(0).val(minVal);
            rangeInputs.eq(1).val(maxVal);
        });

        // filter show button
        $('.general-products-wrapper .filter-show-button').click(function(){
            $('.general-products-wrapper .wrapper-left').slideToggle();
        })
    });
});