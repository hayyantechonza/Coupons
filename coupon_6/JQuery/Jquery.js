$('.lazy').lazy({
    afterLoad: function(element) {
        $(element).removeClass('shimmering');
    }
});

$('.menu_toggler, .close_btn').click(function() {
    $('ul.menu').toggleClass('active_menu');
});

$(".categories").click(function() {
    $('.categories_dropdown').hide();
    $(".categories_container").slideToggle()
});

var swiper = new Swiper('.mySwiper_1', {
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        1201: {
            slidesPerView: 5,
        },
        992: {
            slidesPerView: 3,
        },
        900: {
            slidesPerView: 6,
        },
        768: {
            slidesPerView: 5,
        },
        601: {
            slidesPerView: 4,
        },
        501: {
            slidesPerView: 3,
        },
        0: {
            slidesPerView: 2,
        },
    },
});

$('.categories_dropdown_hover').hover(function() {
    var generatedId = $(this).attr('data-menu-id');
    $('.categories_dropdown').hide();
    $("#" + generatedId).css({
        'display': 'grid'
    });
})

var entered = false;
$('.categories_dropdown').on("mouseenter", function() {
    entered = true;
})

$('.categories_dropdown').on("mouseleave", function() {
    if (entered) {
        entered = false;
        $('.categories_dropdown').hide();
    }
});

$('.categories_dropdown').on("touchstart", function() {
    entered = true;
});

$('.categories_dropdown').on("touchend", function() {
    if (entered) {
        entered = false;
        $('.categories_dropdown').hide();
    }
});

var swiper = new Swiper('.mySwiper_2', {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        1100: {
            slidesPerView: 3,
        },
        700: {
            slidesPerView: 2,
        },
    },
});

var list2 = $('.categories_main_items');
for (var i = 0; i < list2.length; i++) {
    function generateRandomColor() {
        var letters = '456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 10)];
        }
        return color;
    }
    var randomColor = generateRandomColor();
    var srcImg = list2[i].getAttribute('data-src');
    list2[i].style.background = randomColor;
    list2[i].style.backgroundImage = "url('" + srcImg + "')";
};

var list2 = $('.discount_section_items');
for (var i = 0; i < list2.length; i++) {
    function generateRandomColor() {
        var letters = '01234abc56789';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 10)];
        }
        return color;
    }
    var randomColor = generateRandomColor();
    var srcImg = list2[i].getAttribute('data-src');
    list2[i].style.background = randomColor;
    list2[i].style.backgroundImage = "url('" + srcImg + "')";
};


$('.f_a_q_items_content').click(function(e) {

    if ($(this).hasClass('slided')) {
        $(this).children().find('.answer').slideUp();
        $(this).removeClass('slided');
        return false;
    }

    jQuery('.answer').slideUp();
    $('.f_a_q_items_content').removeClass('slided');
    $(this).children().find('.answer').slideDown();
    $(this).addClass('slided')

    e.prDefault();
})
$('.store_list_head').click(function() {
    $(this).siblings('.store_list_body').slideToggle();
    $(this).parent(".store_list_item").siblings().find(".store_list_body").slideUp();
})

$('.disclaimer_btn button').click(function(e) {
    $(this).addClass('disclaimer_btn_active').siblings().removeClass('disclaimer_btn_active');
    var getIndext = $(this).attr('data-index');
    $('.content_div').hide();
    $('.content_div[data-index="' + getIndext + '"]').fadeIn('fast');

    e.prDefault();
});


var swiper = new Swiper('.mySwiper_3', {
    spaceBetween: 20,
    autoplay: false,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        1201: {
            slidesPerView: 7,
        },
        992: {
            slidesPerView: 6,
        },
        801: {
            slidesPerView: 5,
        },
        701: {
            slidesPerView: 4,
        },
        601: {
            slidesPerView: 3,
        },
        501: {
            slidesPerView: 2,
        },
        0: {
            slidesPerView: 2,
        },
    },
});

