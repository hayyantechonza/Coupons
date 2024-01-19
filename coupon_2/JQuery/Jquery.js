$(window).scroll(function(event) {
   /* Act on the event */
   if ($(document).scrollTop() > 74) {
      $('.navigation').removeClass("nonfixed")
      $('.navigation').addClass("fixed")
   } else if ($(document).scrollTop() < 10) {
      $('.navigation').removeClass("fixed")
      $('.navigation').addClass("nonfixed")
   }
});

$('.search_btn').click(function(event) {
   /* Act on the event */
   $('.search_container').slideToggle();
});

$('.toggler').click(function(event) {
   /* Act on the event */
   $('#nav_list').toggleClass('toggler_menu')
});

$('.banner_slider').owlCarousel({
   loop: true,
   responsiveClass: true,
   autoplay: true,
   autoplayTimeout: 5000,
   nav: true,
   dots: true,
   responsive: {
      0: {
         items: 1,
         nav: true
      }
   }
})

var list2 = document.querySelectorAll(".slider_img");

for (var i = 0; i < list2.length; i++) {
   var url = list2[i].getAttribute('data-img');
   list2[i].style.backgroundImage = "url('" + url + "')";
}

$('.footer_container_top_store_slider').owlCarousel({
   loop: true,
   responsiveClass: true,
   autoplay: true,
   autoplayTimeout: 5000,
   nav: true,
   dots: true,
   responsive: {
      375: {
         items: 2,
         nav: true
      },
      500: {
         items: 2,
         nav: true
      },
      768: {
         items: 3,
         nav: true
      },
      1300: {
         items: 4,
         nav: true
      }
   }
})

var alphabets = ["all stores", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

$.each(alphabets, function(i) {
   var textname = alphabets[i];
   $(".alphabet_leter_container").append('<a href="#" class="leter_items">' + textname.toUpperCase() + '</a>')

   $(".leter_items").first().addClass("active_alphabet_btn");
});

$('.alphabet_leter_container .leter_items').click(function() {
   $(this).toggleClass('active_alphabet_btn');
});


$('.about_tabs li').click(function() {
    // body...
    $(this).addClass('active').siblings().removeClass('active');
})