/** @typedef {string | null} respostaPrompt */

console.clear();

/** @type {string[]} */
const carros = ["Fusca ", "Civic ", "Corolla ", "Mustang ", "Onix"];

console.log(`\nOlá cliente!!, nós temos esses carros:\n`); // Insere uma nova linha na tela

carros.forEach((carro, index) => {
  console.log(`${index}: ${carro}`); // Exibe a lista de carros na tela
});

/** @type { boolean } */
const desejaComprar = confirm(
  "\nVocê deseja comprar algum objeto da lista? \n\n>",
);

if (desejaComprar) {
  /**
   * Número do carro que o usuario quer alterar.
   * @type {respostaPrompt} */
  const escolhaCarro = prompt("qual o numero do carro que você quer alterar?");

  /**
   * Número do carro que o usuario quer remover.
   * @type {respostaPrompt} */
  const removerCarro = prompt("qual o numero do carro você deseja remover?");

  /**
   * Nome do carro a ser adicionado
   * @type {respostaPrompt} */
  const novoCarro = prompt("novo carro");

  // WARN: Variável não usada
  const atualizandoCarro = carros.splice(escolhaObj, removerObj, novoCarro);

  /**
   * Número de carros na lista
   * @type {number} */
  const numeroCarros = carros.length;

  console.log(
    `São ao todo ${numeroCarros} carros!, sendo que ${novoCarro} foi adicionado recentimente ao estoque S2`,
  );
} else {
  /**
   * Nome do carro a ser adicionado
   * @type {respostaPrompt} */
  const novoCarro = prompt("novo carro");

  // WARN: Variável não usada
  const atualizandoCarro = carros.splice(escolhaObj, 0, novoCarro);

  /**
   * Número de carros na lista
   * @type {number} */
  const numeroDeCarros = carros.length;

  console.log(
    `São ao todo ${numeroDeCarros} carros!, sendo que ${novoCarro} foi adicionado recentimente ao estoque S2`,
  );
}

/* pedro não é mutio legal */
