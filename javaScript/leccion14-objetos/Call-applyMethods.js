const empleado = {
    nombre: "John",
    apellido: "Doe",

    // podemos pasarle parametros individaualmete, puesto que el metodo call los acepta
    fullName : function( titulo, telf){

        return titulo+ ": "+ this.nombre + " " + this.apellido+ ", telf: " + telf;
    }

}

const emp1 = {
    nombre : "Ana",
    apellido: "Rojas"
}


console.log(empleado.fullName("Ing", 1150623933))
// metodo call para usar metodos de un objeto B, en un objeto A. pasandole argumentos de manera individual
console.log(empleado.fullName.call(emp1, "Doctora",11223344 ));



// metodo apply para usar metodos de un objeto B, en un objeto A. pasandole argumentos en forma de array

const persona = {
    nombre: "John",
    apellido: "Doe",

    
    fullName : function( titulo, telf){

        return titulo+ ": "+ this.nombre + " " + this.apellido+ ", telf: " + telf;
    }

}

// podriamos pasar el nombre de la variable que contiene un array como argumento de l metodo apply
let arreglo = ["Lic", 35262422]

const pers1 = {
    nombre : "Ana",
    apellido: "Rojas"
}

console.log(persona.fullName.apply(pers1,["Ing: ", 11223344]));

// aca pasamos el nombre del array (arreglo) como argumento y funciona igual
console.log(persona.fullName.apply(pers1,arreglo));