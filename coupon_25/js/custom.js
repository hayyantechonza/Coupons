$(function() {
  /*============================
  =            Menu            =
  ============================*/

  $(".menu_btn").click(function() {
    $(".menu_btn").children('.ph-bold').toggleClass('ph-list').toggleClass('ph-x');
    $(".menu").slideToggle();
  });

  /*=====  End of Menu  ======*/

  /*=========================================
  =            Categories slider            =
  =========================================*/

  var mySwiper = new Swiper('.popular_cats_slider', {
    slidesPerView: 1,
    grabCursor: true,
    autoplay: {
      delay: 5000,
    },
    rewind: true,
    grid: {
      rows: 2,
    },
    spaceBetween: 20,
    breakpoints: {
      401: {
        slidesPerView: 2,
        grid: {
          rows: 2,
        },
      },
      600: {
        slidesPerView: 3,
        grid: {
          rows: 2,
        },
      },
      768: {
        slidesPerView: 4,
        grid: {
          rows: 2,
        },
      },
      993: {
        slidesPerView: 3,
        grid: {
          rows: 2,
        },
      },
      1200: {
        slidesPerView: 4,
        grid: {
          rows: 2,
        },
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  /*=====  End of Categories slider  ======*/

  /*======================================
  =            Feature Coupon            =
  ======================================*/

  var mySwiper = new Swiper('.featured_coupons_main', {
    slidesPerView: 1,
    speed: 1000,
    grabCursor: true,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
    },
    loop: true,
    spaceBetween: 30,
    breakpoints: {
      600: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 3,
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  /*=====  End of Feature Coupon  ======*/

  /*========================================
  =            How it work tabs            =
  ========================================*/

  var currentIndex = 0;
  $('.how_it_works_tab').click(function() {
    $(this).addClass('active').siblings('').removeClass('active');
    var dataTab = $(this).attr("data-tab");
    $(`.how_it_works_image[data-tab="${dataTab}"]`).addClass('active').siblings('').removeClass('active')
  });

  /*=====  End of How it work tabs  ======*/

  /*============================================
  =            Store Filter Buttons            =
  ============================================*/

  alphabet = ['all', '#', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  $('.str_filter').append(alphabet.map(index => `<a href="single_alphabet.html" class="str_alpha">${index}</a>`));
  $('.str_alpha').first().addClass('active');

  /*=====  End of Store Filter Buttons  ======*/

  /*======================================
  =            Store Dropdown            =
  ======================================*/

  $('.store_item header .ph').click(function() {
    $(this).toggleClass('ph-caret-down').toggleClass('ph-caret-up');
    var storeBody = $(this).closest('.store_item').find('.store_slide');
    $(this).closest('.store_item').find('.store_slide').slideToggle();
  });

  /*=====  End of Store Dropdown  ======*/
  /*===========================================
  =            Single store rating            =
  ===========================================*/

  $('.stars').delegate("a", "click", function(e) {
    e.preventDefault();
    $(this).prevAll().addClass('active');
    $(this).addClass('active');
    $(this).nextAll().removeClass('active');
    let starId = $(this).attr("id");
    let emoji = true;
    $(".emoji_single").hide();
    $('.emoji_single[id=' + starId + ']').fadeIn();

  });
  $('.verified_filter').click(function() {
    $(this).children('.verified_btn').toggleClass('active')
  });

  /*=====  End of Single store rating  ======*/

  /*================================
  =            Modal JS            =
  ================================*/
  

  /*=====  End of Modal JS  ======*/

});