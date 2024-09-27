var prompt = require('prompt-sync')();

let renda = parseFloat(prompt('qual sua renda mensal?'))
 var imposto = 10

 var impostoRenda = (renda*imposto)/100;

console.log(`seu valor a ser pago é ${impostoRenda}R$`);

