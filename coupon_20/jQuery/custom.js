$('.menu_toggler').click(function() {
    $('.menu').toggleClass('active')
    $('body').toggleClass('active')
})

let menuToggle = document.querySelector(".menu_toggler");
menuToggle.onclick = () => {
    menuToggle.classList.toggle("active")
}

var swiper = new Swiper('.mySwiper_1', {
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    spaceBetween: 10,
    speed: 500,
    grabCursor: true,
    navigation: {
        nextEl: ".bnr_slider_btn-next.bnr_slider_btn",
        prevEl: ".bnr_slider_btn-prev.bnr_slider_btn",
    },
    autoplay: {
        delay: 5000,
    },

    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
    }
});

for (var list = $(".bg_img"), i = 0; i < list.length; i++) {
    var src = list[i].getAttribute("data-bg");
    list[i].style.backgroundImage = "url('" + src + "')";
}


let searchBox = document.querySelector("#str_search");
let contracts = document.querySelector(".store_container");

$(searchBox).keyup(function(e) {

    let text = e.target.value;
    let options = contracts.querySelectorAll('.str_body > a');

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
        let links = sections[j].querySelectorAll('.str_body > a');
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

function searchFilter(searchFilter) {

    let $searchStrInfo = $('.search_str_info');
    let btn = $('.srch_info_btn');
    let $imgUrl = $(searchFilter).find('.web_imagebox img').attr('src');
    let $strTitle = $(searchFilter).find('.store-name').text();
    let $strOfr = $(searchFilter).find('.str-abt').text();
    $searchStrInfo.find('img').attr('src', $imgUrl);
    $searchStrInfo.find('h2').text($strTitle);
    let $searchDetailText = $searchStrInfo.find('p').text($strOfr);

    if ($searchDetailText.text() == '') {
        btn.fadeIn(0);
    } else {
        btn.fadeOut(0);
    }
}
$('.input').bind('keyup', function() {
    var value = $(this).val();
    if (value != '') {
        $('.search_result').fadeIn(100);
    } else {
        $('.search_result').fadeOut(100);
    }

    let searchFchld = $(".search_result_ul a").first();

    searchFilter(searchFchld);
});
$('.search_result_ul a').mouseenter(function() {
    searchFilter(this);
});
var swiper = new Swiper('.top_str_container', {
    slidesPerView: 8,
    spaceBetween: 20,
    speed: 500,
    grabCursor: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        1188: {
            slidesPerView: 8,
        },
        1000: {
            slidesPerView: 7,
        },
        800: {
            slidesPerView: 6,
        },
        650: {
            slidesPerView: 5,
        },
        500: {
            slidesPerView: 4,
        },
        425: {
            slidesPerView: 3,
        },
        0: {
            slidesPerView: 2,
        },
    }

});
$('.top_str_item').click(function(e) {
    e.preventDefault();
    $(this).addClass('active');
    $(this).parent().siblings().children().removeClass('active')
});
$('.btns').click(function() {
    $(this).addClass('active');
    $(this).parent().siblings().children().removeClass('active');
});
$('.stars').delegate("a", "click", function(e) {
    e.preventDefault();
    $(this).prevAll().addClass('active');
    $(this).addClass('active');
    $(this).nextAll().removeClass('active');
    let starId = $(this).attr("id");
    let emoji = true;
    $(".emoji_single").hide();
    $('.emoji_single[id=' + starId + ']').fadeIn();

});
var swiper = new Swiper('.str_pop_slider', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    grabCursor: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        1150: {
            slidesPerView: 5,
        },
        1050: {
            slidesPerView: 4,
        },
        993: {
            slidesPerView: 3,
        },
        870: {
            slidesPerView: 6,
        },
        750: {
            slidesPerView: 5,
        }
    },
});