//4.1 Añadir botón con evento click
const botonClick = document.createElement('button');
botonClick.id = 'btnToClick';
botonClick.textContent = 'Haz click aquí';

botonClick.addEventListener('click', function(evento) {
    console.log('Evento click:', evento);
    console.log('Tipo de evento:', evento.type);
    console.log('Elemento que disparó el evento:', evento.target);
});

document.body.appendChild(botonClick);
console.log('1.1 Botón con evento click añadido');

//4.2 Añadir evento focus al input con clase .focus
const inputFocus = document.querySelector('.focus');

inputFocus.addEventListener('focus', function(evento) {
    console.log('Input enfocado. Valor actual:', evento.target.value);
});

console.log('1.2 Evento focus añadido al input');

//4.3 Añadir evento input al input con clase .value
const inputValue = document.querySelector('.value');

inputValue.addEventListener('input', function(evento) {
    console.log('Valor del input cambiado a:', evento.target.value);
});

console.log('1.3 Evento input añadido ');


