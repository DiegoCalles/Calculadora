
const miPromesa = new Promise((resolve)=>{
    //console.log("inicio de la promesa");
    setTimeout(()=>resolve('hola desde pilar en tres segundos'), 3000);
    //console.log("Fin de la promesa");
});

//miPromesa.then((valor)=>console.log(valor));

//Async: indica que una funcion va a regresar una promesa

async function miPromesaAsync(){
    return ('Hola desde la funcion async');
}

miPromesaAsync().then(valor=>console.log(valor));


// Await hace que una funcion espere por una promesa

async function promesaAsyncAwait(){
    let promesa = new Promise(resolve=>{
        resolve("promesa con Await");
      });

    console.log(await promesa);
}

// no necesita del metodo .then()
promesaAsyncAwait();


// Async- Await - setTimeout
async function promesa_async_await_setTimeout1(){
    let miPromesa = new Promise(resolve =>{setTimeout(()=>resolve("Simple en 6 seg"),6000)});
    console.log(await miPromesa);
}

// con setTimeouts anidados
async function promesa_async_await_setTimeout2(){
    let miPromesa = new Promise(resolve =>{
        setTimeout(()=>{
            resolve("hola en tres segundos");
            setTimeout(()=>console.log("hola 2"), 4000);
            setTimeout(()=>console.log("Hola 3"), 5000);
        }, 3000);
    });

    console.log(await miPromesa);
}

promesa_async_await_setTimeout2();
promesa_async_await_setTimeout1();