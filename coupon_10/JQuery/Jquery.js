

$('.menu_toggler').click(function(e) {
   $('.menu').slideToggle();
   $(this).children('.fa').toggleClass('fa-bars').toggleClass('fa-times');
});

$('.lazy').lazy({
   afterLoad: function(element) {
      $(element).removeClass('shimmering');
   }
});

$('.abt_item').click(function (e) {
   $(this).addClass('active').siblings().removeClass('active');
   var dataAbout = $(this).attr('data-about');
   $(this).parent().parent().siblings().children('.abt_main[id="' + dataAbout + '"]').addClass('active');
   $(this).parent().parent().siblings().children('.abt_main[id="' + dataAbout + '"]').siblings().removeClass('active');

   var aboutHeading = $(this).text();
   $(this).parent().parent().siblings().children('.abt_main[id="' + dataAbout + '"]').children('h4').text(aboutHeading);
   e.preventDefault();
});

$('.input').bind('keyup', function () {
   var value = $(this).val();
   if (value != '') {
      $('.search_result').slideDown(100);
   } else {
      $('.search_result').slideUp(100);
   }
});


var swiper = new Swiper('.mySwiper_1', {
   slidesPerView: 9,
   loop: true,
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
   autoplay: {
      delay: 2500,
      disableOnInteraction: false,
   },
});