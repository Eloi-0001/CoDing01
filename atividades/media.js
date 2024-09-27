var prompt = require('prompt-sync')();


var nota1 = parseFloat(prompt('digiti nota 1'));
var nota2 = parseFloat(prompt('digiti nota 2'));
var nota3 = parseFloat(prompt('digiti nota 3'));

var sm = (nota1 + nota2 + nota3)
var cm = (sm / 3)
console.log(`O calculo da media é ${sm}`)
console.log(`O resultado da sua media é ${cm.toFixed(1)}`)