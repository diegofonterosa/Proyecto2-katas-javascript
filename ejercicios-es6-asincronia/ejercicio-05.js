const streamers = [
    {name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
    {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
    {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
    {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const input = document.querySelector('[data-function="toFilterStreamers"]');
const divResultados = document.getElementById('resultados');

input.addEventListener('input', function(eventl) {
    const textoBusqueda = eventl.target.value.toLowerCase();

    const streamersFiltrados = streamers.filter(streamer =>
        streamer.name.toLowerCase().includes(textoBusqueda)
    );

    console.log('Streamers encontrados:', streamersFiltrados);

    divResultados.innerHTML = '';

    if (streamersFiltrados.length > 0) {
        const lista = document.createElement('ul');

        streamersFiltrados.forEach(streamer => {
            const item = document.createElement('li');
            item.textContent = `${streamer.name} - ${streamer.age} años - ${streamer.gameMorePlayed}`;
            lista.appendChild(item);
        });

        divResultados.appendChild(lista);
    } else {
        divResultados.textContent = 'No se encontraron streamers.';
    }
});

