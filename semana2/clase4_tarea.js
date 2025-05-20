   //📘 Tarea: Análisis de calificaciones
//🎯 Objetivo:
//Aplicar funciones, bucles y lógica condicional para procesar un arreglo de números.
//
//📝 Instrucciones:
//Crea una función llamada analizarCalificaciones que reciba un arreglo de números (enteros del 0 al 100) que representan calificaciones de estudiantes. La función debe devolver un objeto con la siguiente información:
//
//Cantidad de aprobados (calificaciones ≥ 70)
//
//Cantidad de reprobados (calificaciones < 70)
//
//Promedio general
//
//La calificación más alta y la más baja

const { ask } = require('../helpers/input');

let calificaciones =[68, 36, 78,  68, 75, 92, 89, 100, 74,  63];
    function analizarCalificaciones(numeros){
        let caliReprobados 
        let califiAprobados
        for (let n = 0; n < numeros.length; n++){
        if (calificaciones >= 70){ caliAprobados += 1}
        else if (calificaciones <= 70){ caliReprobados += 1}
        console.log('Usted ha reprobado')
    }

}
    function promedioGeneral(numeros){
 let total = 0;
 for (let n = 0; n < numeros.length; n++)
    total = total + numeros[n];
const promedio =  total / numeros.length;
console.log(`El promedio general es: ${promedio}`);

}



Main();

/*
funtion analizarCalificaciones(califiaciones){
let caliAlta  = 0;
let Baja = 0;
let promedio =o;
let caliApro = 0;
let caliRepro = o;
}

funtion obtenerAprobados

funtion 

funtion calificacionMayor

funtion CalificacionMenor

*/



/*
function analizarCalificaciones(numeros){
let
for
}

function califiAprobados(numeros){
let 
for
}

function caliReprobados(numeros){
    let
    for
}


function  calificacionAltayBaja(numeros){
    
}
*/