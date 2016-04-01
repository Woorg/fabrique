jQuery(document).ready(function($) {

	var videoEmbed = $('.video__embed').YTPlayer({
		videoURL: '7AFV62hKDl4',
		containment: '.video__embed',
		showControls: false,
		quality: 'hd1080',
		optimizeDisplay: true,
		autoPlay: false
	});
	// videoEmbed.fitVids();

	var videoPlaceholder = $('.video img');
	$('.video__button').click(function() {
		videoPlaceholder.hide();
		videoEmbed.YTPPlay();
		$(this).hide();
		console.log('click')
		return false;
	});

});
