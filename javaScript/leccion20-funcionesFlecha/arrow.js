// llamado a la funcion (hoisting)

myFunction();



// funcion comun (sintaxis)

function myFunction(){
    console.log("hola mundo");
}
//funcion anonima / acá no funciona el hoisting
let miFuncion = function(){
    console.log("Hola Mundo Anonimo")
}
miFuncion();

// funcion arrrow / tampoco funciona el hoisting

let miFuncionFlecha = ()=>{
    console.log("Hola mundo desde mi funcion Flecha")
}

miFuncionFlecha();

//simple ( en una linea)
const funcionFlechaSimple= () =>console.log("Funcion flecha Simple");
funcionFlechaSimple();

// retornando strings y valores
const flechaRetornaString = () => "funcion flecha retorna string";
console.log(flechaRetornaString());

// retornando Objeto / entre parentesis el objeto para no confundir con las llaves del cuerpo de una funcion
const retornaObjeto = ()=>({nombre:"Juan", apellido: 'lara'});
console.log(retornaObjeto());

// con parametros. si es un solo parametro le podemos quitar el parentesis

const conParametro=mensaje =>console.log(mensaje);
conParametro('saludo como un parametro');

// con varios parametros de forma simple (poco codigo)

const VariosParametrosSimple = (par1, par2) =>`resultado de la operacion:${ par1+par2}`;
console.log(VariosParametrosSimple(6,6));

// con varios parametros con codigo mas complejo
const complejos = (para1, para2) =>{
    let resultado = (para1 + para2)/para1;
    return `Resultado de la operacion ${resultado}: `;
}

console.log(complejos(11, 3));

