const movies = [
  { name: "Titan A.E.", durationInMinutes: 130 },
  { name: "Nightmare before Christmas", durationInMinutes: 225 },
  { name: "Inception", durationInMinutes: 165 },
  { name: "The Lord of the Rings", durationInMinutes: 967 },
  { name: "Star Wars: A New Hope", durationInMinutes: 214 },
  { name: "Terminator", durationInMinutes: 140 },
  { name: "Spirited Away", durationInMinutes: 80 },
  { name: "The Matrix", durationInMinutes: 136 },
  { name: "Amélie", durationInMinutes: 110 },
  { name: "Eternal Sunshine of the Spotless Mind", durationInMinutes: 108 },
];

const peliculasPequenas = [];
const peliculasMedianas = [];
const peliculasGrandes = [];

for (let i = 0; i < movies.length; i++) {
    const duracion = movies[i].durationInMinutes;

    if (duracion < 100) {
        peliculasPequenas.push(movies[i]);
    } else if (duracion >= 100 && duracion <= 200) {
        peliculasMedianas.push(movies[i]);
    } else {
        peliculasGrandes.push(movies[i]);
    }
}

console.log("Películas pequeñas:", peliculasPequenas);
console.log("Películas medianas:", peliculasMedianas);
console.log("Películas grandes:", peliculasGrandes);

