// hoisting
// miFuncion(8,9);

// Declaracion de la funcion

function miFuncion(a, b){
    console.log(`suma:${a+b}`)
}

miFuncion(3, 4);

// return

function conReturn(a, b){
    return (a + b);
}

let resultado = conReturn(5, 6);
console.log(resultado);



// Declaracion de funciones anonimas o de tipo expresion

let x = function(a, b){return a + b};

console.log(x(1,2));
resultado = x(10, 2);
console.log(resultado);


// funciones self-invoking
(function(a){
    console.log("hola "+ a)
})("Diego");

// funciones como objetos en javascript

// parametros definidos
function objeto(a=4, b= 8){

   // arguments.length para conocer cuantos argumentos tiene( argumentos son propiedades del objeto function)
    console.log(arguments.length);
    // arguments[0] esta propiedad trata a los argumentos de la funcion como un array 
    // (si los parametros estan definidos y no se pasan argumentos, los mismos retorneran undefined)
    console.log(arguments[0])
    return (a + b);
}
// no se pasan argumentos al llamar a la funcion (objeto) por eso arguments[0] da indefinido
let resultado1 = objeto();
console.log(resultado1)

// toString. metodo para que me devuelva por consola un string de  mi funcion

console.log(objeto.toString());

// funciones Flecha

const SumarFuncionTipoFlecha = (a, b)=> (a + b);

let resultado2 = SumarFuncionTipoFlecha(7, 9);
console.log(resultado2);

function sumasArguments(a=2, b=3){
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    // arguments[2] seria el tercer argumento pasado al llamar a la funcion
    return (a + b + arguments[2])
}

let resultado3 = sumasArguments(3, 7, 9);
console.log(resultado3)