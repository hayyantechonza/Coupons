$('.menu_toggler').click(function() {
   $('.header_2').slideDown();
});
$('.navigation svg').click(function() {
   $('.header_2').slideUp();
});

var swiper = new Swiper('.mySwiper_1', {
   slidesPerView: 1,
   spaceBetween: 30,
   loop: true,
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

$('.input').bind('keyup', function() {
   var value = $(this).val();
   if (value != '') {
      $('.dropdown_search').fadeIn(100);
   } else {
      $('.dropdown_search').fadeOut(100);
   }
});



let searchBox = document.querySelector("#str_search");
let contracts = document.querySelector(".str_main");

$(searchBox).keyup(function(e) {
   
   let text = e.target.value;
   let options = contracts.querySelectorAll('.str_main_wrpr > a');

   for (let i = 0; i < options.length; i++) {
      let option = options[i];
      let optionText = option.text;
      console.log(optionText);
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
         sections[j].style.display = 'block';
      } else {
         sections[j].style.display = 'none';
      }
   }
});

$('.str_down').click(function () {
   $(this).children('svg').toggleClass('active');
   $(this).parent().siblings('.str_main_wrpr').slideToggle();
});

$('.str_side_btn a').click(function (e) {
   e.preventDefault();
   $(this).addClass('active').siblings().removeClass('active');

   var tabAttr = $(this).attr('id');
   $('.str_side_item').hide();
   var a = $(this).parent().siblings(`.str_side_item[id="${tabAttr}"]`).fadeIn(100);
   console.log(a);
});
$('.verified_filter').click(function() {
   $(this).children('.verified_btn').toggleClass('active')
});
