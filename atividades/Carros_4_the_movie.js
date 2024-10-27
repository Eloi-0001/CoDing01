let idConvertido;
let trocarCarro;

const carros = ["Renault Kwid", "Fiat Mobi", "Citroën", "Hyundai HB20"];
console.log(carros);

const estruturaCondicional = prompt("Alterar algo na lista?"); // estrutura condicinal para alterar a lista

if (estruturaCondicional == "sim") {
  let removerCarro = prompt("Deseja remover qual item da lista?"); // usuario escolhe se deseja remover algo da lista ou não
  if (removerCarro == null || removerCarro.trim() === "") {
    console.log("ERROR");
  } else {
    idConvertido = parseInt(removerCarro);
  }
  trocarCarro = prompt("Deseja adicionar qual carro a lista?"); // usuario escolhe se deseja alterar a lista ou não

  if (idConvertido == null) {
    console.log("ERROR");
  } else if (trocarCarro == null) {
    console.log("ERROR");
  } else {
    carros.splice(idConvertido, 1, trocarCarro);
  }
  console.log(`Otimo!!, essa é a nova lista. \n\n${carros}\n`);
} else {
  console.log(`ok, a lista se mantem igual \n\n${carros}`);
}
