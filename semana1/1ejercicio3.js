// Clase 1: ¿Qué es programar? + Variables y Tipos de Datos

const { ask } = require('../helpers/input');

async function main() {
 const number = Number(await ask("Ingresa número"));

//  if (number  % 3 === 0 && number % 5 === 0){
//   console.log("No es multiplo de 3 y 5");
//  } else if (number % 3 === 0) {
//   console.log("Multiplo de 3")
//  } else if (number % 5 === 0) {
//   console.log ("Multiplo de 5")
//  }
switch(true){
    case number % 3 ===  0 && number % 5 === 0:
        console.log("Es multiplo de 3 y 5");
        break;
    case number % 3 ===  0:
        console.log("Es multiplo de 3");
        break;
    case number % 5 === 0:
        console.log("Es multiplo de 5");
        break;
    default:
        console.log("No es multiplo de3 o 5");
    }

}

main();










