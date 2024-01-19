$(function() {
   $('.menu_toggler,.navigation svg').click(function() {
      $('.menu').toggleClass('active');
      $('body').toggleClass('active');
   });

   $('.input').bind('keyup', function() {
      var value = $(this).val();
      if (value != '') {
         $('.search_result').fadeIn(100);
      } else {
         $('.search_result').fadeOut(100);
      }
   });
   var swiper = new Swiper(".banner_slider", {
      spaceBetween: 10,
      slidesPerView: 1,
      loop: true,
      speed: 800,
      navigation: {
         nextEl: ".swiper-button-next",
         prevEl: ".swiper-button-prev",
      },
      autoplay: {
         delay: 5000,
      },
   });
   $(function() {
      $('.lazy').Lazy();
   });
   $('.faq_head').click(function() {
      $(this).siblings('.faq_body').slideDown();
      $(this).parent().siblings().find('.faq_body').slideUp();
      $(this).children('i.fa').addClass('fa-minus').removeClass('fa-plus');
      $(this).parent().siblings().find('.faq_head').children('i.fa').removeClass('fa-minus').addClass('fa-plus');
   });
   var swiper = new Swiper('.store_container', {
      slidesPerView: "auto",
      loop: true,
      spaceBetween: 20,
      centeredSlides: true,
      grabCursor: true,
      navigation: {
         nextEl: ".swiper-button-next",
         prevEl: ".swiper-button-prev",
      },
   });
   $('.cpn_more_details').click(function() {
      $(this).parents('.coupon_footer').siblings('.cpn_details').slideToggle()
      $(this).parents('.coupon').siblings('.coupon').find('.cpn_details').slideUp();
      $(this).toggleClass("active");
      $(this).parents('.coupon').siblings('.coupon').find('.cpn_more_details').removeClass("active");
   });
   var swiper = new Swiper('.btnContainer', {
      slidesPerView: 'auto',
      mousewheel: true,
      grabCursor: true,
      spaceBetween: 5,
      navigation: {
         nextEl: ".swiper-button-next",
         prevEl: ".swiper-button-prev",
      },
   });

});         