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
	var scene = new ScrollScene({
                    triggerElement: "#nav1",
                    triggerHook: 0
                  })
									.setTween(tween)
									.addTo(controller);

	// Keleigh Upside Down
	var tween2 = TweenMax.fromTo("#g_1 img", 1,
								{ "margin-top": "0px"},
								{ "margin-top": "-400px"}
							);
	var scene2 = new ScrollScene({
                      triggerElement: "#g_1",
                      triggerHook: 0,
                      duration: 300
                    })
										.setTween(tween2)
										.addTo(controller);

	// Use this to debug
	// scene.addIndicators();

	var map_styles = [{"featureType":"landscape","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"stylers":[{"hue":"#00aaff"},{"saturation":-100},{"gamma":2.15},{"lightness":12}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"visibility":"on"},{"lightness":24}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":57}]}]
	var myOptions = {
// panControl: boolean,
	  	zoomControl: false,
   		scaleControl: false,
//   streetViewControl: boolean,
//   overviewMapControl: boolean

			scrollwheel: false,
	    navigationControl: false,
	    mapTypeControl: false,
	    scaleControl: false,
	    draggable: false,
	    zoom: 15,
	    center: new google.maps.LatLng(30.365484, -95.776060),
	    mapTypeId: google.maps.MapTypeId.ROADMAP,
	    styles: map_styles
	};

	var map = new google.maps.Map(document.getElementById('map'), myOptions);

  var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Olde Dobbin Station</h1>'+
			'<h2><a href="http://www.oldedobbinstation.com/">oldedobbinstation.com</a><h2>'+
      '<div id="bodyContent">'+
      '<p>2849 Old Dobbin Rd,</p>' +
			'<p>Montgomery, TX 77316</p>' +
			'<p>(832) 752-0210</p>' +
			'<p><a href="https://www.google.com/maps/place/Olde+Dobbin+Station/@30.365207,-95.768832,15z/data=!4m2!3m1!1s0x0:0x69c573f44398bb5d">Open In Google Maps</a></p>' +

      '</div>'+
      '</div>';

  var infowindow = new google.maps.InfoWindow({
      content: contentString
  });

	var marker = new google.maps.Marker({
      position: new google.maps.LatLng(30.365484, -95.776060),
      map: map,
      title: 'Olde Dobbin Station'
  });
	google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
  });
});

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
