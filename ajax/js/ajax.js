$(document).ready(function () {

	$('nav ul li a').click(function () {

		var lien = $(this).attr('href');

		$.ajax({
			url:lien,
			cache:false,
			success:function(data){
				$("#ajax").append(data)
			},
			error:function(XMLHttpRequest, textStatus, errorThrown){
				alert("KO");
			}
		})
		return false;
	})
})