var prompt = require('prompt-sync')();

let base = prompt("Digite base")
let altura = prompt("Digite altura")

let mult = (base * altura)
console.log(`O resultado da multiplicação é ${mult}`)

let div = (mult / 2)
console.log(`O resulto da média é ${(div)}`)