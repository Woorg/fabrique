jQuery(document).ready(function($) {
	var clientsSlider = $(".slider__list").owlCarousel({
		items: 6,
		margin: 0,
		stagePadding: 10,
		loop: true,
		nav: false,
		dots: false,
		slideBy: 1,
	});


	$('.slider-nav__item_back').click(function() {
		clientsSlider.trigger('prev.owl.carousel');
		return false;
	});

	$('.slider-nav__item_next').click(function() {
		clientsSlider.trigger('next.owl.carousel');
		return false;
	});




});
