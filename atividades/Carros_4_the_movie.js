console.clear();
const carros = ["Fusca ", "Civic ", "Corolla ", "Mustang ", "Onix"];

console.log(`\nOlá cliente!!, nós temos esses carros:\n`); // Insere uma nova linha na tela

// Coloquei um `foreach()` aqui | @Kacaii
carros.forEach((carro, index) => {
  console.log(`${index}: ${carro}`); // Exibe a lista de carros na tela
});

const desejaComprar = prompt(
  "\nVocê deseja comprar algum objeto da lista?\n (Sim ou Não) \n\n>",
).toLocaleLowerCase();

// HACK: Talvez tenha um jeito melhor de escrever essa funcionalidade (?).
if (desejaComprar === "sim") {
  // WARN: Falta escrever o codigo dessa função
  const escolhaCarro = parseInt(
    prompt("qual o numero do carro que você quer alterar?"),
  );
  // WARN: Falta escrever o codigo dessa função
  const removerCarro = parseInt(
    prompt("qual o numero do carro você deseja remover?"),
  );

  const novoCarro = prompt("novo carro");

  // WARN: Variável não usada
  const atualizandoCarro = carros.splice(escolhaObj, removerObj, novoCarro);

  const numeroCarros = carros.length;

  console.log(
    `São ao todo ${numeroCarros} carros!, sendo que ${novoCarro} foi adicionado recentimente ao estoque S2`,
  );
} else {
  const novoCarro = prompt("novo carro");

  // WARN: Variável não usada
  const atualizandoCarro = carros.splice(escolhaObj, 0, novoCarro);

  const numeroDeCarros = carros.length;

  console.log(
    `São ao todo ${numeroDeCarros} carros!, sendo que ${novoCarro} foi adicionado recentimente ao estoque S2`,
  );
}
