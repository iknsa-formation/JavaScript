
	//Nom du parent
	var noeud = document.body.childNodes.length;
	//var noeud = document.body.parentNode.length;
	//alert(noeud);

	//var noeud = document.getElementsByTagName('li').length;
	var noeud = document.getElementsByTagName('li').length;
	//alert(noeud)
/****/
var x = document.getElementById("item1").nextSibling.innerHTML;
console.log(x);
/******/
//test = document.getElementsByTagName('ul')[1];
//test = document.getElementsByTagName('ul')[0].firstChild;

//console.log(test);
/******/

/*var nouvel_element = document.createElement('li');
var Li = document.createTextNode('node4');
nouvel_element.appendChild(Li);
document.getElementsByTagName('li')[1].appendChild(nouvel_element);*/

function test(){
	alert('je suis le onclick')
	console.log('je suis le onclick')
}