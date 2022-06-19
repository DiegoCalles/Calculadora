let edadString = '19x';
console.log(typeof edadString);

// para pasarlo a numero
let edad = Number(edadString);

console.log(typeof edad)
// como tiene una "x" ya no es un numero (is not a number (isNaN)), asi lo haya pasado a number con la funcion Number()
console.log(edad)

if(isNaN(edad)){
    console.log("No es un numero")
}
else{
    if(edad >= 18){
        console.log("puede votar")
    }
    else{
        console.log("Es muy joven")
    }
}


// con operador ternario
let miNumero = "17";

let edad1 = (Number(miNumero) >=18) ? "Puede votar" : " Es muy joven";

console.log(typeof edad1, ".", edad1);


