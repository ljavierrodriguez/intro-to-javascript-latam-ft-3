/* Funciones */
/* 

1. Funciones Declaradas (hoisted)

function nombreFuncion(){
    codigo
} 

nombreFuncion()
    

*/
saludar()

function saludar(){
    console.log("Hola")
}

/* 
2. Funciones Anonimas

const varibleName = function(){
    codigo
}
*/

const sumar = function(a, b){
    return a + b
}

let resultado = sumar(10, 20)

console.log(sumar(10, 10)) // 20
console.log(resultado) // 30

/* 
3. Funciones Flecha (arrow functions) 

const variableName = (params...) => return

*/

const restar = (a, b) => a - b

const multiplar = (a, b) => {
    return a * b
}


restar(10, 5)
restar(100, 34)
restar(2025, 1981)


function operaciones(callback, a, b){
    return callback(a, b)
}

const funcion = function(a, b){ return a + b}

console.log(operaciones((a, b) => a + b, 10, 10))
console.log(operaciones(funcion, 10, 10))

const calcularPromedio = () => null
const obtenerUsuarioPorId = () => null


function totalizar(valores){
    if (!Array.isArray(valores)) console.log("El parametro debe ser un array")
}