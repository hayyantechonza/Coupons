$('.menu_toggler').click(function() {
   $('.menu').addClass('active');
   $('body').addClass('active');
   $('body').find('.overlay').addClass('active')
});

var swiper = new Swiper('.mySwiper_1', {
   slidesPerView: 1,
   spaceBetween: 30,
   speed: 500,
   loop: true,
   grabCursor: true,
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
   autoplay: {
      delay: 2000,
      disableOnInteraction: false,
   },
   breakpoints: {
      1236: {
         slidesPerView: 4,

      },
      950: {
         slidesPerView: 3,

      },
      560: {
         slidesPerView: 2,

      },
   }
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
      $(".store-name").filter(function() {
         $(this).parents('.str_body li').toggle($(this).text().toLowerCase().indexOf(value) > -1);
      });
   });
});

$(document).ready(function() {
   $("#str_search").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $(".cat_name").filter(function() {
         $(this).parents('.cat_item').toggle($(this).text().toLowerCase().indexOf(value) > -1);
      });
   });
});