const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potato',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
];

function removeDuplicates(list) {
    let arrayUnico = [];

    for (let i = 0; i < list.length; i++) {
        if (!arrayUnico.includes(list[i])) {
            arrayUnico.push(list[i]);
        }
    }
    return arrayUnico;
}

console.log(removeDuplicates(duplicates));
