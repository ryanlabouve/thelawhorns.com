/* global $ */
$(function() {
	$('[data-trigger-modal="true"]').on('click', function(e) {
		e.preventDefault();
		$("#modal").fadeIn();
	});

	$('.close').on('click', function(e) {
		e.preventDefault();
		$('#modal').fadeOut();
	});
});