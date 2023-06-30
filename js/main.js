// Convertimos los pokemon en objetos, en inglés para no mezclar por ejemplo el nombre del pokemon con el nombre del usuario.
const pokemonData = [
  { number: 1, name: 'Bulbasaur', level: 5, type: 'planta y veneno' },
  { number: 2, name: 'Ivysaur', level: 16, type: 'planta y veneno' },
  { number: 3, name: 'Venusaur', level: 32, type: 'planta y veneno' },
  { number: 4, name: 'Charmander', level: 5, type: 'fuego' },
  { number: 5, name: 'Charmeleon', level: 16, type: 'fuego' },
  { number: 6, name: 'Charizard', level: 36, type: 'fuego y volador' },
  { number: 7, name: 'Squirtle', level: 5, type: 'agua' },
  { number: 8, name: 'Wartortle', level: 16, type: 'agua' },
  { number: 9, name: 'Blastoise', level: 36, type: 'agua' }
];

function getPokemonName(pokemonNumber) {
  return pokemonData[pokemonNumber - 1].name;
}

function getSelectedPokemon(pokemonNumber) {
  return pokemonData.find(pokemon => pokemon.number === pokemonNumber);
}

function saludarEntrenador(gender, name, townFood, pokemonNumber) {
  const pronoun = gender === 'chico' ? 'entrenador' : gender === 'chica' ? 'entrenadora' : '';
  const greeting = 'Te damos la bienvenida';

  const pokemonName = getPokemonName(pokemonNumber);
  const selectedPokemon = getSelectedPokemon(pokemonNumber);

  if (pronoun) {
    alert(`¡Hola, ${pronoun} ${name} de pueblo ${townFood}! Has elegido a ${pokemonName} (Nivel ${selectedPokemon.level}) de tipo ${selectedPokemon.type}. ¡Mucha suerte en tu aventura!`);
  } else {
    alert(`${greeting}, ${name} de pueblo ${townFood}! Has elegido a ${pokemonName} (Nivel ${selectedPokemon.level}) de tipo ${selectedPokemon.type}. ¡Mucha suerte en tu aventura!`);
  }
}

let boyorgirl = prompt('¿Eres un chico, una chica o prefieres no utilizar un pronombre?').toLowerCase();
let nombre = prompt('¿Cuál es tu nombre?');
let comida = prompt('¿Cuál es tu comida favorita?');

let promptpokemon = 0;
while (promptpokemon < 1 || promptpokemon > 9) {
  userInput = prompt('Elige tu pokemon utilizando su número, del 1 al 9');

  if (isNaN(userInput)) {
    alert('¡Ingresa un valor numérico!');
  } else {
    promptpokemon = parseInt(userInput);
  }

  if (promptpokemon < 1 || promptpokemon > 9) {
    alert('¡Del 1 al 9 te dije!');
  }
}

let nropokemon = parseInt(promptpokemon);

saludarEntrenador(boyorgirl, nombre, comida, nropokemon);
