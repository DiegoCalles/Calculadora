// Clasica
//let autos = new Array("BMW", "Volvo", "Mercedes Benz");

// Recomendada
const autos = ["BMW", "Volvo", "Mercedes Benz", "Ferrari"];
 console.log(autos);
// para mostrar un elemento del array (el primero)
 console.log(autos[0]);
// para recorrer el array
 for(let i = 0; i < autos.length; i++ ){
    console.log(autos[i]);
 }
 console.log(autos.length)

// para que me muestre por consola los de index par
 for(let i = 0; i < autos.length; i++){
     if(i % 2 == 0){
         continue;


     }
     else{
         console.log(autos[i])
     }

 }
 // modificar el valor del elemento
 autos[2]= "fiat";
 console.log(autos);
// agregar nuevo elemento nro 1
 autos.push("Audi");
 console.log(autos);

// agregar un nuevo elemento nro 2

autos[autos.length] = "Cadillac";
console.log(autos);
// agregar un nuevo elemento en un index cualquiera
autos[7] = "Hummer";
console.log(autos);

// como saber si es un Array

console.log(Array.isArray(autos));

console.log(autos instanceof Array);
