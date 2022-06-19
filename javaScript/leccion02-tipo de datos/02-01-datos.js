
// tipo de dato string 
var nombre = "Diego";
console.log(nombre);

// tipo de dato int
var numero = 1000;
console.log(numero);

numero = 36

console.log(typeof numero, numero)


// tipo de dato object
var objeto = {
    nombre: "Juan",
    apellido: "calles",
    edad: numero 
}
console.log(objeto)

// tipo de dato boolean

var bandera = true;

console.log(typeof bandera, bandera)

// tipo de dato function

function mifuncion(){}
console.log(typeof mifuncion);

// tipo de dato Symbol

var simbolo = Symbol("##%%$$")
console.log(typeof simbolo);

//tipo clase (las clases tambien pueden ser una funcion)
class persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(typeof persona);

// undefined
var x;
console.log(x);

// null

var y =null;
console.log(y);

//Array

var autos= ['Audi', 'BMW', 'Volvo'];
console.log(autos, typeof autos);

// empty string
var vacia = "";

console.log(vacia)

