//funcion constructor de tipo persona
function persona(nombre , apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email= email;
    // crear funcion dentro del constructor
    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido;
    }
}

// crear un nuevo objeto
let padre = new persona("diego","calles", "diego@diego.com");


console.log(padre);


let madre = new persona("Ana", "Martinez", "ana@ana.com");

padre.nombre = 'Antonio';

// prototype para agregar propiedades al constructor

persona.prototype.telf = '44332211';
padre.telf = 99887766;
console.log(padre)
console.log(padre.nombreCompleto());
console.log(madre.nombreCompleto()); 
console.log(padre);