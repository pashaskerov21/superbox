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
            let id = $(this).closest('.category.has-child').data('id');
            $(`.altcategories[data-parent="${id}"]`).toggle();
        })
    });
});