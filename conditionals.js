/*  Condicionales */
/* 

if (condicion) {
    codigo
}

if (condicion) {
    codigo
} else {
    codigo
}

if (condicion) {
    codigo
} else if (condicion) {
    codigo
} else {
    codigo
}

switch(valor){
    case posibleValor: 
        codigo
        break;

    default: 
        codigo
        break;
}
*/

/* 
Operadores Logicos:

and = &&
or = || 
not = !

Operadores de Comparacion:

===    5 === '5'
==     5 == '5'
!==    5 !== '5'
!=     5 != '5'
>=
<=
>
<

*/

let a = 8;
let b = 5;
let c = 10;

if (a > b){
    // codigo
    console.log("A es mayor")
}


if (a > b){
    // codigo
    console.log("El mayor es a")
} else {
    // codigo
    console.log("El mayor es b")
}

if (a > b && a > c) {
    console.log("El mayor es a")
} else if ( b > c){
    console.log("El mayor es b")
} else {
    console.log("El mayor es c")
}

if (5 !== '5'){
    console.log("verdadero")
}