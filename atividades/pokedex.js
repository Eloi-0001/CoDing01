const objCharmander = {
  name: "Charmander - Nº 0004",
  type: "Fogo",
  descrição:
    "A chama que arde na ponta da cauda é uma indicação das suas emoções. A chama vacila quando Charmander está desfrutando de si mesmo. Se o Pokémon fica furioso, a chama queima ferozmente.",
  hability: "Habilidade: Blaze",
  hiddenHability: "Hiden Hability: Solar Power",
  states: {
    ps: 39,
    atk: 52,
    def: 43,
    atk_esp: 60,
    def_esp: 50,
    vel: 65,
  },
};

const objBulbasaur = {
  name: "Bulbasaur - Nº 0001",
  type: "Planta e Venenoso",
  descrição:
    "Bulbassauro pode ser visto cochilando sob luz solar intensa. Há uma semente na sua parte traseira. Por absorvendo os raios do sol, a semente cresce progressivamente maior.",
  hability: "Habilidade: Overgrow",
  hiddenHability: "Hiden Hability: Chlorophyll",
  states: {
    ps: 45,
    atk: 49,
    def: 49,
    atk_esp: 65,
    def_esp: 65,
    vel: 45,
  },
};

const objSquirtle = {
  name: "Squirtle - Nº 0007",
  type: "Água",
  descrição:
    "O casco de Squirtle não é apenas usado para a proteção. A forma arredondada do casco e as ranhuras em sua superfície ajudam a minimizar a resistência na água, permitindo que este Pokémon nade em altas velocidades.",
  hability: "Habilidade: Torrent",
  hiddenHability: "Hiden Hability: Rain Dish",
  states: {
    ps: 44,
    atk: 48,
    def: 65,
    atk_esp: 50,
    def_esp: 64,
    vel: 43,
  },
};

const listaPokemons = [objSquirtle, objBulbasaur, objCharmander];

console.clear(); // Eu gosto de limpar o console antes
console.log("\n"); // Adicionando uma linha vazia

listaPokemons.forEach((pokemon) => {
  // Lista o nome de todos os pokemons disponiveis
  console.log(pokemon.name);
});

const pokemonInicial = prompt(
  "\nQue Pokemon inicial de Kanto você escolhe? \n\n>",
).toLowerCase();

switch (
  pokemonInicial // A gente podia usar um Switch
) {
  case "charmander":
    console.log(objCharmander);
    break;
  case "bulbasaur":
    console.log(objBulbasaur);
    break;
  case "squirtle":
    console.log(objSquirtle);
    break;
  default:
    console.log("EIIII!!!, isso ai não é um inicial não meu campeão!");
}
