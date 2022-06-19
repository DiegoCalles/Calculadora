"use strict"
// throw para tipo de datos

let resultado = 'hola';

try {
    //x = 10;
   // pero si lo estamos generando  solo con el throw y el mensaje
    if(isNaN(resultado))throw "No es un numero"; // el mensaje puede ser si es un (boolean,numero, etc)
    // podemos agregar otros casos
    else if(resultado === "")throw "Es cadena vacia";
    else if(resultado > 0)throw "es Positivo";
    else if(resultado < 0)throw "es negativo";
    
} catch (error) {
    console.log(error);
    // error tiene las propiedades name, message. de esta manera dividimos la info del error
    console.log(error.name);//ReferenceError
    console.log(error.message);// x is not defined
}
// el finally tambien lo podemos agregar. siempre se ejecuta
finally{
    console.log("termina revision de errores")
}