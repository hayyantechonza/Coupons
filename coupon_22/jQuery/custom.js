$(window).scroll(function(event) {
    let $headerHeight = $('header').height();
    if ($(document).scrollTop() > $headerHeight) {
        $('header').addClass("fixed");
    } else if ($(document).scrollTop() < 0.1) {
        $('header').removeClass("fixed")
    }
});

$('.input').bind('keyup', function() {
    var value = $(this).val();
    if (value != '') {
        $('.search_result').fadeIn(100);
    } else {
        $('.search_result').fadeOut(100);
    }
});
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    slidesPerView: 1,
    freeMode: true,
    autoplay:{
        delay: 3000,
    },
    breakpoints: {
        1120: {
            slidesPerView: 5,
            slidesPerGroup: 5,
        },
        800: {
            slidesPerView: 4,
            slidesPerGroup: 4,
        },
        700: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        },
        600: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        }
    }
});
var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 10,
    speed: 1000,
    effect: 'fade',
    loop: true,
    autoplay:{
        delay: 3000,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper,
    },
});
for (var list = $(".bg_img"), i = 0; i < list.length; i++) {
    var src = list[i].getAttribute("data-bg");
    list[i].style.backgroundImage = "url('" + src + "')";
}

var swiper = new Swiper(".mySwiper_3", {
    spaceBetween: 30,
    slidesPerView: 'auto',
    grabCursor: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
$('.faq_head').click(function() {
    $(this).siblings('.faq_body').slideDown();
    $(this).parent().siblings().find('.faq_body').slideUp();
    $(this).children('i.fa').addClass('fa-minus').removeClass('fa-plus');
    $(this).parent().siblings().find('.faq_head').children('i.fa').removeClass('fa-minus').addClass('fa-plus');
});

$(function() {
    let blogSidebar = $('.blog_sidebar');
    blogSidebar.height() >= 555 ? blogSidebar.css('padding-right', '10px') : blogSidebar.css('padding-right', '0');
});
var swiper = new Swiper('.btnContainer', {
    slidesPerView: 'auto',
    mousewheel: true,
    grabCursor: true,
    spaceBetween: 5,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
$(".contact_input_field").blur(function() {
    $(this).val() != "" ? $(this).addClass("focused") : $(this).removeClass("focused");
});