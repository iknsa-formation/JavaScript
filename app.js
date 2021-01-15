// Information sur le navigateur utilisé
//alert(window.navigator.language)

// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array

var ma_variable = "Salut tout le monde";
// Transforme la chaine en Majuscule
console.log(ma_variable.toUpperCase());

// Transforme la chaine en Miniscule
console.log(ma_variable.toLowerCase());

// Transforme la premiére lettre de la chaine en Majuscule
console.log(ma_variable[0].toUpperCase() + ma_variable.slice(1));

// Transforme la chaine en Miniscule
console.log(ma_variable.link());

fruits = ["Orange", "Fraise", "Pomme", "Framboise", "Banane"];

console.log(fruits)

fruits.pop();

console.log(fruits);

fruits.shift();
console.log(fruits);


console.log(fruits.unshift('Raisin'));
console.log(fruits);

/* DATE */
var date = new Date();
document.write(date);
console.log(new Intl.DateTimeFormat('fr-FR').format(date));