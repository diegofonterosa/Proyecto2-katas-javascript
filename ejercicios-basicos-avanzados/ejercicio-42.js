const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa",
];

function swap(array, index1, index2) {

    if (index1 >= 0 && index1 < array.length && index2 >= 0 && index2 < array.length) {
        let temp = array[index1];
        array[index1] = array[index2];
        array[index2] = temp;
    }

    return array;
}

console.log("Array original:", fantasticFour);
console.log("Intecambiando índices 0 y 1:", swap(fantasticFour, 0, 1));

