$('.search_categories').click(function() {
   /* Act on the event */
   $(this).find('.fa').toggleClass('active_icon')
   $('.categories_container').slideToggle();
});

$('.menu_toggler').click(function() {
   /* Act on the event */
   $('.menu_container').slideToggle(function() {
      if($(this).is(':visible')) {
         $(this).css({
            display: 'flex'
         });
      }
   });
});

$(window).scroll(function(event) {
   /* Act on the event */
   if($(document).scrollTop() > 100) {
      $('.top_btn').addClass("top_btn_fixed")
   } else if($(document).scrollTop() < 100) {
      $('.top_btn').removeClass("top_btn_fixed")
   }
});

var alphabets = ["all", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
$.each(alphabets, function(i) {
   var textname = alphabets[i];
   $(".alphabet_leter_container").append('<a href="#" class="alphabet_leter_items">' + textname + '</a>')
   $(".alphabet_leter_items").first().addClass("active_alphabet_btn");
});

$('.lazy').lazy({
   afterLoad: function(element) {
      $(element).removeClass('shimmering');
   }
});

tippy('.coupon_btn.code a', {
   content: '<p style="font-size: 13px;">Click To Get Code</p>',
   allowHTML: true,
});

tippy('.coupon_btn.deal a', {
   content: '<p style="font-size: 13px;">Click To Get Deal</p>',
   allowHTML: true,
});

var swiper = new Swiper(".mySwiper", {
   loop: true,
   loopFillGroupWithBlank: true,
   spaceBetween: 10,
   autoplay: {
      delay: 5000,
   },
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
   breakpoints: {
      1201: {
            slidesPerView: 8,
       },
      1101: {
            slidesPerView: 7,
       },
      1001: {
            slidesPerView: 6,
       },
      750: {
            slidesPerView: 5,
       },
      601: {
            slidesPerView: 4,
       },
      500: {
            slidesPerView: 3,
       },
      357: {
            slidesPerView: 2,
       }
   }
});