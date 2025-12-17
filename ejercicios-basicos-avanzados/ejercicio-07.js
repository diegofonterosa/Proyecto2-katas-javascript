
function greaterNumber(numberOne, numberTwo) {
    if (numberOne > numberTwo) {
        console.log(numberOne);
    } else if (numberTwo > numberOne) {
        console.log(numberTwo);
    } else {
        console.log("Los números son iguales");
    }
}

greaterNumber(5, 10);