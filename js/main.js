
// Document Ready
$(function() {

	// Mobile Menu Open
	$('.fa-bars').on('click', function() {
		$('.nav-bar').addClass('show');
		$('.hamburger').addClass('hide');
	});

	// Mobile Menu Close
	$('.x-button').on('click', function() {
		$('.nav-bar').removeClass('show');
		$('.hamburger').removeClass('hide');
	});

	// Hide Mobile Menu on selection
	$('.nav-bar a').on('click', function() {
		$('.nav-bar').removeClass('show');
		$('.hamburger').removeClass('hide');
	});

	// Smooth Scroll Activate
	$(".nav-bar a").smoothScroll();

	// Accordian Function
	$(".services-item").on("click", function() {

		// Check if this is already active
		if ( $(this).find('.accordian').hasClass('fa-minus') ) {
			// Slide up panel, remove class
			$(this).find('.service-panel').slideUp(250);
			$(this).find('.accordian').removeClass('fa-minus');

		} else {
			// Slide up any open panel
			// Remove active class from any open service panel
			$('.accordian.fa-minus').siblings('.service-panel').slideUp(250);
			$('.accordian.fa-minus').removeClass('fa-minus');
			// Open accordian panel
			// Add class to active item
			$(this).find('.service-panel').slideDown(250);
			$(this).find('.accordian').addClass("fa-minus");
		}
	
	});

	// Funtion to run on resize
	$(window).on('resize', function(){
		// Get window width
		var windowWidth = $(window).width();
		// Run when window is > 480 to remove styles from accordian
		if(windowWidth > 480){
		    // remove inline styling from accordian content divs
		    $('.service-panel').removeAttr('style');
		}
	});

});

