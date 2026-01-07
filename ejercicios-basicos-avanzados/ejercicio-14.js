const words = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code'
];

function repeatCounter(list) {
    let contador = {};

    for (let i = 0; i < list.length; i++) {
        let palabra = list[i];

        if (contador[palabra]) {
            contador[palabra]++;
        } else {
            contador[palabra] = 1;
        }
    }

    return contador;
}

console.log(repeatCounter(words));

