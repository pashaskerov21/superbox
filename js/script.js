document.addEventListener('DOMContentLoaded', function () {
    $(document).ready(function(){
        // top alert button click
        $('.top-alert-wrapper .close-button').click(function(){
            $('.top-alert-wrapper').hide();
        });

        //mobile search
        $('.nav-tool.mobile-search-button').click(function(){
            $('.search-form.mobile').toggleClass('active');
        });

        // mobile menu
        $('.nav-tool.mobile-menu-button').click(function(){
            $('.black-backdrop').show();
            $('.mobile-menu').addClass('active')
        });
        $('.nav-tool.menu-close-button').click(function(){
            $('.black-backdrop').hide();
            $('.mobile-menu').removeClass('active')
        });
        $('.black-backdrop').click(function(){
            $('.black-backdrop').hide();
            $('.mobile-menu').removeClass('active')
        });

        // category
        $('.category.has-child .toggle-button').click(function(){
            if($(window).width() < 992){
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