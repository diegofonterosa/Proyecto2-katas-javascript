//2.1
const pointsList = [32, 54, 21, 64, 75, 43]

const pointsListCopy = [...pointsList];

console.log('Array original:', pointsList);
console.log('Copia del array:', pointsListCopy);

pointsListCopy.push(100);

console.log('Array original después de modificar la copia:', pointsList);
console.log('Copia del array después de la modificación:', pointsListCopy);

//2.2
const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};

const toyCopy = {...toy};

console.log('Objeto original:', toy);
console.log('Copia del objeto:', toyCopy);

console.log(toy === toyCopy);

//2.3
const pointsList2 = [32, 54, 21, 64, 75, 43];
const pointsList3 = [54,87,99,65,32];

const allPoints = [...pointsList2, ...pointsList3];

console.log('Array combinado:', allPoints);

//2.4
const toy1 = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toy1Update = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']}

const toy1Updated = {...toy1, ...toy1Update};

console.log('Juguete completo:', toy1Updated);

//2.5
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];

const newColors = [...colors.slice(0, 2), ...colors.slice(3)];

console.log('Array de colores original:', colors);
console.log('Array sin posición 2:', newColors);

const newColors2 = colors.filter((color, index) => index !== 2);
console.log('Array sin posición 2 (método 2):', newColors2);

