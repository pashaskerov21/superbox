document.addEventListener('DOMContentLoaded', function () {
    $(document).ready(function(){
        // top alert button click
        $('.top-alert-wrapper .close-button').click(function(){
            $('.top-alert-wrapper').hide();
        });

        //mobile search
        $('.nav-tool.mobile-search').click(function(){
            $('.search-form.mobile').toggleClass('active');
        })
    });
});