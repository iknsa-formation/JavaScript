/* on click */
document.getElementById('div1').onclick =function () {
	alert("Je suis le onclik");
	document.getElementById('div1').innerHTML = "Merci ";
}

/* on double click */
document.getElementById('div2').ondblclick  =function () {
	
	document.getElementById('div2').innerHTML = "Merci ";
}

/* on mouse */
document.getElementById('div3').onmouseover  =function () {
	
	document.getElementById('div3').innerHTML = "Merci ";
}

/* on mouseout */
document.getElementById('div4').onmouseout  =function () {
	
	document.getElementById('div4').innerHTML = "Merci ";
}

/* on mouseout */
//document.getElementById('div4').onmousedown  =function () {
document.getElementById('div4').onmouseout  =function () {
	
	document.getElementById('div4').innerHTML = "Merci ";
}

/* on mousedown */
document.getElementById('div5').onmousedown  =function () {
	
	document.getElementById('div5').innerHTML = "Merci ";
}

/* on keydown */
document.getElementById('form3').onkeydown  =function () {
	
	console.log('cam')
}

/* on keyup */
document.getElementById('form4').onkeyup  =function () {
	
	console.log('moussa')
}

/* on focus */
document.getElementById('form2').onfocus  =function () {
	
	document.getElementById('form2').style.background = "yellow";;
	console.log('moussa')
}

/* on focus */
document.getElementById('form1').onblur  =function () {
	
	document.getElementById('form1').style.background = "yellow";;
	//console.log('moussa')
}