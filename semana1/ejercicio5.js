// Clase 1: ¿Qué es programar? + Variables y Tipos de Datos

const { ask } = require('../helpers/input');

 function diffDate(actualDate, birthDate) {
const diff = actualDate - birthDate
const edadEnDias = Math.floor(diff / (1000 * 60 * 60 * 24))

return edadEnDias;

 }


/*async function main(){

const actualDate = new Date();

 const birthDateDay = await ask("Cuál es el día de fecha de nacimiento");
 const birthDateMonth = await ask("Cuál es el mes de fecha de nacimiento");
 const birthDateYear = await ask("Cuál es el año de fecha de nacimiento");

 const birthDate = await ask ("Cuál es tu fecha de nacimiento (DD/MM/AA)")

const birthDate = new Date ('$(bithDateYear)-$(birthDateMont)-$(birthDateDay)')

const diff = actualDate - birthDate;

console.log("Has vivido aproximadamente: ");
console.log('$(difsDays(actualDate, birthDate)) dias') 
}S
*/


main();