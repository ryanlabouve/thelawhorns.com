/* global $, skrollr, TweenMax, ScrollScene, ScrollMagic */

var controller;

$(function() {
	$('[data-trigger-modal="true"]').on('click', function(e) {
		e.preventDefault();
		$("#modal").fadeIn();
	});

	$('.close').on('click', function(e) {
		e.preventDefault();
		$('#modal').fadeOut();
	});

	controller = new ScrollMagic();

	// Logo Shrinking
	var tween = TweenMax.to("#logo", 0.5, { scale: 0.5 });
	var scene = new ScrollScene({triggerElement: "#nav1"})
											.setTween(tween)
											.addTo(controller);

	// Keleigh Upside Down
	var tween2 = TweenMax.fromTo("#g_1 img", 0.5,
								{ "margin-top": "0px"},
								{ "margin-top": "-200px"}
							);
	var scene2 = new ScrollScene({triggerElement: "#g_1", duration: 300})
										.setTween(tween)
										.addTo(controller);

	// Use this to debug
	// scene.addIndicators();
});

