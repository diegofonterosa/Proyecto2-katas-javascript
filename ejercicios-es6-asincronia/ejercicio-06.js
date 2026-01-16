//6.1
const exams = [
    {name: 'Yuyu Cabeza Crack', score: 5},
    {name: 'Maria Aranda Jimenez', score: 1},
    {name: 'Cristóbal Martínez Lorenzo', score: 6},
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
];

const sumaTotal = exams.reduce((acumulador, examen) => {
    return acumulador + examen.score;
}, 0);

console.log('Suma total de notas: ', sumaTotal);

//6.2

const sumaAprobados = exams.reduce((acumulador, examen) => {
    if (examen.score >= 5) {
        return acumulador + examen.score;
    }
    return acumulador;
}, 0);

console.log('Suma de notas aprobadas: ', sumaAprobados);

//6.3 

const media = sumaTotal / exams.length;

console.log('Media de notas:', media);


