// Index JQuery=======================================================================================

var isMobile = false;
var isDesktop = false;

$(document).ready(function() {
	toggleDivOnMobile();
	handleWindowResize();

	window.addEventListener('resize', function() {
		handleWindowResize();
		if ($(window).width() >= 992) {
			$('.menu').removeAttr('style');
		}
	});
});

function handleWindowResize() {
	isMobile = window.outerWidth <= 992;
}

function toggleDivOnMobile() {
	$('.menu-icon').click(function() {
		if (isMobile) {
			$('.menu').slideToggle();
		}

	});
	return false;
}
$('.coupon').click(function() {
	$('.coupon a i').toggleClass('fa-caret-up');
})

$('.coupon').click(function() {
	/* Act on the event */
	$('.categories-dd').fadeToggle();
});
$('.fa-times').click(function() {
	/* Act on the event */
	$('.categories-dd').fadeToggle();
	$('.coupon a i').toggleClass('fa-caret-up');
});
// Store JQuery=======================================================================================

$('#expired p').click(function() {
	/* Act on the event */
	$("#expired .fa-caret-down").toggleClass('fa-caret-up');
	$('#detail-expired').slideToggle();
});

// Categories JQuery=======================================================================================
$('.categories-list .header').click(function() {
	/* Act on the event */
	$('.downArrow i').toggleClass('fa-caret-down');
	$('.downArrow i').toggleClass('fa-caret-up');
	$('.card-collapse').slideToggle();
});