const fruits = ["Strawberry", "Banana", "Orange", "Apple"];

const foodSchedule = [
    { name: "Heura", isVegan: true },
    { name: "Salmon", isVegan: false },
    { name: "Tofu", isVegan: true },
    { name: "Burguer", isVegan: false },
    { name: "Rice", isVegan: true },
    { name: "Pasta", isVegan: true }
];

let indiceFruta = 0;

for (let i = 0; i < foodSchedule.length; i++) {
    if (!foodSchedule[i].isVegan) {
        foodSchedule[i].name = fruits[indiceFruta];
        foodSchedule[i].isVegan = true;
        indiceFruta++;
    }
}

console.log(foodSchedule);

