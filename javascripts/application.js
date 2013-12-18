$(document).ready(function() {
	$('#menu-toggle').on('click', function() {
		$('nav ul').toggleClass('opened');
	});

	$('header nav').waypoint('sticky');
});