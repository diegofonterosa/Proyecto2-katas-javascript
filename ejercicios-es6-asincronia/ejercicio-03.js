//3.1
const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

const nombres = users.map(user => user.name);

console.log('Nombres de los usuarios:', nombres);

//3.2

const nombresModificados = users.map(user => {
    if (user.name.startsWith('A')) {
        return 'Anacleto';
    } else {
        return user.name;
    }
});

console.log('Nombres modificados:', nombresModificados);

//3.3

const cities = [
	{isVisited:true, name: 'Tokyo'},
	{isVisited:false, name: 'Madagascar'},
	{isVisited:true, name: 'Amsterdam'},
	{isVisited:false, name: 'Seul'}
];

const ciudadesConMarca = cities.map(city => {
    if (city.isVisited) {
        return city.name + ' (Visitado)';
    } else {
        return city.name;
    }
}); 

console.log('Ciudades con marca:', ciudadesConMarca);


