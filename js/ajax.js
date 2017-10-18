$(document).ready(function () {
	console.log("salut");

	$('nav ul li a').click(function () {
		console.log('ee')

		var lien = $(this).attr('href');
		console.log(lien);
	})
})