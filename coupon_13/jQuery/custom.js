$('.menu_toggler').click(function() {
   $('.nested_menu').addClass('active');
   $('body').addClass('active');
});
$('.sidebar_logo svg').click(function() {
   $('.nested_menu').removeClass('active');
   $('body').removeClass('active');
});

var swiper = new Swiper('.mySwiper_1', {
   slidesPerView: 1,
   speed: 800,
   spaceBetween: 10,
   effect: 'coverflow',
   coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
   },
   grabCursor: true,
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
});
var swiper = new Swiper('.mySwiper_2', {
   slidesPerView: 2,
   slidesPerGroup: 2,
   grid: {
      rows: 3,
   },
   spaceBetween: 20,
   grabCursor: true,
   navigation: {
      nextEl: ".str_slider_next",
      prevEl: ".str_slider_prev",
   },
   breakpoints :{
      1150:{
         slidesPerView: 2,
         slidesPerGroup: 2,
         grid: {
            rows: 3,
         },
      },
      992:{
         slidesPerView: 1,
         slidesPerGroup: 1,
         grid: {
            rows: 3,
         },
      },
      800:{
         slidesPerView: 3,
         slidesPerGroup: 3,
         grid: {
            rows: 3,
         },
      },
      550:{
         slidesPerView: 2,
         slidesPerGroup: 2,
         grid: {
            rows: 3,
         },
      },
      0:{
         slidesPerView: 1,
         slidesPerGroup: 1,
         grid: {
            rows: 3,
         },
      },
   },

});

var swiper = new Swiper('.mySwiper_3', {
   slidesPerView: 4,
   slidesPerGroup: 4,
   grid: {
      rows: 3,
   },
   spaceBetween: 20,
   grabCursor: true,
   navigation: {
      nextEl: ".cat_slider_next",
      prevEl: ".cat_slider_prev",
   },
   breakpoints :{
      1150:{
         slidesPerView: 4,
         slidesPerGroup: 4,
         grid: {
            rows: 3,
         },
      },
      992:{
         slidesPerView: 3,
         slidesPerGroup: 3,
         grid: {
            rows: 3,
         },
      },
      860:{
         slidesPerView: 6,
         slidesPerGroup: 6,
         grid: {
            rows: 3,
         },
      },
      670:{
         slidesPerView: 5,
         slidesPerGroup: 5,
         grid: {
            rows: 3,
         },
      },
      550:{
         slidesPerView: 4,
         slidesPerGroup: 4,
         grid: {
            rows: 3,
         },
      },
      400:{
         slidesPerView: 3,
         slidesPerGroup: 3,
         grid: {
            rows: 3,
         },
      },
      0:{
         slidesPerView: 2,
         slidesPerGroup: 2,
         grid: {
            rows: 3,
         },
      },
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

$('.input').bind('keyup', function() {
   var value = $(this).val();
   if (value != '') {
      $('.dropdown_search').fadeIn(100);
   } else {
      $('.dropdown_search').fadeOut(100);
   }
});

$('.about_drop_item').click(function() {
   $(this).parent().toggleClass('active');
});