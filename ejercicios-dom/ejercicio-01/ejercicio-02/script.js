//2.1 Insertar un div vacio
const divVacio = document.createElement("div");
document.body.appendChild(divVacio);
console.log('2.1 Div vacío insertado');

//2.2 Insertar un div que contenga una p
const divConP = document.createElement("div");
const parrafo = document.createElement("p");
parrafo.textContent = "Soy un párrafo dentro de un div.";
divConP.appendChild(parrafo);
document.body.appendChild(divConP);
console.log('2.2 Div con párrafo insertado');

//2.3 Insertar un div con 6 párrafos utilizando un bucle
const divCon6P = document.createElement("div");
for (let i = 1; i <= 6; i++) {
    const p = document.createElement("p");
    p.textContent = `Párrafo número ${i}`;
    divCon6P.appendChild(p);
}
document.body.appendChild(divCon6P);
console.log('2.3 Div con 6 párrafos insertado');

//2.4 Insertar un p con el texto "Soy dinámico!"
const pDinamico = document.createElement("p");
pDinamico.textContent = "Soy dinámico!";
document.body.appendChild(pDinamico);
console.log('2.4 P dinámico insertado');

//2.5 Insertar texto en el h2 con clase .fn-insert-here
const h2 = document.querySelector(".fn-insert-here");
h2.textContent = "Wubba Lubba dub dub";
console.log('2.5 Texto insertado en h2');

//2.6 Crear lista ul > li con array de apps
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const listaApps = document.createElement("ul");

for (let i = 0; i < apps.length; i++) {
    const item = document.createElement("li");
    item.textContent = apps[i];
    listaApps.appendChild(item);
}

document.body.appendChild(listaApps);
console.log('2.6 Lista de apps creada');

//2.7 Eliminar todos los elementos con clase .fn-remove-me
const elementosAEliminar = document.querySelectorAll(".fn-remove-me");

for (let i = 0; i < elementosAEliminar.length; i++) {
    elementosAEliminar[i].remove();
}

console.log('2.7 Elementos eliminados');

//2.8 Insertar p entre dos divs
const primerDiv = document.querySelector("div");
const pEnMedio = document.createElement("p");
pEnMedio.textContent = "Voy en medio!";

primerDiv.parentNode.insertBefore(pEnMedio, primerDiv.nextSibling);
console.log('2.8 P insertado entre dos divs');

//2.9 Insertar p dentro de todos los divs con clase .fn-insert-here
const divsInsertHere = document.querySelectorAll("div.fn-insert-here");

for (let i = 0; i < divsInsertHere.length; i++) {
    const pDentro = document.createElement("p");
    pDentro.textContent = "Soy un párrafo dentro del div.";
    divsInsertHere[i].appendChild(pDentro);
}

console.log('2.9 Párrafos insertados dentro de divs');

