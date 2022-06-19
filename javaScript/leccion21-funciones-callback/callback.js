// hoisting
miFuncion2();
miFuncion1();
function miFuncion1(){
    console.log('saludo 1');
}

function miFuncion2(){
    console.log('saludo 2');
}

// funcion callback
// 2. la funcion imprimir recibe como parametro 'mensaje' que dentro del return de la funcion sumar
//    (funcionCallback(res)) seria la variable resultado
let imp = function imprimir(mensaje){
    console.log(mensaje);
}


function sumar(op1, op2, funcionCallback){
    let res = op1+ op2;
// 1. funcionCallback es el parametro de  la funcion sumar, que recibe como argumento a la funcion imprimir,
//   al momento de hacer el llamado a la funcion (sumar) 

    funcionCallback(res);
    // el el bloque funcionCallback recibe como parametro a la var res, que guarda la operacion aritmetica
}

// 3. al momento de hacer el llamado a la funcion sumar le paso como argumento las 2 coantidades y la 
// funcion imprimir sin parentesis. esto dará como resultado que se muestre lo contenido en la var res
sumar(5,9,imp);


// ejercicio 2

let imprime = function farmacos(aprobado){
    console.log(aprobado);
}

function sintomas(uno, dos, farmacos){
    if(uno =='fiebre' ||  dos == 'flema' && uno == 'flema' || dos == 'fiebre'){
        let mensaje = "El farmaco está indicado para los sintomas";
        farmacos(mensaje);
    }
    else{
        let mensaje = "El farmaco no está indicado para estos sintomas ";
        farmacos(mensaje);
    }
}

sintomas('flema','dolor de cabeza', imprime)

