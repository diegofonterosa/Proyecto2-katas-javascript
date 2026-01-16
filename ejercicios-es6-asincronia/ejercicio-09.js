const estilos = document.createElement('style');
estilos.textContent = `
    body {
        font-family: Arial, sans-serif;
        text-align: center;
        padding: 50px;
        background-color: #f0f0f0;
        margin: 0;
    }

    h1 {
        color: #ffcb05;
        text-shadow: 2px 2px 4px #3d7dca;
    }

    .pokemon-container {
        background-color: white;
        border-radius: 20px;
        padding: 30px;
        max-width: 400px;
        margin: 0 auto;
        box-shadow: 0 8px 16px rgba(0,0,0,0.2);
    }

    .random-image {
        width: 300px;
        height: 300px;
    }

    .pokemon-name {
        font-size: 24px;
        font-weight: bold;
        margin-top: 20px;
        text-transform: capitalize;
    }

    button {
        background-color: #ffcb05;
        color: #3d7dca;
        border: none;
        padding: 15px 30px;
        font-size: 18px;
        font-weight: bold;
        border-radius: 10px;
        cursor: pointer;
        margin-top: 20px;
    }

    button:hover {
        background-color: #3d7dca;
        color: #ffcb05;
    }
`;

document.head.appendChild(estilos);

const imagen = document.querySelector('.random-image');
const nombreDiv = document.querySelector('.pokemon-name');
const boton = document.getElementById('btn-nuevo-pokemon');

function generarNumeroAleatorio() {
    return Math.floor(Math.random() * 151) + 1;
}

async function cargarPokemonAleatorio() {
    try {
        const idAleatorio = generarNumeroAleatorio();

        const url = `https://pokeapi.co/api/v2/pokemon/${idAleatorio}`;

        console.log('Cargando pokemon:', idAleatorio);

        const response = await fetch(url);
        const pokemon = await response.json();

        console.log('Pokemon cargado:', pokemon);

        imagen.src = pokemon.sprites.other['official-artwork'].front_default;

        nombreDiv.textContent = pokemon.name;
    } catch (error) {
        console.error('Error al cargar Pokemon:', error);
        nombreDiv.textContent = 'Error al cargar Pokemon';
    }
    
}

boton.addEventListener('click', cargarPokemonAleatorio);

cargarPokemonAleatorio();