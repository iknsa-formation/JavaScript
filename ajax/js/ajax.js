$(document).ready(function () {

	$('nav ul li a').click(function () {

		var lien = $(this).attr('href');
		console.log(lien);

		$.ajax({
			url:lien,
			cache:false,
			success:function(data){
				$("#home").html(data);
			},
			error:function(XMLHttpRequest, textStatus, errorThrown){
				alert("KO");
			}
		})
		return false;
	})
})