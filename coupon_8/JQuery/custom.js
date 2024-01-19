$('.lazy').lazy({
   afterLoad: function(element) {
      $(element).removeClass('shimmering');
   }
});
$('.menu_toggler').click(function() {
   $('.menu').toggleClass('active');
});
$('.dropdown_menu_wrapper a').mouseenter(function() {
   $(this).siblings().addClass('active');
});
$('.dropdown_menu_wrapper a').mouseleave(function() {
   $(this).siblings().removeClass('active');
});
var swiper = new Swiper('.mySwiper', {
   loop: true,
   autoplay: true,
   grabCursor: true,
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
   pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
      clickable: true,
   },
   autoplay: {
      delay: 3000,
   },
});
var swiper = new Swiper('.mySwiper_1', {
   spaceBetween: 20,
   loop: true,
   slidesPerView: 1,
   grabCursor: true,
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
   breakpoints: {
      992: {
         slidesPerView: 3,
      },
      600: {
         slidesPerView: 2,
      },
   },
});
$('.like').click(function() {
   $(this).addClass('active')
   $(this).children('i').removeClass('fa-heart-o').addClass('fa-heart');
});

$('.contact_input input[type="email"]').keyup(function(e) {
    if($(this).val() == ''){
      $(this).removeClass("focused");
    }
    else{
      $(this).addClass("focused");
    }
});

$(".mdoal_btn").click(function (e) {
   $('body').find(".modal").addClass("active");
   $('body').find(".modal").find(".modal_container").addClass("active");
   $("body").addClass("active");
   e.preventDefault();
});
$(".btn").click(function () {
   $(".modal").removeClass("active");
   $("body").removeClass("active");
   $(".modal").find(".modal_container").removeClass("active");
});


$(".modal_code").click(function(){
   $button = $(this);
   $code = $(this).attr("data-code");

   $(this).html("Copied");

   setTimeout(function() {
       $button.html($code);
   }, 3000);
});
