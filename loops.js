/* Ciclos o Bucles */
/* 
For Loop:

for(iterador; condicion; incremento){
    codigo
}

For In Loop:

for(indice in coleccion){
    codigo
}

For Of Loop:

for(valor of coleccion){
    codigo
}

While Loop:

while (condicion){
    codigo
}

Do While Loop:

do {
    codigo
} while (condicion)


*/
/* Contador del 1 al 10 */
//        1        2          4
for(let num = 1; num <= 10; num++){
    //     3
    console.log(num)
}
// 1 2 3 4 5 6 7 8 9 10

for(let num = 10; num >= 1; num--){
    console.log(num)
}
// 10 9 8 ... 1

let nombres = ["Hugo", "Paco", "Luis", "Donald", "Mickey", "Minie"]

for(let indice in nombres){
    console.log(indice)
    console.log(nombres[indice])
}

for(let indice = 0; indice < nombres.length; indice++){
    //if (nombres[indice] == "Luis") continue;
    console.log(indice)
    console.log(nombres[indice])
}

for(let nombre of nombres){
    console.log(nombre)
}

let num = 1;
while(num <= 10){
    console.log(num)
    num += 1 // num = num + 1 num++
}

let indice = 0
while (indice < nombres.length){
    console.log(nombres[indice])
    indice++
}

indice = 0
do {
    console.log(nombres[indice])
    indice++
} while (indice < nombres.length)


nombres.forEach((nombre) => console.log(nombre))
nombres.forEach(imprimirNombre)

function imprimirNombre(a){
    console.log(a)
}

let nombres_uppercase = nombres.map((nombre) => nombre.toUpperCase())
console.log(nombres_uppercase)

let nombres_filtrados = nombres.filter((nombre) => nombre.startsWith('M'))
console.log(nombres_filtrados)

let new_names = [...nombres]
let new_names2 = nombres.slice()

console.log(new_names)
console.log(new_names2)

let resultado = nombres.slice(2, 4)
console.log(resultado)

let resultado2 = nombres.splice(2, 3, 'Hola', 'Mundo', [1, 2])
console.log(resultado2)

console.log(nombres)

let estudiantes = [
    {id: 1, name: 'Hugo'},
    {id: 2, name: 'Paco'},
    {id: 3, name: 'Luis'},
    {id: 4, name: 'Donald'},
]

let copia = [...estudiantes]
copia[0].name = 'Minie'

console.log(estudiantes)

let est = estudiantes.find((item) => item.id == 1)
est.name = 'Hugo Diaz'

console.log(estudiantes)

let nuevos_estudiantes = estudiantes.map(item => ({...item}))
let est2 = nuevos_estudiantes.find((item) => item.id == 1)
est2.name = 'Hugo Paz'

console.log(estudiantes)
console.log(nuevos_estudiantes)

function totalizar(...rest){
    return rest.reduce((total, valor) => total + valor, 0)
}

let total = totalizar(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
console.log(total)

let persona = {
    nombre: 'John',
    apellido: 'Doe'
}

let nueva_persona = {...persona}
nueva_persona.nombre = 'Jane'
console.log(persona)
console.log(nueva_persona)

let arr = [1, 2]
let arr2 = [...arr]