// 🏠 Práctica para casa: Gestor interactivo de frutas (variante)
// 🎯 Objetivo:
// Crear un programa que gestione una lista de frutas con opciones para agregar, eliminar, ver la lista completa y salir. El usuario puede interactuar con el menú cuantas veces quiera hasta decidir salir.
//
// 🧩 Instrucciones:
// Crea un arreglo vacío llamado frutas.
//
// Usa un ciclo while que muestre el siguiente menú:
// ¿Qué deseas hacer?
// 1. Agregar fruta
// 2. Eliminar fruta
// 3. Ver lista de frutas
// 4. Salir

const { ask } = require('../helpers/input');

async function main() {
    let opcion = ''
    let frutas = [];

    wile (opcion !== '4'){
        opcion = await ask('Qué deseas hacer? /n1. Agregar una fruta  /n2. Eliminar fruta /n3. Lista de frutas /n4. salir /n.');
    if (opcion === '1'){

        //1.agregar
        let frutaNueva = awit ask('¿Que fruta desea agregar?: ');
        frutas.push(frutaNueva);
        console.log('Fruta agregada  ${frutaNueva}')
        console.log('frutas disponibles: ', frutas);
        }else if (opcion === '2'){

        //2.eliminar
        if (frutas.length === 0 ){

            console.log('No hay frutas disponibles');
            continue;
            } else {
                let frutaEliminar = await ask('¿Que fruta deseas eliminar?: ')
                let index = frutas.lastIndexOf(frutaEliminar)

                if (index !== -1) {
                    frutas.splice(index,1);
                    console.log('${frutasEliminar} ha sido eliminada')
                } else {
                    console.log('Fruta no encontrada ');
                }
                console.log('Frutas disponobles: ', frutas); 
            }
        //3.Lista de frutas
            else if (opcion '3')
                for

        //4.Salir
        else if (opcion === '4') {
        console.log('Grcias por usar el progama');
        } else {
        console.log('Opción no válida');
    }
    

    } 

    main();

