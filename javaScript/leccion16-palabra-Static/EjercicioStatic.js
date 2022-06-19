// Ejercicio 1 Felinos - peso
class Felino{
    constructor(tamaño, color, peso){
        this._tamaño = tamaño;
        this._color = color;
        this._peso = peso;
    }

    get tamaño(){
        return this._tamaño;
    }

    set tamaño(tamaño){
        this._tamaño = tamaño;
    }


    get color(){
        return this._color;
    }

    set color(color){
        this._color = color;
    }


    get peso(){
        return this._peso;
    }

    set peso(peso){
        this._peso = peso;
    }

    descripcion(){
        return this._tamaño + 'cm, ' + this._color + ': ' + this._peso + ' kg';
    }
    

    // sobreescritura del metodo to string

    toString(){
        return this.descripcion();
        

    }
    // descripcionPeso

    descripcionPeso(peso){
        this._peso = peso;
        console.log(`el felino${this.tipo} tiene un peso de ${this.peso}`);
    }

    // metodo static para comparar que felino está en mejores condiciones para ser adoptado

    static saludar(gato){
        
        console.log(gato.color);
    }

    static compareWeight(gatoA, gatoB){
        if(gatoA.peso> gatoB.peso){
            return 'el gato'+gatoA.color+'tiene '+ (gatoA.peso - gatoB.peso) + ' kg mas de peso que  el gato ' + gatoB.color ;
        }
        else{
            return 'el gato '+gatoB.color+'  tiene '+ (gatoB.peso - gatoA.peso) + ' kg mas de peso que el gato ' + gatoA.color ;
        }
       
    }



}


class Gato extends Felino{
    constructor(tamaño, color, peso, tipo, status, condicion){
        super(tamaño, color, peso);
        this._tipo = tipo;
        this._status = status;
        this._condicion = condicion;
    }
    get tipo(){
        return this._tipo;
    }
    set tipo(tipo){
        this._tipo = tipo;
    }

    get status(){
        return this._status;
    }
    set status(status){
        this._status = status;
    }

    get condicion(){
        return this._condicion;

    }
    set condicion(condicion){
        this._condicion = condicion;
    }

    descripcion(){
        return super.descripcion() + ' ' + this._tipo + ' ' + this._status + ' ' + this._condicion;
    }
}

let felino = new Felino(33, 'gris', 3.5, 'Angora', 'adoptable', 'Saludable')
let gato1 = new Gato( 33, 'gris', 3.5, 'Angora', 'adoptable', 'Saludable');
let gato2 = new Gato(32, 'Amarillo y blanco', 4.2, 'Cruce', 'Adoptable', 'Saludable');


Felino.saludar(felino);

Gato.saludar(gato1);

console.log(Gato.compareWeight(gato1, gato2));

 
console.log(gato1.toString())


// Ejercicio 2 persona 

class Persona{
    static contadorPersonas = 0; // atributo de  la clase

    // constatntes estaticas . solo lectura . creadas con un metodo estatico. para identificar el max de objetos de esta clase

    static get MAX_oBJETOS(){
        return 5;
    }


    
    constructor(nombre, apellido){
        
        if(Persona.contadorPersonas< Persona.MAX_oBJETOS){
            // creamos el atributo idPersona y le damos el valor del contadorPersonas con pre-incremento (++Persona) a la clase
            this.idPersonas= ++Persona.contadorPersonas;
        }
        else{
            console.log("Se ha llegado al limite de creacion de objetos")
        }
        
        this._nombre = nombre;
        this._apellido = apellido;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get apellido(){
        return this._apellido;
    }

    set apellido(apellido){
        this._apellido = apellido;

    }

    nombreCompleto(){
        return 'Id: '+this.idPersonas + ', ' + this._nombre + ' ' + this._apellido;
    }

    toString(){
        return this.nombreCompleto();
    }
}
class Alumno extends Persona{
    constructor(nombre, apellido, calificacion){
        super(nombre, apellido)
        this._calificacion = calificacion;
    }

    get calificacion(){
        return this._calificacion;
    }
    set calificacion(calificacion){
        this._calificacion = calificacion;
    }
}

let alumno1 = new Alumno("Jose", 'Martinez', 5);
let persnona1= new Persona("Diana", "calles", 4.9);
let alumno2 = new Alumno("Josue", 'Martinez', 5);
let persona2= new Persona("Diego", "calles", 4.9);
let alumno3 = new Alumno("pedro", 'Martinez', 5);
let persona3= new Persona("Ana", "calles", 4.7);
console.log(alumno2.toString());
console.log(alumno3.toString())

// undefined el id porque ya no permite contar mas( no fue asignado). tiene limitante de objetos creados
console.log(persona3.toString()) 

console.log(Persona.MAX_oBJETOS);




