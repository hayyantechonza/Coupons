$('.menu_toggler').click(function() {
    $('.menu').slideDown();
});
$('.navigation svg').click(function() {
    $('.menu').slideUp();
});


var swiper = new Swiper('.mySwiper_1', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    grabCursor: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
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
let contracts = document.querySelector(".stores_container");

$(searchBox).keyup(function(e) {

    let text = e.target.value;
    let options = contracts.querySelectorAll('.stores > a');

    for (let i = 0; i < options.length; i++) {
        let option = options[i];
        let optionText = option.text;
        console.log(optionText);
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
    let sections = contracts.querySelectorAll('.str_wrpr');
    for (let j = 0; j < sections.length; j++) {
        let anyLinkNotHidden = false;
        let links = sections[j].querySelectorAll('.stores > a');
        for (let k = 0; k < links.length; k++) {
            if (links[k].style.display != 'none') {
                anyLinkNotHidden = true;
            }
        }
        if (anyLinkNotHidden) {
            sections[j].style.display = 'block';
        } else {
            sections[j].style.display = 'none';
        }
    }
});
$('.how_to_item').mouseover(function() {
    $(this).children('p').slideDown()
});
$('.how_to_item').mouseleave(function() {
    $(this).children('p').slideUp()
});
var swiper = new Swiper('.str_pop_slider', {
    slidesPerView: 6,
    spaceBetween: 20,
    loop: true,
    grabCursor: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
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