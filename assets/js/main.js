jQuery(document).ready(function($) {

	$('#mmenu').mmenu({
		// Pptions
	}, {
		// Configuration
		classNames: {
			fixedElements: {
				fixed: "mmenu-fixed-dis",
				sticky: "stick"
			}
		}
	});

	$(window).scroll(function() {
		if ($(document).scrollTop() > 50) {
			$('#header-page').addClass('minified');
		} else {
			$('#header-page').removeClass('minified');
		}
	});
	
	$("a[href^='/#']").click(function (event) {
		var $anchor 	= $(this);
		var $href 		= $anchor.attr('href');
		var $element 	= $href.split('#')[1];
		var $id_link 	= '#' + $element;
		var $offset 	= 50;
		$('html, body').stop().animate({
			scrollTop: $($id_link).offset().top - $offset
		}, 1500, 'easeInOutExpo');
		event.preventDefault();
	});

	var $videoSrc;  
	$('.video-btn').click(function() {
		$videoSrc = $(this).data( "src" );
		console.log($videoSrc);
	});
	
	
	// when the modal is opened autoplay it  
	$('#modalVideo').on('shown.bs.modal', function (e) {
		// set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
		$("#video").attr('src',$videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0" ); 
	})

	// stop playing the youtube video when I close the modal
	$('#modalVideo').on('hide.bs.modal', function (e) {
		// a poor man's stop video
		$("#video").attr('src',$videoSrc); 
	}) 
});