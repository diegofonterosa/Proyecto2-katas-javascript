// 1.1 Seleccionar el botón con la clase .showme
const botonShowme = document.querySelector('.showme');
console.log('1.1 Botón:', botonShowme);

//1.2 Seleccionar el h1 con el id #pillado
const h1Pillado = document.querySelector('#pillado');
console.log('1.2 H1:', h1Pillado);

//1.3 Seleccionar todos los elementos p
const todosLosP = document.querySelectorAll('p');
console.log('1.3 Párrafos:', todosLosP);

//1.4 Seleccionar todos los elementos con clase .pokemon
const pokemones = document.querySelectorAll('.pokemon');
console.log('1.4 Pokemones:', pokemones);

//1.5 Seleccionar todos los elementos con data-function="testMe"
const elementosTestMe = document.querySelectorAll('[data-function="testMe"]');
console.log('1.5 Elementos con data-function="testMe":', elementosTestMe);

//1.6 Seleccionar el 3er personaje con data-function="testMe"
const tercerPersonaje = document.querySelectorAll('[data-function="testMe"]')[2];
console.log('1.6 Tercer personaje con data-function="testMe":', tercerPersonaje);
