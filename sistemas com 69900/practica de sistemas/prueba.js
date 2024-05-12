// console.log("hola mundo");
// console.warn("error catastrophic")

// let nombre = "juan";
// let edad = 42;
// let precio = 1200;
// let serie = "juego de tronos";
// let pelicula = "laberinto";

// console.log(nombre + edad + precio + serie + pelicula);

// function edad(edad+1) {
//     edad = 45
// }

// function saludar(nombre) {
//    return "Hola {$nombre}";
// }
// console.log(saludar("Juan"))

//  function saludar2() {
//     return "hola: {$nombre}";
// }
//  console.log(saludar2 (`jose`));

// const array = [1,2,3,4]
// const array3 = array.filter((Number)=>Number>2);
// console.log(array3);

// obj1 = {
//     nombre:"g",
//     edad:2,
//     participantes:3,
// }

// console.log(Object.entries(obj1))
// /* ------------------------------------spread operator-------------------------------------- */

// const array = [1,2,3,4]


// /* ------------------------rest operator-------------------------------------------------- */
// const objetos =  [

//     {

//         manzanas:3,

//         peras:2,

//         carne:1,

//         jugos:5,

//         dulces:2

//     },

//     {

//         manzanas:1,

//         sandias:1,

//         huevos:6,

//         jugos:1,

//         panes:4

//     }

// ]

// const lista = objetos.map(objeto => Object.keys(objeto));
// console.log(lista);
/* -----------------------------trim--------------------------------------------- */

// const a = "      *Hello, como estas?*           ";
// console.log(a)

// const b = a.trim();

// console.log(b)

// Variable para contar los eosinófilos
let eosinofilos = 0;

// Agregar un controlador de eventos para el evento keydown al documento
// document.addEventListener("keydown", function(event) {
//     // Verificar si la tecla presionada es la tecla "4" (código de tecla 52)
//     if (event.key === "4") {
//         // Incrementar la variable eosinofilos cuando se presiona la tecla "4"
//         eosinofilos++;
//         console.log("Cantidad de eosinófilos:", eosinofilos);
//     }
// });

const divisionPromesa=(a,b)=> {
    return new Promise((resolve, reject) => {
        if (a === 0 || b === 0) {
            reject("No se pueden dividir por cero");
        } else {
            resolve(a / b);
        }
    });
}
console.log(divisionPromesa (6,2))
