// llamadas asincronas con uso del metodo setTimeout

function miFuncionCallback(){
    console.log('saludo asincrono despues de 3 segundos');
}

// llamado a la funcion settimeout con el nombre de una funcion como parametro
setTimeout(miFuncionCallback, 3000);

// recibe tambien una funcion dentro
setTimeout(function(){console.log('mensaje dos , en 6 segundos')}, 6000);


// con una funcion flecha

setTimeout(()=>console.log('mensaje 3, en 8 segundos'), 8000);

