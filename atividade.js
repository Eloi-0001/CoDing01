var prompt = require('prompt-sync')();

 /* programa 1 

    var nome = ("Eloi")

    var idade = (19)

 /* programa 2 

    var cidade = ('recife')

    console.log ("Olá, meu nome é " + nome +" e tenho "+ idade +" anos.");

    console.log(`${nome} é de ${cidade}`)

 /* programa 3 

    let numero = prompt("Digite um numero")

    console.log(numero + numero)
    console.log(numero - numero)
    console.log(numero * numero)
    console.log(numero / numero)

 /* programa 4 

    let base = prompt("Digite base")
    let altura = prompt("Digite altura")

    let mult = (base * altura)
    console.log(`O resultado da multiplicação é ${mult}`)

    let div = (mult / 2)
    console.log(`O resulto da média é ${(div)}`)

 /* programa 5 

    var nota1 = parseFloat(prompt('digiti nota 1'));
    var nota2 = parseFloat(prompt('digiti nota 2'));
    var nota3 = parseFloat(prompt('digiti nota 3'));

    var sm = (nota1 + nota2 + nota3)
    var cm = (sm / 3)
    console.log(`O calculo da media é ${sm}`)
    console.log(`O resultado da sua media é ${cm.toFixed(1)}`)

 /* programa 6 

    let preco = parseFloat(prompt('Valor do produto é?'))
    let precoD = parseFloat(prompt('Valor do desconto é?'))
let cedula = prompt("Entre euro, dolar e dolar canadense, qual cedula você deseja converter?").toLowerCase()
  /* Pedro Ayres me ajudou com toLowerCase*/

console.log(cedula)

 if (cedula == "euro") {

   let reais = parseFloat(prompt('quantos reais você quer converter em euros?'))
   let euro = (6.13)
   let convertedor = (reais / euro)
   console.log(`Seus ${reais}R$ dão ${convertedor.toFixed(2)}€`)

}

else if (cedula == "dolar") {

   let reais = parseFloat(prompt('quantos reais você quer converter em dolar?'))
   let dolar = (5,48)
   let convertedor = (reais / dolar)  
   console.log(`Seus ${reais}R$ dão ${convertedor.toFixed(2)}$`)

}

else if (cedula == "dolar canadense") {

   let reais =parseFloat(prompt('Quantos reais você deseja converter em dolares canadenses?'))
   let dolarC = (4.07)
   let converterdor = (reais/dolarC)
   console.log(`Seus ${reais}R$ dão ${converterdor.toFixed(2)}C$`)
}

else {

   console.log('lamento, mas não consigo converter esse tipo de cedula ainda. S2')

}
    let desconto = (preco * precoD) / 100;
    var precoF = preco - desconto;

    console.log(`Seu preço final é ${precoF}R$`)

 /* programa 7 

 let renda = parseFloat(prompt('qual sua renda mensal?'))
 var imposto = 10

 var impostoRenda = (renda*imposto)/100;

console.log(`seu valor a ser pago é ${impostoRenda}R$`);
 
 /* programa 8 */
 
 var prompt = require('prompt-sync')();


 let preco = parseFloat(prompt('Valor do produto é?'))
     let precoD = parseFloat(prompt('Valor do desconto é?'))
 let cedula = prompt("Entre euro, dolar e dolar canadense, qual cedula você deseja converter?").toLowerCase()
   /* Pedro Ayres me ajudou com toLowerCase*/
 
 console.log(cedula)
 
  if (cedula == "euro") {
 
    let reais = parseFloat(prompt('quantos reais você quer converter em euros?'))
    let euro = (6.13)
    let convertedor = (reais / euro)
    console.log(`Seus ${reais}R$ dão ${convertedor.toFixed(2)}€`)
 
 }
 
 else if (cedula == "dolar") {
 
    let reais = parseFloat(prompt('quantos reais você quer converter em dolar?'))
    let dolar = (5,48)
    let convertedor = (reais / dolar)  
    console.log(`Seus ${reais}R$ dão ${convertedor.toFixed(2)}$`)
 
 }
 
 else if (cedula == "dolar canadense") {
 
    let reais =parseFloat(prompt('Quantos reais você deseja converter em dolares canadenses?'))
    let dolarC = (4.07)
    let converterdor = (reais/dolarC)
    console.log(`Seus ${reais}R$ dão ${converterdor.toFixed(2)}C$`)
 }
 
 else {
 
    console.log('lamento, mas não consigo converter esse tipo de cedula ainda. S2')
 
 }



 /* programa 9 

 let graus = parseFloat(prompt('graus você quer converter?'))
 let fahre = (graus * 9/7) + 32

console.log(`está fazendo ${fahre.toFixed(1)} graus fahrenheit`)

 /* programa 10

 let peso = parseFloat(prompt('Quanto você pesa?'))
let altura = parseFloat(prompt('Qual sua Altura?'))

var IMC =  peso / (altura * altura)
console.log(`Seu indice de massa corporal é ${IMC.toFixed(2)}`)


*/
 

 