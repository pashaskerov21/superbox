document.addEventListener('DOMContentLoaded', function () {
    $(document).ready(function(){
        // top alert button click
        $('.top-alert-wrapper .close-button').click(function(){
            $('.top-alert-wrapper').hide();
        });

        // header fixed
        $(window).scroll(function(){
            if($(window).width() < 992){
                if($(window).scrollTop() > 300){
                    $('.mobile-navbar').addClass('fixed-top');
                }else{
                    $('.mobile-navbar').removeClass('fixed-top');
                }
            }else{
                if($(window).scrollTop() > 300){
                    $('.general-navbar').addClass('fixed-top');
                    $('.general-navbar .category-menu-button').removeClass('d-none');
                }else{
                    $('.general-navbar').removeClass('fixed-top');
                    $('.general-navbar .category-menu-button').addClass('d-none');
                }
            }
        })

        //mobile search
        $('.nav-tool.mobile-search-button').click(function(){
            $('.search-form.mobile').toggleClass('active');
        });

        // mobile menu
        $('.nav-tool.mobile-menu-button').click(function(){
            $('.black-backdrop').show();
            $('.category-menu').addClass('active');
            $('body').css('overflow','hidden');
        });
        $('.category-menu-button').click(function(){
            $('.black-backdrop').show();
            $('.category-menu').addClass('active');
            $('body').css('overflow','hidden');
        });
        $('.nav-tool.menu-close-button').click(function(){
            $('.black-backdrop').hide();
            $('.category-menu').removeClass('active');
            $('body').css('overflow','visible');
        });
        $('.black-backdrop').click(function(){
            $('.black-backdrop').hide();
            $('.category-menu').removeClass('active');
            $('body').css('overflow','visible');
        });

        // category
        $('.category.has-child .toggle-button').click(function(){
            if($(window).width() < 992){
                $(this).toggleClass('active')
                let id = $(this).closest('.category.has-child').data('id');
                $(`.altcategories[data-parent="${id}"]`).toggle();
            }
        });

        $('.category.has-child').hover(function(){
            if($(window).width() > 992){
                let id = $(this).data('id');
                $(`.altcategories[data-parent="${id}"]`).show();
            }
        }, function(){
            if($(window).width() > 992){
                let id = $(this).data('id');
                $(`.altcategories[data-parent="${id}"]`).hide();
            }
        });

        // product
        $('.favorite-button').click(function(){
            if($(this).find('i').hasClass('fa-regular')){
                $(this).find('i').removeClass('fa-regular');
                $(this).find('i').addClass('fa-solid');
            }else{
                $(this).find('i').removeClass('fa-solid');
                $(this).find('i').addClass('fa-regular');
            }
        });

        function setProductCartHeight() {
            let cartWidth = $('.product-card .product-image').innerWidth();
            $('.product-card .product-image').css('height', cartWidth + 'px');
        }
        $(window).on('load resize', function() {
            setProductCartHeight();
        });
    });
});