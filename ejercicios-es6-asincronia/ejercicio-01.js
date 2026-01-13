//1.1
const game = {title: 'The Last of Us 2', gender: ['action', 'zombie', 'survival'], year: 2020}

const {title, gender, year} = game;

console.log('Título:', title);
console.log('Géneros:', gender);
console.log('Año:', year);

//1.2
const fruits = ['Banana', 'Strawberry', 'Orange'];

const [fruit1, fruit2, fruit3] = fruits;

console.log('Fruta 1:', fruit1);
console.log('Fruta 2:', fruit2);
console.log('Fruta 3:', fruit3);

//1.3
const animalFunction = () => {
    return {name: 'Bengal Tiger', race: 'Tiger'} 
};

const {name, race} = animalFunction();

console.log('Nombre:', name);
console.log('Raza:', race);


//1.4
const car = {name: 'Mazda 6', itv: [2015, 2011, 2020] };

const {name: carName, itv} = car;

console.log('Nombre del coche:', carName);
console.log('Años de ITV:', itv);

const [year1, year2, year3] = itv;

console.log('Año ITV 1:', year1);
console.log('Año ITV 2:', year2);
console.log('Año ITV 3:', year3);


