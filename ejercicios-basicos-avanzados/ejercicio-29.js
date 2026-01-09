const starWarsMovies = [
  { title: 'A New Hope', releaseYear: 1977 },
  { title: 'The Empire Strikes Back', releaseYear: 1980 },
  { title: 'Return of the Jedi', releaseYear: 1983 },
  { title: 'The Phantom Menace', releaseYear: 1999 },
  { title: 'Attack of the Clones', releaseYear: 2002 },
  { title: 'Revenge of the Sith', releaseYear: 2005 },
  { title: 'The Force Awakens', releaseYear: 2015 },
  { title: 'The Last Jedi', releaseYear: 2017 },
  { title: 'The Rise of Skywalker', releaseYear: 2019 },
  { title: 'Rogue One', releaseYear: 2016 },
  { title: 'Solo', releaseYear: 2018 }
];

let peliculasPorDecada = {};

for (let i = 0; i < starWarsMovies.length; i++) {
    const decada = Math.floor(starWarsMovies[i].releaseYear / 10) * 10;
    const decadaString = decada + 's';

    if (!peliculasPorDecada[decadaString]) {
        peliculasPorDecada[decadaString] = [];
    }

    peliculasPorDecada[decadaString].push(starWarsMovies[i]);

}

console.log(peliculasPorDecada);

