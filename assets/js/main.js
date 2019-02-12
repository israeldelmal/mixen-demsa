// Navegación
$('.item-menu').on('click', function(event) {
	event.preventDefault();
	let Item = $(this).attr('href');

	if ($(window).width() > 1370) {
		$('body, html').stop(true, true).animate({
			scrollTop: $(Item).offset().top - 80
		}, 1000);
	} else if ($(window).width() < 440) {
		$('body > nav').removeClass('nav-active');
		$('body > button').removeClass('button-active');
		$('body, html').stop(true, true).animate({
			scrollTop: $(Item).offset().top - 60
		}, 1000);
	} else if ($(window).width() < 1370) {
		$('body > nav').removeClass('nav-active');
		$('body > button').removeClass('button-active');
		$('body, html').stop(true, true).animate({
			scrollTop: $(Item).offset().top
		}, 1000);
	}
});

// Botón de navegación
$('#nav').on('click', function(event) {
	event.preventDefault();
	$(this).toggleClass('button-active');
	$('body > nav').toggleClass('nav-active');
});

// $(function() {
// 	$(window).scroll(function(event) {
// 		$('body, html').stop(true, true).animate({
// 			scrollTop: $('#nosotros').offset().top
// 		}, 1000);
// 	});
// });