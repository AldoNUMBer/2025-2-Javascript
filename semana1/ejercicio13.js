<<<<<<< HEAD
// Clase 1: ¿Qué es programar? + Variables y Tipos de Datos

const { ask } = require('../helpers/input');

async function main()

 function obtenerMayor(a, b)[
  if (a > b) {
    return a;
  } else {
    return b;
  }
 ]


/* async function main(){
  const num1 = Number(await ask("Introduce el primero numero"))
  const num2 = Number(await ask("Introduce el segundo numero"))

  const resultado = obtenerMayor(num1, num2);
 
}
  */


main();
=======
// Clase 3: Lógica con Condicionales
const { ask } = require('../helpers/input');

async function main() {
  const number = Number(await ask("Ingresa un número:"));

  if (number % 3 !== 0 && number % 5 !== 0) {
    console.log("No es múltiplo de 3 y 5");
  } else if (number % 3 === 0 && number % 5 !== 0) {
    console.log("Multiplo de 3")
  } else if (number % 5 === 0 && number % 3 !== 0) {
    console.log("Multiplo de 5")
  } else {
    console.log("Es múltiplo de 3 y 5");
  }

  switch (true) {
    case number % 3 === 0 && number % 5 === 0:
      console.log("Es múltiplo de 3 y 5");
      break;
    case number % 3 === 0:
      console.log("Es múltiplo de 3");
      break;
    case number % 5 === 0:
      console.log("Es múltiplo de 5");
      break;
    default:
      console.log("No es múltiplo de 3 o 5");
  }

  n % 3 === 0 && n % 5 === 0
    ? "Múltiplo de 3 y 5"
    : n % 3 === 0
      ? "Múltiplo de 3"
      : n % 5 === 0
        ? "Múltiplo de 5"
        : "No es múltiplo de 3 ni de 5";

}

main();
>>>>>>> upstream/main
