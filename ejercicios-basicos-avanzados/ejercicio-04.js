const aldeanos = ["Fibrilio", "Narciso", "Vacarena", "Tendo", "Nendo"];

//1
console.log(aldeanos[3]);
//2
aldeanos.push("Cervasio");
//3
aldeanos[0] = "Bambian";
//4
aldeanos.reverse();
//5
let index = aldeanos.indexOf("Narciso");
if (index !== -1) aldeanos[index] = "Canela";
//6
console.log(aldeanos[aldeanos.length - 1]);

console.log(aldeanos);
