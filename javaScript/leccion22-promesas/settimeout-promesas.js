let miPromesa = new Promise((resolved)=>{
    // para demostrar que se está trabajando de forma asincrona/ imprime 1ero
    console.log("Inicio de promesa");
    
    setTimeout(()=>resolved("saludos con promesa y timeout"),3000);//imprime despues de  tres segundos

    // para demostrar que se está trabajando de forma asincrona / imprime 2do
    console.log("Fin de promesa")
});

//miPromesa.then(valor=>console.log(valor));

// Ejercicio 2 - "Te pormeto que en 5 segundos te querré"

let amor = new Promise((resolve)=>{
    setTimeout(()=>resolve("Te pormeto que en 5 segundos te querré"),5000);
})

//amor.then((valor)=>{console.log(valor)});

// Supongamos que queremos contar hasta 3. Queremos imprimir un número por consola tras cada segundo.
// Una forma sería:


// sin parametros
let contar = new Promise(()=>{
    setTimeout(()=>{console.log(1);
        setTimeout(()=>{console.log(2);}, 2000);
            setTimeout(()=>{console.log(3);},3000);
            
        
    },1000);
        
});

//contar.then((valor)=>console.log(valor));

// otra forma es crear una funcion que  ejecute una clase promesa (no instaciada) y dentro, una funcion
// flecha  con el parametro resolve, que imprima un metodo setTimeout(con el paramtro resolve y el tiempo)
// (un segundo)

const unSegundoDespues = () => new Promise(resolve=>console.log(setTimeout(resolve, 1000)));

// al instanciar a la promesa, con el metodo then, mandar e imprimir los numeros en el orden(1, 2, 3), 
// dentro del metodo (then) y tambien retornar la constante

unSegundoDespues().then



