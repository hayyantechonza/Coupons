
$("#menu_toggle").click(function() {
   $('#nav_list').toggleClass("active_menu");
   $(this).children('.fa-bars').toggleClass('fa-times')
});

$('.question').click(function() {
   $(this).children('.hide_text').slideDown();
   $(this).siblings().children('.hide_text').slideUp();
   $(this).children('h4').children('.fa').removeClass('fa-caret-up')
   $(this).children('h4').children('.fa').addClass('fa-caret-down')
   $(this).siblings().children('h4').children('.fa').addClass('fa-caret-up');
   $(this).siblings().children('h4').children('.fa').removeClass('fa-caret-down');

});

$('.coupon_read').click(function() {
   $(this).parent().siblings('.str_view_detail').slideToggle('slow');
   $(this).parent().parent().toggleClass('active');
   $(this).find('i').toggleClass('active');
});

$('.filter_verified').click(function() {
   $(this).find('.str_checked').toggleClass('active');
});

var swiper = new Swiper('.mySwiper', {
   loop: true,
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   },
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
});
$('.lazy').lazy({
   afterLoad: function(element) {
      $(element).removeClass('shimmering');
   }
});

tippy('.coupon_btn_a', {
   content: 'click to get code',
   theme: 'myCustomToolTip',
});
tippy('.deal .coupon_btn_a', {
   content: 'click to get deal',
   theme: 'myCustomToolTip',
});

$('.switchers_items , .cat_switchers_item').click(function(e) {
   e.preventDefault()
   $(this).toggleClass('active').siblings().removeClass('active');
});

$('.all_sw').click(function() {
   $('.coupon_main_wrapper').find('.coupon').css('display', 'flex');
});

$('.code_sw').click(function() {
   $('.coupon_main_wrapper').find('.deal').css('display', 'none').siblings('.code').css('display', 'flex');
});

$('.deal_sw').click(function() {
   $('.coupon_main_wrapper').find('.code').css('display', 'none').siblings('.deal').css('display', 'flex');
});