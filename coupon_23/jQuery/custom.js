$('.menu_toggler').click(function() {
    $('.menu').toggleClass('active');
    $('body').toggleClass('active');
});
$('.navigation svg').click(function() {
    $('.menu').removeClass('active');
    $('body').removeClass('active');
});
$('.input').bind('keyup', function() {
    var value = $(this).val();
    if (value != '') {
        $('.search_result').fadeIn(100);
    } else {
        $('.search_result').fadeOut(100);
    }
});
var swiper = new Swiper(".banner_sidebar", {
    spaceBetween: 10,
    slidesPerView: 1,
    loop: true,
    speed: 800,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 3000,
    },
    breakpoints: {
        992: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
    },
});
$(function() {
    $('.lazy').Lazy({
        afterLoad: function(element) {
            $(element).removeClass('loader');
        }
    });
});


$('.cat_nav_item').click(function(e) {
    e.preventDefault();
    var getIndext = $(this).attr('data-all');
    $(this).addClass('active').siblings().removeClass("active");
    var getIndexasdt = $(`.cat_main[id='${getIndext}']`).addClass('active').siblings().removeClass('active');
    $(this).siblings("h4").children('span').text(`${getIndext} categories`);
});
$('.faq_head').click(function() {
    $(this).siblings('.faq_body').slideDown();
    $(this).parent().siblings().find('.faq_body').slideUp();
    $(this).children('i.fa').addClass('fa-minus').removeClass('fa-plus');
    $(this).parent().siblings().find('.faq_head').children('i.fa').removeClass('fa-minus').addClass('fa-plus');
});

var swiper = new Swiper('.str_pop_slider', {
    slidesPerView: 1,
    spaceBetween: 20,
    grabCursor: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        1100: {
            slidesPerView: 7,
        },
        992: {
            slidesPerView: 6,
        },
        768: {
            slidesPerView: 5,
        },
        650: {
            slidesPerView: 4,
        },
        500: {
            slidesPerView: 3,
        },
        0: {
            slidesPerView: 2,
        },
    },
});