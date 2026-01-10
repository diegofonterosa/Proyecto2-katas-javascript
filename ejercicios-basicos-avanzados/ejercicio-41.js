function rollDice(numeroCaras) {
    return Math.floor(Math.random() * numeroCaras) + 1;
}

console.log(rollDice(6));
console.log(rollDice(10));
console.log(rollDice(20));

