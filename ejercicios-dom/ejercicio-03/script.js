//3.1 Crear lista de paises
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const listaPaises = document.createElement('ul');

for (let i = 0; i < countries.length; i++) {
    const itemPais = document.createElement('li');
    itemPais.textContent = countries[i];
    listaPaises.appendChild(itemPais);
}

document.body.appendChild(listaPaises);
console.log("1.1 Lista de países creada");

//3.2 Eliminar elemento con clase .fn-remove-me
const elementoAEliminar = document.querySelector('.fn-remove-me');
elementoAEliminar.remove();
console.log("1.2 Elemento eliminado");

//3.3 Crear lista de coches dentro del div con data-function="printHere"
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const divPrintHere = document.querySelector('[data-function="printHere"]');

const listaCoches = document.createElement('ul');

for (let i = 0; i < cars.length; i++) {
    const itemCoche = document.createElement('li');
    itemCoche.textContent = cars[i];
    listaCoches.appendChild(itemCoche);
}

divPrintHere.appendChild(listaCoches);
console.log("1.3 Lista de coches creada");

//3.4 Crear divs con h4 e imagenes
const countriesData = [
    {title: 'Random title 1', imgUrl: 'https://picsum.photos/300/200?random=1'},
    {title: 'Random title 2', imgUrl: 'https://picsum.photos/300/200?random=2'},
    {title: 'Random title 3', imgUrl: 'https://picsum.photos/300/200?random=3'},
    {title: 'Random title 4', imgUrl: 'https://picsum.photos/300/200?random=4'},
    {title: 'Random title 5', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

const contenedorTarjetas = document.createElement('div');
contenedorTarjetas.id = 'contenedor-tarjetas';

for (let i = 0; i < countriesData.length; i++) {
    const tarjeta = document.createElement('div');
    tarjeta.className = 'tarjeta';

    const titulo = document.createElement('h4');
    titulo.textContent = countriesData[i].title;

    const imagen = document.createElement('img');
    imagen.src = countriesData[i].imgUrl;
    imagen.alt = countriesData[i].title;

    tarjeta.appendChild(titulo);
    tarjeta.appendChild(imagen);
    contenedorTarjetas.appendChild(tarjeta);
}

document.body.appendChild(contenedorTarjetas);
console.log("1.4 Tarjetas creadas");

//3.5 Crear un botón para eleminar el último elemento
const botonEliminarUltimo = document.createElement('button');
botonEliminarUltimo.textContent = 'Eliminar último elemento';
botonEliminarUltimo.addEventListener('click', function()  {
    const tarjetas = document.querySelectorAll('.tarjeta');
    if (tarjetas.length > 0) {
        tarjetas[tarjetas.length - 1].remove();
        console.log("Última elemento eliminado ");
    }
});

document.body.appendChild(botonEliminarUltimo);
console.log("1.5 Botón para eliminar el último elemento creado");

//3.6 Crear un botón para cada tarjeta que la elimine
const todasLasTarjetas = document.querySelectorAll('.tarjeta');

for (let i = 0; i < todasLasTarjetas.length; i++) {
    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'Eliminar esta tarjeta';

    botonEliminar.addEventListener('click', function() {
        todasLasTarjetas[i].remove();
        console.log(`Tarjeta ${i + 1} eliminada`);
    });

    todasLasTarjetas[i].appendChild(botonEliminar);
}

console.log("1.6 Botones para eliminar cada tarjeta creada");

