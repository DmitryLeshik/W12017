$('#mobile-menu').on("click", function(){
    $('.main-nav').slideToggle();
});

$(window).resize(function(){
    if ($(window).width() <= 768){
        $('.main-nav').hide();
    }else {
        $('.main-nav').show();
    }
});