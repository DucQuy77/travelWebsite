$(document).ready(function(){
    $('.menu').click(function(){
        $('.navbar').toggle();
        $('.menu .fa-bars').removeClass('fa-times')
        $('section').removeClass('nav-toggle')
    })

    $(window).on('load scroll', function(){
        $('.navbar').hide();
        $('.menu .fa-bars').removeClass('fa-times');
        $('section').removeClass('nav-toggle')
    })
})