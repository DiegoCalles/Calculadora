// funcion paar obtener la hora con el objeto Date()

let reloj = ()=>{
    let fecha = new Date();
    // OJo: getHours es un metodo de la clase Date, por lo tanto al llamarlo hay que 
    // colocarle los parentesis
    console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`)
}

// mandamos a llamar a la funcion setinterval y le pasamos como parametro la funcion reloj

//setInterval(reloj, 1000);


let despertador = ()=>{
    let alarma = new Date();

    console.log(`bebe agua, ya pasaron 15 segundos. hora: ${alarma.getHours()}:${alarma.getMinutes()}:${alarma.getSeconds()}`);
}

setInterval(despertador, 15000);
