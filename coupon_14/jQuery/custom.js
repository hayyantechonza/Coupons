$('.menu_toggler').click(function() {
   $('.menu').addClass('active');
   $('body').addClass('active');
   $('body').find('.overlay').addClass('active')
});
$('.discount svg').click(function() {
   $('.menu').removeClass('active');
   $('body').find('.overlay').removeClass('active')
   $('body').removeClass('active');
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

$('.faq_head').click(function() {
   $(this).siblings('.faq_body').slideDown();
   $(this).parent().siblings().find('.faq_body').slideUp();
   $(this).children('i.fa').addClass('fa-minus').removeClass('fa-plus');
   $(this).parent().siblings().find('.faq_head').children('i.fa').removeClass('fa-minus').addClass('fa-plus');
});


$(document).ready(function() {
   $("#str_search").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $(".str_item h4").filter(function() {
         $(this).parent().parent().parent().toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
   });
});



var swiper = new Swiper('.mySwiper_2', {
   slidesPerView: 10,
   spaceBetween: 20,
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
      1200: {
         slidesPerView: 10
      },
      1036: {
         slidesPerView: 9
      },
      868: {
         slidesPerView: 8
      },
      738: {
         slidesPerView: 7
      },
      650: {
         slidesPerView: 6
      },
      544: {
         slidesPerView: 5
      },
      434: {
         slidesPerView: 4
      },
      2: {
         slidesPerView: 3
      },
   }
});