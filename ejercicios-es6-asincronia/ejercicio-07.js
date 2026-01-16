//7.1
const videogames = [
    {name: 'Final Fantasy VII', genders: ['RPG'], score: 9.5},
    {name: 'Assasins Creed Valhalla', genders: ['Aventura', 'RPG'], score: 4.5},
    {name: 'The Last of Us 2', genders: ['Acción', 'Aventura'], score: 9.8},
    {name: 'Super Mario Bros', genders: ['Plataforma'], score: 8.5},
    {name: 'Genshin Impact', genders: ['RPG', 'Aventura'], score: 7.5},
    {name: 'Legend of Zelda: Breath of the wild', genders: ['RPG'], score: 10},
]

const juegosRPG = videogames.filter(game => game.genders.includes('RPG'));

console.log('Juegos RPG:', juegosRPG);

const sumaScores = juegosRPG.reduce((acumulador, game) => {
    return acumulador + game.score;
}, 0);

const mediaRPG = sumaScores / juegosRPG.length;

console.log('Media de puntuación de juegos RPG:', mediaRPG);

