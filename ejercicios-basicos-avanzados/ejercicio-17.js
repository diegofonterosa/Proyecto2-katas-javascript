const alien = {
    name: 'Xenomorph',
    species: 'Xenomorph XX121',
    origin: 'unknown',
    weight: 180
};

for (const propiedad in alien) {
    console.log(`La propiedad ${propiedad} tiene el valor: ${alien[propiedad]}`);
}


