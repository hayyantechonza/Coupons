$('.input').bind('keyup', function() {
   var value = $(this).val();
   if (value != '') {
      $('.search_resultbox').slideDown(100);
   } else {
      $('.search_resultbox').slideUp(100);
   }
});

$('.menu_toggler').click(function() {
   $('.menu').toggleClass('active');
});

$('.lazy').lazy({
   afterLoad: function(element) {
      $(element).removeClass('shimmering');
   }
});

var swiper = new Swiper('.mySwiper_1', {
   autoplay: true,
   spaceBetween: 10,
   speed: 800,
   loop: true,
   grabCursor: true,
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
   autoplay: {
      delay: 5000,
   },
   pagination: {
      el: '.swiper-pagination',
      type: "fraction",
      clickable: true,
   },
   effect: "creative",
   creativeEffect: {
      prev: {
         shadow: true,
         translate: [0, 0, -400],
      },
      next: {
         translate: ["100%", 0, 0],
      },
   },
});

$(document).ready(function() {
   var menu = $('.categories-menu-content')
   var timeout = 0;
   var hovering = false;
   menu.removeClass("is-visible");
   $('.cat_btn').on("mouseenter", function() {
      hovering = true;
      $('.categories-menu-content').stop(true, true).addClass("is-visible");
      if (timeout > 0) {
         clearTimeout(timeout);
      }
   }).on("mouseleave", function() {
      resetHover();
   });
   $(".categories-menu-content").on("mouseenter", function() {
      hovering = true;
      startTimeout();
   }).on("mouseleave", function() {
      resetHover();
   });

   function startTimeout() {
      timeout = setTimeout(function() {
         closeMenu();
      }, 200);
   };

   function closeMenu() {
      if (!hovering) {
         $('.categories-menu-content').removeClass("is-visible");
      }
   };

   function resetHover() {
      hovering = false;
      startTimeout();
   };
});

for (var list = $(".bnr_slide , .bg_img"), i = 0; i < list.length; i++) {
   var src = list[i].getAttribute("data-bg");
   list[i].style.backgroundImage = "url('" + src + "')";
}

$('.share').click(function() {
   $(this).children('.share_container').toggleClass('active');
});


for (var list2 = $(".bg_grad_blend"), i = 0; i < list2.length; i++) {
   var src = list2[i].getAttribute("data-bg");
   list2[i].style.backgroundImage = "url('" + src + "'), linear-gradient(180deg, #fff 20%,#000000c2 70%)";
}

$('.all_cat_item').click(function() {
   $(this).parent().toggleClass('active').siblings().removeClass('active');
   $(this).parent().siblings().toggleClass('disabled');
});