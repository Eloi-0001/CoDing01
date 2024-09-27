var prompt = require('prompt-sync')();


let peso = parseFloat(prompt('Quanto você pesa?'))
let altura = parseFloat(prompt('Qual sua Altura?'))

var IMC =  peso / (altura * altura)
console.log(`Seu indice de massa corporal é ${IMC.toFixed(2)}`)
