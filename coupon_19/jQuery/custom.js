$('.cat_btn').click(function() {
    $('.side_cat').addClass('active')
    $('body').addClass('active')
});
$('.side_cat svg').click(function() {
    $('.side_cat').removeClass('active')
    $('body').removeClass('active')

});
$('.menu_toggler').click(function() {
    $('.menu').addClass('active')
    $('body').addClass('active')
});
$('.menu svg').click(function() {
    $('.menu').removeClass('active')
    $('body').removeClass('active')

});


$(window).scroll(function(event) {
    let $headerHeight = $('header').height();
    if ($(document).scrollTop() > $headerHeight) {
        $('header').addClass("fixed");
    } else if ($(document).scrollTop() < 0.1) {
        $('header').removeClass("fixed")
    }
});

var swiper = new Swiper('.mySwiper_1', {
    spaceBetween: 20,
    loop: true,
    grabCursor: true,
    speed: 1000,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 2000,
    },
    breakpoints: {
        1100: {
            slidesPerView: 3,
        },
        660: {
            slidesPerView: 2,
        },
        0: {
            slidesPerView: 1,
        },
    }
});

for (var list = $(".bg_img"), i = 0; i < list.length; i++) {
    var src = list[i].getAttribute("data-bg");
    list[i].style.backgroundImage = "url('" + src + "')";
}

$('.input').bind('keyup', function() {
    var value = $(this).val();
    if (value != '') {
        $('.search_result').fadeIn(100);
    } else {
        $('.search_result').fadeOut(100);
    }
});



let searchBox = document.querySelector("#str_search");
let contracts = document.querySelector(".main_str_body");

$(searchBox).keyup(function(e) {

    let text = e.target.value;
    let options = contracts.querySelectorAll('.store_wrpr > a');

    for (let i = 0; i < options.length; i++) {
        let option = options[i];
        let optionText = option.text;
        let lowerOptionText = optionText.toLowerCase();
        let lowerText = text.toLowerCase();
        let regex = new RegExp("^" + text, "i");
        let match = optionText.match(regex);
        let contains = lowerOptionText.indexOf(lowerText) != -1;

        if (match || contains && text !== '') {
            option.style.display = 'flex';
        } else {
            option.style.display = 'none';
        }
    }

    // Hide sections when all links are hidden
    let sections = contracts.querySelectorAll('.str_item');
    for (let j = 0; j < sections.length; j++) {
        let anyLinkNotHidden = false;
        let links = sections[j].querySelectorAll('.store_wrpr > a');
        for (let k = 0; k < links.length; k++) {
            if (links[k].style.display != 'none') {
                anyLinkNotHidden = true;
            }
        }
        if (anyLinkNotHidden) {
            sections[j].style.display = 'flex';
        } else {
            sections[j].style.display = 'none';
        }
    }
});

$(function() {
    let topRtr = $('.top_str').length;
    if (topRtr >= 17) {
        $('#viewMoreStores').css('display', 'flex');
    } else {
        $('#viewMoreStores').css('display', 'none');
    }
});

$('#viewMoreStores').click(function(e) {
    e.preventDefault();
    $(this).parent().toggleClass('active');
    if ($(this).parent().hasClass('active')) {
        $(this).children('p').text('view less');
    } else {
        $(this).children('p').text('view more');
    }
});
$('.faq_item svg').click(function() {

    $(this).addClass('active');
    $(this).parent().siblings('.faq_item').children('svg').removeClass('active');
    $(this).siblings('.answer').slideDown();
    $(this).parent().siblings('.faq_item').children('.answer').slideUp()
});