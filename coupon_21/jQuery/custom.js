$('.menu_toggler').click(function() {
   $('.menu').slideToggle(200)
})
$('.srch_btn').click(function(e) {
   $('.search_form').find(".input").focus();
   $('.top_header').addClass('active');
});
$('.close').click(function() {
   $('.top_header').removeClass('active');
   $('.input').val(null);
   $('.search_result').fadeOut(100);

});
$(window).scroll(function(event) {
   let $headerHeight = $('header').height();
   if ($(document).scrollTop() > $headerHeight) {
      $('header').addClass("fixed");
   } else if ($(document).scrollTop() < 0.1) {
      $('header').removeClass("fixed")
   }
});
var swiper = new Swiper('.mySwiper_1', {
   slidesPerView: 1,
   effect: "fade",
   speed: 1500,
   loop: true,

   autoplay: {
      delay: 3000,
   },
   grabCursor: true,
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
   },
});
var swiper = new Swiper('.mySwiper_2', {
   slidesPerView: 'auto',
   spaceBetween: 20,
   slidesPerGroup: 1,
   grabCursor: true,
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
});
for (var list = $(".bg_img"), i = 0; i < list.length; i++) {
   var src = list[i].getAttribute("data-bg");
   list[i].style.backgroundImage = "url('" + src + "')";
}



$("#str_search").keyup(function(e) {
   let contracts = document.querySelector(".str_main_container");
   let text = e.target.value;
   let options = contracts.querySelectorAll('.str_main_wrpr > a');
   for (let i = 0; i < options.length; i++) {
      let option = options[i];
      let optionText = option.text;
      let lowerOptionText = optionText.toLowerCase();
      let lowerText = text.toLowerCase();
      let regex = new RegExp("^" + text, "i");
      let match = optionText.match(regex);
      let contains = lowerOptionText.indexOf(lowerText) != -1;

      if (match || contains && text !== '') {
         option.style.display = 'flex';
      } else {
         option.style.display = 'none';
      }
   }

   // Hide sections when all links are hidden
   let sections = contracts.querySelectorAll('.str_main_item');
   for (let j = 0; j < sections.length; j++) {
      let anyLinkNotHidden = false;
      let links = sections[j].querySelectorAll('.str_main_wrpr > a');
      for (let k = 0; k < links.length; k++) {
         if (links[k].style.display != 'none') {
            anyLinkNotHidden = true;
         }
      }
      if (anyLinkNotHidden) {
         sections[j].style.display = 'flex';
      } else {
         sections[j].style.display = 'none';
      }
   }
});



$('#cat_search').keyup(function(e) {
   let contracts = document.querySelector(".cat_main");
   let text = e.target.value;
   let options = contracts.querySelectorAll('.cat_item_body > a');
   for (let i = 0; i < options.length; i++) {
      let option = options[i];
      let optionText = option.text;
      let lowerOptionText = optionText.toLowerCase();
      let lowerText = text.toLowerCase();
      let regex = new RegExp("^" + text, "i");
      let match = optionText.match(regex);
      let contains = lowerOptionText.indexOf(lowerText) != -1;

      if (match || contains && text !== '') {
         option.style.display = '-webkit-box';
      } else {
         option.style.display = 'none';
      }
   }

   // Hide sections when all links are hidden
   let sections = contracts.querySelectorAll('.cat_item');
   for (let j = 0; j < sections.length; j++) {
      let anyLinkNotHidden = false;
      let links = sections[j].querySelectorAll('.cat_item_body > a');
      for (let k = 0; k < links.length; k++) {
         if (links[k].style.display != 'none') {
            anyLinkNotHidden = true;
         }
      }
      if (anyLinkNotHidden) {
         sections[j].style.display = 'flex';
      } else {
         sections[j].style.display = 'none';
      }
   }
});
$('.input').bind('keyup', function() {
   var value = $(this).val();
   if (value != '') {
      $('.search_result').fadeIn(100);
   } else {
      $('.search_result').fadeOut(100);
   }

   let searchFchld = $(".search_result_ul a").first();
});

var swiper = new Swiper('.how_to_slider', {
   slidesPerView: 1,
   grabCursor: true,
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
});

$(function() {

   let visibilityIds = ['#custom_counter', '#custom_counter_2'];
   let counterClass = '.counter';
   let defaultSpeed = 3000;


   $(window).on('scroll', function() {
      getVisibilityStatus();
   });

   getVisibilityStatus();

   function getVisibilityStatus() {
      elValFromTop = [];
      var windowHeight = $(window).height(),
         windowScrollValFromTop = $(this).scrollTop();

      visibilityIds.forEach(function(item, index) {
         try {
            elValFromTop[index] = Math.ceil($(item).offset().top);
         } catch (err) {
            return;
         }

         if ((windowHeight + windowScrollValFromTop) > elValFromTop[index]) {
            counter_init(item);
         }
      });
   }

   function counter_init(groupId) {
      let num, speed, direction, index = 0;
      $(counterClass).each(function() {
         num = $(this).attr('data-TargetNum');
         speed = $(this).attr('data-Speed');
         direction = $(this).attr('data-Direction');
         easing = $(this).attr('data-Easing');
         if (speed == undefined) speed = defaultSpeed;
         $(this).addClass('c_' + index); //add a class to recognize each counter
         doCount(num, index, speed, groupId, direction, easing);
         index++;
      });
   }

   function doCount(num, index, speed, groupClass, direction, easing) {
      let className = groupClass + ' ' + counterClass + '.' + 'c_' + index;
      if (easing == undefined) easing = "swing";
      $(className).animate({
         num
      }, {
         duration: +speed,
         easing: easing,
         step: function(now) {
            if (direction == 'reverse') {
               $(this).text(num - Math.floor(now));
            } else {
               $(this).text(Math.floor(now));
            }
         },
         complete: doCount
      });
   }
})

$('.question').click(function() {
   $(this).siblings('p').slideDown();
   $(this).parent().siblings().children('.answer').slideUp();
});


var swiper = new Swiper('.btnContainer', {
   slidesPerView: 'auto',
   mousewheel: true,
   grabCursor: true,
   spaceBetween: 5,
   scrollbar: {
      el: ".swiper-scrollbar",
      hide: true,
   },
});

$(".contact_input_field").blur(function() {
   $(this).val() != "" ? $(this).addClass("focused") : $(this).removeClass("focused");
});
$(function() {
   $('.lazy').Lazy({
      afterLoad: function(element) {
         $(element).removeClass('loader');
      }
   });
});
var swiper = new Swiper(".banner_slider2", {
   spaceBetween: 10,
   slidesPerView: 1,
   loop: true,
   speed: 800,
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
   // autoplay: {
   //    delay: 5000,
   // },
});


var quill = new Quill('#editor', {
  theme: 'snow',
   placeholder: 'Enter the messege here....',
});
