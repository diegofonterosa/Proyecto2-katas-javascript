const mutants = [
  { name: 'Wolverine', power: 'regeneration' },
  { name: 'Magneto', power: 'magnetism' },
  { name: 'Professor X', power: 'telepathy' },
  { name: 'Jean Grey', power: 'telekinesis' },
  { name: 'Rogue', power: 'power absorption' },
  { name: 'Storm', power: 'weather manipulation' },
  { name: 'Mystique', power: 'shape-shifting' },
  { name: 'Beast', power: 'superhuman strength' },
  { name: 'Colossus', power: 'steel skin' },
  { name: 'Nightcrawler', power: 'teleportation' }
];


function findMutantByPower(mutants, Power) {
    let mutantesEncontrados = [];

    for (let i = 0; i < mutants.length; i++) {
        if (mutants[i].power === Power) {
            mutantesEncontrados.push(mutants[i].name);
        }
    }

    if (mutantesEncontrados.length > 0) {
        return `Mutane(s) encontrado(s) con el poder ${Power}: ${mutantesEncontrados.join(', ')}`;
    } else {
        return `No se encontraron mutantes con el poder ${Power}.`;
    }
}

console.log(findMutantByPower(mutants, 'telepathy'));
console.log(findMutantByPower(mutants, 'invisibility'));
