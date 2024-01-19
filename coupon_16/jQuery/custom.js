$('.menu_toggler').click(function() {
   $('.menu').slideToggle();
   $('body').toggleClass('active');
});

for (var list = $(".bg_img"), i = 0; i < list.length; i++) {
   var src = list[i].getAttribute("data-bg");
   list[i].style.backgroundImage = "url('" + src + "')";
}

for (var list2 = $(".gradient_bg"), i = 0; i < list2.length; i++) {
   var src = list2[i].getAttribute("data-bg");
   list2[i].style.backgroundImage = "url('" + src + "'), linear-gradient(180deg, #fff0 20%,#000000c2 70%)";
}

$('.input').bind('keyup', function() {
   var value = $(this).val();
   if (value != '') {
      $('.dropdown_search').fadeIn(100);
   } else {
      $('.dropdown_search').fadeOut(100);
   }
});

$(document).ready(function() {
   $("#str_search").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $(".str_name").filter(function() {
         $(this).parent('.str_sub_item').toggle($(this).text().toLowerCase().indexOf(value) > -1);
      });
   });
});

$(document).ready(function() {
   $("#str_search").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $(".cat_name").filter(function() {
         $(this).parents('.str_sub_item').toggle($(this).text().toLowerCase().indexOf(value) > -1);
      });
   });
});
var swiper = new Swiper('.mySwiper_1', {
   slidesPerView: 1,
   spaceBetween: 20,
   loop: true,
   grabCursor: true,
   navigation: {
      nextEl: ".str_slider_next",
      prevEl: ".str_slider_prev",
   },
   breakpoints: {
      1250: {
         slidesPerView: 6,
      },
      1050: {
         slidesPerView: 5,
      },
      810: {
         slidesPerView: 4,
      },
      590: {
         slidesPerView: 3,
      },
      410: {
         slidesPerView: 2,
      },
   }
});


var swiper = new Swiper(".mySwiper", {
   spaceBetween: 10,
   slidesPerView: 1,
   slidesPerGroup: 1,
   watchSlidesProgress: true,
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
      },
   }
});
var swiper2 = new Swiper(".mySwiper2", {
   spaceBetween: 10,
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
   thumbs: {
      swiper: swiper,
   },
});
$('.question').click(function() {
   $(this).children('p').slideToggle();
   $(this).siblings().children('p').slideUp();
   $(this).find('i.fa').toggleClass('fa-caret-down').toggleClass('fa-caret-up');
});
$('.str_item svg').click(function() {
   $(this).parent().siblings().slideToggle();
});
$('.verified_filter').click(function() {
   $(this).children('.verified_btn').toggleClass('active')
});
