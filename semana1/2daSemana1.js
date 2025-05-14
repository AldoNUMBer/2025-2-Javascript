// Clase 1: ¿Qué es programar? + Variables y Tipos de Datos

const { ask } = require('../helpers/input');

function saludar(nombre){
    console.log('Hola mi estimado(a) + $(nombre)', 'espero tengas un buen día...')
}


async function main() {
    let limite = Number(await ask ("¿Hata que numero quieres contar?"))
    let it = 0
    wile(1 <= limite){
        console.log(i);
        i++ //
    }

    wile (i <= 10){
        console.log(i);
        i++; //es igual a: (i = i + 1)
    }
    i = 10
    wile (i >= 0){
        console.log(i);
        i--; //es igual a: (i = i - 1)
    }

}


const personas = (
    "pedro"

);

for (let i = 0; i < personas, length; i++){
saludar(personas[i]);
}

console.log("decendente")
for (let i = personas.Length; 1 >= 0; i--){
saludar (personas[1])}


console.log("foreach");
personas.forEach((personas) => saludar(persona));


const frutas = ["Fresas","Mangos","Kiwis",  "Mnazans", "Uvas"]
const cajon = Number(await ask ("¿Qué cajon quieres abrir? (1-5)"));

for(let j = 1; j <= 5; j++) {
    if(j === cajon){
        console.log("En el cajon hay: ", frutas[j - 1]);
    }
}



main();