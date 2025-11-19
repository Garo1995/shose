$(document).ready(function () {
    $('.open-menu').on('click', function () {
        $('.mobile-menu').toggleClass('transition-menu');
        $('body').toggleClass('body_fix');
    });
    $('.close-menu-mob').on('click', function () {
        $('body').removeClass('body_fix');
        $('.mobile-menu').removeClass('transition-menu');
    })



});


$('.submenu li').on('click', function () {
    $(this).toggleClass('submenu-opened');
})




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
    let enableCompareDrug = false;
    $('.compare').mousedown(function() {
        enableCompareDrug = true;
    });
    $('.compare').mousemove(function(e){
        let offsetLeft = e.clientX - $(this).offset().left;
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
    let enableCompareDrug = false;
    $('.compare').on('touchstart', function(){
        enableCompareDrug = true;
    });
    $('.compare').on('touchmove', function(e){
        let touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
        let offsetLeft = touch.pageX - $(this).offset().left;
        if(enableCompareDrug && offsetLeft > 15 && offsetLeft < 525){
            $('.move-do').width(offsetLeft);
        }
    });
    $(document).on('touchend', function(){
        enableCompareDrug = false;
        $('.move-do').animate({'width': '50%'}, 300);
    });
}




$('.menu .has-submenu>a').click(function(e){
    var submenu = $(this).parent().find('.submenu');
    if($(submenu).css('display') == 'block'){
        $(submenu).hide();
    } else {
        $(submenu).show();
    }
    e.stopPropagation();
    return false;
});

$(window).click(function() {
    $('.submenu').hide();
    $('.lang').removeClass('active');
});







$('.open_modal').on('click', function () {
    let attr = $(this).attr('data-val');
    let modal = $('#' + attr);
    modal.removeClass('out');
    modal.fadeIn();
    $('body').addClass('body-modal_fixed');
});

$('.close').on('click', function () {

    $('body').removeClass('body-modal_fixed');
    let prt = $(this).parents('.modal');

    prt.addClass('out')
    setTimeout(function () {
        prt.fadeOut();
    }, 100);
});

$(window).on('click', function (event) {


    $('.modal').each(function () {
        let gtattr = $(this).attr('id');
        let new_mod = $('#' + gtattr);
        let md_cnt = $(new_mod).find('.modal-content');
        if (event.target === $(md_cnt)[0]) {
            setTimeout(function () {
                $(new_mod).addClass('out');
                $(new_mod).fadeOut()
            }, 100)
            $('body').removeClass('body-modal_fixed');
        }
        if (event.target === this) {
            setTimeout(function () {
                $(new_mod).addClass('out');
                $(new_mod).fadeOut()
            }, 100)
        }
    })
});




