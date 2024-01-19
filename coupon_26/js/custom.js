$(function() {
  const bannerSlider = new Swiper('.banner_slider', {
    slidesPerView: "auto",
    grabCursor: true,
    effect: 'fade',
    speed: 500,
    autoplay: {
      delay: 5000,
      disableOnInteraction: true,
    },
  })
  const bannerSliderThumb = new Swiper('.banner_thumb_slider', {
    slidesPerView: "auto",
    grabCursor: true,
    centeredSlides: true,
    direction: 'horizontal',
    allowTouchMove: true,
    spaceBetween: 20,
    speed: 500,
    breakpoints: {
      992: {
        direction: 'vertical',
        allowTouchMove: false,
      },
    },
  });

  bannerSlider.controller.control = bannerSliderThumb;
  bannerSliderThumb.controller.control = bannerSlider;
  
  $('.faq-question').click(function() {
    var faqItem = $(this).closest('.faq-item');
    faqItem.addClass('active').siblings('.faq-item').removeClass('active');
    faqItem.closest('.faq-item').find('.faq-answer').slideDown().parents('.faq-item').siblings('.faq-item').find('.faq-answer').slideUp();
  });

  // menu
  $(".menu_btn, menu").click(function(event) {
    if ($(event.target).closest("ul").length === 0) {
      $("menu").toggleClass('active');
    }
  });

  // store alpha
  const alphabet = ['all store', '#', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  for (let index of alphabet) {
    $('.str_filter').append(`<a href="single_alphabet.html" class="str_alpha">${index}</a>`);
  }

  $('.str_alpha').first().addClass('active');

});