
$('#input-field').bind('keyup' , function(){
   if($(this).val() != ''){
      $('.search_result_box').fadeIn('fast');
   }
   else{
      $('.search_result_box').fadeOut('fast');
   }
});
$('.menu_toggler').click(function(e) {
   $(this).siblings('.links_nav').slideToggle();
   e.preventDefault();
});

$('.lazy').lazy({
   afterLoad: function(element) {
      $(element).removeClass('shimmering');
   }
});

$('.banner_slider_card').click(function() {
   var slider_bg = $(this).children('.slider_card_img').attr('data-img');
   $(this).parent().parent().siblings('.bg_img').attr('style', 'background-image: url('+slider_bg+')');
   var sliderText = $(this).children('.slider_card_content').text();
   $('.banner_heading').text(sliderText);

   $(this).addClass('active').siblings().removeClass('active');
});

var swiper = new Swiper('.mySwiper_1', {
   slidesPerView: 1,
   spaceBetween: 10,
   loop: true,
   speed: 800,
   autoplay: true,
   grabCursor: true,
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
   autoplay: {
      delay: 3000,
   },
   breakpoints: {
      1150:{
         slidesPerView: 4, 
      },
      768:{
         slidesPerView: 3, 
      },
      500:{
         slidesPerView: 2, 

      }
   }
});

$('.cpn_liked').click(function() {
   $(this).addClass('active').siblings('.cpn_liked').removeClass('active');
});

$('.coupon_read').click(function() {
   $(this).parent().siblings('.code_btn_container').children('.str_view_detail').slideToggle('slow');
   $(this).parent().parent().siblings('.coupon').toggleClass('active');
   $(this).find('i').toggleClass('active');
});


tippy('.code .featured_blogs_coupon_btn', {
   content: 'click to get code',
   theme: 'myCustomToolTip',
});
tippy('.deal .featured_blogs_coupon_btn', {
   content: 'click to get deal',
   theme: 'myCustomToolTip',
});

$('.dis_switches_item').click(function() {
   $(this).addClass('active').siblings().removeClass('active');

   var dis = $(this).attr('data-disclaimer');
   $(this).parent().siblings('.main_dis[id="' + dis + '"]').addClass('active').siblings().removeClass('active')
   

   var dis_text = $(this).text();
   $(this).parent().siblings().children('.main_dis_content').children('.dis_heading').text(dis_text)
   console.log(dis_text)
});

var swiper = new Swiper('.mySwiper_2', {
   slidesPerView: 3,
   spaceBetween: 20,
   speed: 1000,
   loop: true,
   slidesPerGroup: 3,
   autoplay: true,
   grabCursor: true,
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
   autoplay: {
      delay: 2000,
   },
   breakpoints: {
      1150:{
         slidesPerView: 7, 
      },
      992:{
         slidesPerView: 6, 
      },
      768:{
         slidesPerView: 5,
      },
      630:{
         slidesPerView: 4,
      },
   }
});

$('.store_about_title').click(function() {
   $(this).siblings('.store_about').slideToggle();
   $(this).children('.fa').toggleClass('active');
});

$('.switchers_items , .cat_switchers_item').click(function(e) {
   e.preventDefault()
   $(this).toggleClass('active').siblings().removeClass('active');
});

$('.contact_input input[type="email"]').keyup(function(e) {
    if($(this).val() == ''){
      $(this).removeClass("focused");
    }
    else{
      $(this).addClass("focused");
    }
});