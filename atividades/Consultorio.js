 let nome = prompt('Bom dia, me passe seu nome porfavor')

// console.log ('Odontologia(1), Pediatria(2), Pré Natal(3), Dermatologia(4)')
let area = prompt(`oh , qual prestação de serviço você deseja?`).toLowerCase()

switch (true) 
{
 case (area == '1' || area == 'odonto'):
      let hora = prompt('qual horario de odontologia você deseja marcar?')
      console.log(`${nome} marcou um horario para ${hora}`)
  break;
 case (area == '2' || area == 'pediatria'):
    console.log
      let hora2 = prompt('qual horario de pediatria você deseja marcar?')
      console.log(`${nome} marcou um horario para ${hora2}`)
    break;
 case (area == '3' || area == 'pre'):
    console.log
      let hora3 = prompt('qual horario do pré natal você deseja marcar?')
       console.log(`${nome} marcou um horario para ${hora3}`)
    break;
 case (area == '4' || area == 'dermatologia'):
    console.log
      let hora4 = prompt('qual horario da dermatologia você deseja marcar?')
       console.log(`${nome} marcou um horario para ${hora4}`)
    break;
    
    default:
      console.log('Não temos essa aréa em nosso hospital!!');
}
