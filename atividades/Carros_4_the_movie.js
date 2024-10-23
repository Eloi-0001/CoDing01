console.clear();
const carros = ["Fusca ", "Civic ", "Corolla ", "Mustang ", "Onix"];

console.log(`\nOlá cliente!!, nós temos esses carros:\n`); // Insere uma nova linha na tela

carros.forEach((carro, index) => {
  console.log(`${index}: ${carro}`); // Exibe a lista de carros na tela
});

const desejaComprar = prompt(
  "\nVocê deseja comprar algum objeto da lista?\n (Sim ou Não) \n\n>",
).toLocaleLowerCase();

if (desejaComprar === "sim") {
  const escolhaCarro = parseInt(
    prompt("qual o numero do carro que você quer alterar?"),
  );
  const removerCarro = parseInt(
    prompt("qual o numero do carro você deseja remover?"),
  );

  const novoCarro = prompt("novo carro");

  const atualizandoCarro = carros.splice(escolhaObj, removerObj, novoCarro);

  const numeroCarros = carros.length;

  console.log(
    `São ao todo ${numeroCarros} carros!, sendo que ${novoCarro} foi adicionado recentimente ao estoque S2`,
  );
} else {
  const novoCarro = prompt("novo carro");
  const atualizandoCarro = carros.splice(escolhaObj, 0, novoCarro);

  const numeroDeCarros = carros.length;

  console.log(
    `São ao todo ${numeroDeCarros} carros!, sendo que ${novoCarro} foi adicionado recentimente ao estoque S2`,
  );
}
