let  miPromesa = new Promise((resolved, rejected)=>{
    // acá el bloque de codigo que debe comparar 
    let expresion = false;

    if(expresion){
        resolved("Resolvió Correcto") // otra forma de plantearlo
        //resolved = console.log("Resolvió correcto");
    }
    else{
        rejected("Se encontró un error") // otra forma de plantearlo
        //rejected = console.log("Se encontró un error");
    }
})

let mostrar = function(algo){
    console.log(algo);
}

// cuando llamo a la funcion lo hago con funciones flecha como argumento de ambos casos y sus respectivos 
// funciones (.then() y .catch)

miPromesa.then(valor=>(valor), error=>(error));

//miPromesa.then(valor =>(valor)).catch(error=>(error));
// comunmente se encuentra de esta forma
// miPromesa
// .then(valor =>(valor))
// .catch(error=>(error));
miPromesa.then(valor=>mostrar(valor), error=>mostrar(error));




 














