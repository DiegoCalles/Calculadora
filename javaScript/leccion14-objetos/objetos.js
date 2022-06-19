
// forma nro 1 para crear objetos
let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 36,
    email: 'juan@juan.com',
    // para agregarle metodos en el objeto, lo hacemos con funciones de tipo expresion

    nombreCompleto: function(){
        return this.nombre+ ' ' + this.apellido;

    },

    datosCompletos: function(){
        return " Los datos ingresados son: "+ this.nombreCompleto() + ' ' + this.edad + ' '+ this.email;
    }
}

// forma nro2 para crear objetos
let persona2 = new Object();

persona2.nombre = 'Matias';
persona2.apellido = 'Lacava';
persona2.direccion = 'Baigorria 1061, Pilar';
persona2.telf = 1150623933;
// modificar propiedades (telf)
persona2.telf = 1128780130;
// borrar propiedad

delete persona2.telf;

// para recorrerlos con for in y mostrar el nombre de las propiedades y el valor de las mismas (separadamente)
for(propiedades in persona2){
    console.log(propiedades);
    console.log(persona[propiedades]);
}

for(valor in persona){
    console.log(persona[valor])
}

// para imprimir desdde el metodo  Object.values(persona)

let valoreArray = Object.values(persona);
console.log(valoreArray);

// para imprimirlo desde el metodo JSON.stringify(persona)

let personaString = JSON.stringify(persona);
console.log(personaString)

// retorno por consola

console.log(persona2)

console.log(persona.edad); 
console.log(persona);
console.log(persona.nombreCompleto());
console.log(persona.datosCompletos())