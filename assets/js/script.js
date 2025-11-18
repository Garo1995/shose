$(document).ready(function () {
    $('.open-menu').on('click', function () {
        $('.mobile-menu').toggleClass('transition-menu');
        $('body').toggleClass('body_fix');
    });
    $('.close-menu-mob').on('click', function () {
        $('body').removeClass('body_fix');
        $('.mobile-menu').removeClass('transition-menu');
    })
    $('.menu a').on('click', function () {
        $('body').removeClass('body_fix');
        $('.mobile-menu').removeClass('transition-menu');
    })
});







window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
});


$(function(){

    compareSliderInit();
    compareSliderMobileInit();


});







function compareSliderInit(){
    var enableCompareDrug = false;
    $('.compare').mousedown(function() {
        enableCompareDrug = true;
    });
    $('.compare').mousemove(function(e){
        var offsetLeft = e.clientX - $(this).offset().left;
        if(enableCompareDrug && offsetLeft > 15 && offsetLeft < 525){
            $('.move-do').width(offsetLeft);
        }
    });
    $(document).mouseup(function(){
        enableCompareDrug = false;
        $('.move-do').animate({'width': '50%'}, 300);
    });
}

function compareSliderMobileInit(){
    var enableCompareDrug = false;
    $('.compare').on('touchstart', function(){
        enableCompareDrug = true;
    });
    $('.compare').on('touchmove', function(e){
        var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
        var offsetLeft = touch.pageX - $(this).offset().left;
        if(enableCompareDrug && offsetLeft > 15 && offsetLeft < 525){
            $('.move-do').width(offsetLeft);
        }
    });
    $(document).on('touchend', function(){
        enableCompareDrug = false;
        $('.move-do').animate({'width': '50%'}, 300);
    });
}

