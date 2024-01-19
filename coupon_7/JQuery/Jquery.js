$('.lazy').lazy({
   afterLoad: function(element) {
      $(element).removeClass('shimmering');
   }
});


$('.menu_toggler, .close_btn').click(function() {
   $('.menu_container').toggleClass('active_menu');
});

var swiper = new Swiper('.mySwiper', {
   loop: true,
   grabCursor: true,
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },   
   pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
   },
});
var swiper = new Swiper('.mySwiper_1', {
   slidesPerView: 2,
   spaceBetween: 20,
   loop: true,
   grabCursor: true, 
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
   breakpoints: {
      1200:{
         slidesPerView: 7,
      },
      1024:{
         slidesPerView: 6,
      },
      768:{
         slidesPerView: 5,
      },
      650:{
         slidesPerView: 4,
      },
      500:{
         slidesPerView: 3,
      },
   }
});

$('.popular_categories_sidebar_item').click(function(e) {
   $(this).addClass('active_cat_btn').siblings().removeClass('active_cat_btn');
   e.preventDefault();
});

var swiper = new Swiper('.mySwiper_2', {
   slidesPerView: 4,
   spaceBetween: 20,
   grabCursor: true, 
   loop: true,
   breakpoints: {
      1200:{
         slidesPerView: 4,
      },
      992:{
         slidesPerView: 3,
      },
      800:{
         slidesPerView: 4,
      },
      768:{
         slidesPerView: 3,
      },
      600:{
         slidesPerView: 4,
      },
      450:{
         slidesPerView: 3,
      },
      0:{
         slidesPerView: 2,
      },
   },
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   }, 
});


$(".question-arrow").click(function(){
   $(this).siblings("p").slideToggle();
   $(this).parent().siblings().children("p").slideUp();
});
$('.about_tab , .close_about').click(function() {
   $(this).parent().toggleClass('active');
   $(this).parent().siblings('.about_content').toggleClass('active');

});

var swiper = new Swiper('.mySwiper_3', {
   slidesPerView: 4,
   spaceBetween: 20,
   grabCursor: true, 
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
});


$('.coupon_more').click(function() {
   $(this).parent().siblings('.view_more_dd').slideToggle();
   $(this).parent().parent().toggleClass("active");
});