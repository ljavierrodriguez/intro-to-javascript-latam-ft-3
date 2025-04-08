/* Tipo de Datos */
/* 

String
Number
Boolean
Undefined

Object:
    Null
    Literal Object
    Array


*/

let nombre = "John" // string
let apellido = 'Doe' // string
let nombreCompleto = `Señor ${nombre} ${apellido}` // string


let edad = 40 // number
let temp = 10.5 // number

let abierto = true // boolean
let activo = false // boolean

let nota; // undefined

let users = null; // object

let persona = {
    nombre: 'John',
    apellido: 'Doe',
    edad: 0,
    activo: false
} // object

persona.nombre
persona["apellido"]
//                0     1      2       3         4      5
let arreglo = ["John", false, 10, {a: 1, b:2}, [1, 2], null] // object
let valorObjecto = arreglo[3].b  // object
let valorArray = arreglo[4][1] // array

let nombres = ["Hugo", "Paco", "Luis"]
let estudiantes = [{name: 'Hugo', age: 10}, {name: 'Paco', age: 12 }, {name: 'Luis', age: 8}]

let recetas = [
    { titulo: 'Pasta a la boloñesa', ingredientes}
]