// tipos primitivos (cuando no son objetos), no tienen ni atributos ni metodos asociados al valor
let x = 10;

function sumar(a){
    a = 20; 
// una vez termina el proceso y se cambia el valor de 'a=20', al momento de retornar el valor de 'a' será undefined,
// porq la funcion termina
}
// acá traspasamos el valor de x al parametro 'a'
sumar(x);

// pero x continua valiendo 10. 
console.log(x)
