const names = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
];

function nameFinder(nameList, nombreBuscado) {
    for (let i = 0; i < nameList.length; i++) {
        if (nameList[i] === nombreBuscado) {
            return {encontrado: true, posicion: i};
        }
    }
    return {encontrado: false, posicion: -1};
}

console.log(nameFinder(names, 'Tony'));
console.log(nameFinder(names, 'Pedro'));

