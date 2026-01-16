//8.1
const estilos = document.createElement('style')
estilos.textContent = `
    body {
        font-family: Arial, sans-serif;
        max-width: 600px;
        margin: 50px auto;
        text-align: center;
    }

    select {
        width: 300px;
        padding: 10px;
        font-size: 16px;
        margin-bottom: 20px;
    }

    .character-image {
        max-width: 400px;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0,0,0,0.3);
    }
`;

document.head.appendChild(estilos);

const apiURL = 'https://thronesapi.com/api/v2/Characters';

const select = document.getElementById('character-list');
const imagen = document.querySelector('.character-image');

async function cargarPersonajes() {
    try {
        const response = await fetch(apiURL);
        const personajes = await response.json();

        console.log('Personajes cargados:', personajes);

        personajes.forEach(personaje => {

            const option = document.createElement('option');
            option.value = personaje.imageURL;
            option.textContent = `${personaje.firstName} ${personaje.lastName}`;
            select.appendChild(option);
        });
    }catch (error) {
        console.error('Error al cargar el personajes:', error);
    }
    
}

select.addEventListener('change', function() {
    const urlImagen = this.value;
    
    if (urlImagen) {
        imagen.src = urlImagen;
        imagen.style.display = 'block';
    } else{
        imagen.style.display = 'none';
    }
});

cargarPersonajes();

