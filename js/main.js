$(function() {
		// Smooth Scroll
		$(".nav-bar a").smoothScroll();
		// Slide out nav when click on hamburger
		$('.fa-bars').on('click', function() {
		$('.nav-bar').toggleClass('show');
		$('.hamburger').addClass('hide');
		});
		// Hide Nav Bar when link selected
		$('.nav-bar a').on('click', function() {
			$('.nav-bar').removeClass('show');
			$('.hamburger').removeClass('hide');
		});
		// Hide Nav bar when close button selected
		$('.x-button').on('click', function() {
			$('.nav-bar').removeClass('show');
			$('.hamburger').removeClass('hide');
		});
		// Toggle Accordian drop content individually
		$('.plus1').on('click', function() {
			$('.service-panel.panel1').toggleClass('show');
		});
		$('.plus2').on('click', function() {
			$('.service-panel.panel2').toggleClass('show');
		});
		$('.plus3').on('click', function() {
			$('.service-panel.panel3').toggleClass('show');
		});
		$('.plus4').on('click', function() {
			$('.service-panel.panel4').toggleClass('show');
		});
		$('.plus5').on('click', function() {
			$('.service-panel.panel5').toggleClass('show');
		});
		$('.plus6').on('click', function() {
			$('.service-panel.panel6').toggleClass('show');
		});
		// Toggle between accordian, only 1 open at a time (Optional)

		// $(".fa-plus").on("click", function() {
		// $(".service-panel").removeClass("show");
		// $(this).next().toggleClass("show");
		// });


});