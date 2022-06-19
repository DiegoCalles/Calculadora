let miPromesa = new Promise((resolved, rejected)=>{
    
    let dos = true;
    let uno = false;
    
    

    if(uno){
        resolved("Haz hecho click en el elemento");
    }
    else if(dos){
        rejected("Error, Haz posado el mouse sobree el elemento");
    }
    
});

let mostrar = function(respuesta){
    console.log(respuesta);
}

miPromesa.then(valor=>(mostrar(valor)), error=>mostrar(error));


let numeros = new Promise(function(resolved, rejected){
    let num1 = true;
    

    if(num1){
        resolved("Eleccion correcta!");
    }
    else{
        rejected("Se ha generado un error");
    }
});

let mostar= function(algo){
    console.log(algo);
}


//numeros.then(valor=>(mostrar(valor)), error=>(mostrar(error)));
numeros.then(function(resolved){mostrar(resolved)}, function(rejected){mostrar(rejected)});