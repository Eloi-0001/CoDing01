var prompt = require('prompt-sync')();


let cedula = prompt("Entre euro, dolar e dolar canadense, qual cedula você deseja converter?").toLowerCase()


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
   