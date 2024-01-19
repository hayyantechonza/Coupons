$('.menu_toggler, .menu i').click(function() {
   $('.menu').toggleClass('active');
});

$('.lazy').lazy({
   afterLoad: function(element) {
      $(element).removeClass('shimmering');
   }
});

var swiper = new Swiper('.mySwiper_1', {
   slidesPerView: 3,
   speed: 800,
   spaceBetween: 20,
   rewind: true,
   grabCursor: true,
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
   breakpoints: {
      1200: {
         slidesPerView: 4,
      },
      1050: {
         slidesPerView: 3,
      },
      600: {
         slidesPerView: 2,
      },
      0: {
         slidesPerView: 1,
      }
   },
});
for (var list = $(".bg_img"), i = 0; i < list.length; i++) {
   var src = list[i].getAttribute("data-bg");
   list[i].style.backgroundImage = "url('" + src + "')";
}

for (var list2 = $(".gradient_bg"), i = 0; i < list2.length; i++) {
   var src = list2[i].getAttribute("data-bg");
   list2[i].style.backgroundImage = "url('" + src + "'), linear-gradient(180deg, #fff 20%,#000000c2 70%)";
}
$('.list').click(function() {
   $(this).children('.list_btn').toggleClass('active');
});
$('.contact_input input[type="email"]').keyup(function(e) {
   if ($(this).val() == '') {
      $(this).removeClass("focused");
   } else {
      $(this).addClass("focused");
   }
});
$('.filter span').click(function() {
   $(this).addClass('active').siblings().removeClass('active')
});

$('.input').bind('keyup', function () {
   var value = $(this).val();
   if (value != '') {
      $('.dropdown_search').fadeIn(100);
   } else {
      $('.dropdown_search').fadeOut(100);
   }
});