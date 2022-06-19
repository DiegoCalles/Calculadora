"use strict";

//en modo strict si no declaras la variable (let, var, const) genera error

try{
     // dentro del try la linea de codigo que genera el error
    let x= 10;
    // lo mismo ocurre con una funcion no declarada
    // miFuncion();
    throw "Mi error";// para errores de tipo de datos
}
// como parametro del catch el error
catch(error){
console.log(error); //nos muestra un error de referencia: la var x no está definida
}
// el bloque finally siempre se va a ejecutar sin importar los dos de arriba
finally{
    console.log("termina la revision de errores")
}

// ahora esta linea de codigo si se está ejecutando, sin importar el error de arriba
console.log("Hola mundo");


