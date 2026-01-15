//4.1
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const mayores = ages.filter(age => age >= 18);

console.log('Mayore de 18 años:', mayores);

//4.2

const pares = ages.filter(age => age % 2 === 0);

console.log('Números pares:', pares);

//4.3

const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const lolStreamers = streamers.filter(streamer => streamer.gameMorePlayed === 'League of Legends');

console.log('Streamers de League of Legends:', lolStreamers);

//4.4

const streamersConU = streamers.filter(streamer => streamer.name.toLowerCase().includes('u'));

console.log('Streamers con la letra "u" en su nombre:', streamersConU);

//4.5

const resultado = streamers
    .filter(streamer => streamer.gameMorePlayed.toLowerCase().includes('Legends'.toLowerCase()))
    .map(streamer => {
        if (streamer.age > 35) {
            return {
                ...streamer,
                gameMorePlayed: streamer.gameMorePlayed.toUpperCase()
            };
        }
        return streamer;
    });

console.log('Streamers con "Legends":', resultado);

    