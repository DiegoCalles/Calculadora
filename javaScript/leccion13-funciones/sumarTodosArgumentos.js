// vamos a sumar todos los argumentos de la funcion pero haciendo una iteracion con un ciclo for
// hoisting
let resultado = sumarTodo(5, 4, 7, 9, 13);

function sumarTodo(){
    let suma = 0;

    for(let i=0; i< arguments.length; i++){
        suma+= arguments[i];
    }

    return suma;
    
}

console.log(resultado);