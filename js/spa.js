var links = document.querySelectorAll('.liste li a');

for (var i = 0; i < links.length; i++) {
	
	//console.log(links[i]);

	links[i].addEventListener('click', function (e) {
		//e.preventDefault();

		console.log(document.querySelector('.liste li a').classList);

		document.querySelector('.liste li a').classList.add('test');
	});
}

