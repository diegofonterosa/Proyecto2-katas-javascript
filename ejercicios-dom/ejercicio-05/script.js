const albums = [
    "De Mysteriis Dom Sathanas",
    "Reign in Blood",
    "Ride the Lightning",
    "Painkiller",
    "Iron Fist",
];

const estilos = document.createElement("style");
estilos.textContent = `
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
}
    body {
        font-family: Arial, sans-serif;
        background-color: #1a1a1a;
        color: #fff;
        padding: 20px;
}
        .container {
        max-width: 800px;
        margin: 0 auto;
}
        h1 {
        text-align: center;
        color: #ff0000;
        margin-bottom: 30px;
        text-transform: uppercase;
        letter-spacing: 2px;
}
        ul {
        list-style-type: none;
}
        li {
        background-color: #2a2a2a;
        margin-bottom: 15px;
        padding: 20px;
        border-left: 5px solid #ff0000;
        transition: all 0.3s ease;
        cursor: pointer;
}
        li:hover {
        background-color: #3a3a3a;
        transform: translateX(10px);
        box-shadow: 0 5px 15px rgba(255, 0, 0, 0.3);
}
`;

document.head.appendChild(estilos);

const contenerdor = document.getElementById('albums-container');

const listaAlbums = document.createElement('ul');

for (let i = 0; i < albums.length; i++) {
    const itemAlbum = document.createElement('li');
    itemAlbum.textContent = albums[i];

    itemAlbum.addEventListener('click', function() {
        alert(`Has seleccionado el álbum: ${albums[i]}`);
        console.log(`Álbum seleccionado: ${albums[i]}`);
    });

    listaAlbums.appendChild(itemAlbum);
}

contenerdor.appendChild(listaAlbums);
