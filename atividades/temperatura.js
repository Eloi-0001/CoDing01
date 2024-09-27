let prompt = require('prompt-sync')();

let graus = parseFloat(prompt('graus você quer converter?'))
let fahre = (graus * 9/7) + 32

console.log(`está fazendo ${fahre.toFixed(1)} graus fahrenheit`)