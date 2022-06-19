class Persona{
    static contadorObjetos = 0; // atributo de  la clase

    email = "valor default email"; // atributo que se asocia desde el objeto

    constructor(nombre, apellido){
        Persona.contadorObjetos++;
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
let pesrnona1= new Persona("Diego", "calles", 4.9);

// cada vez que s ehaga el llamado al metodo constructor para crear un objeto se incrementa en 1  la variable static contadorObjetos
console.log(Persona.contadorObjetos)

console.log(pesrnona1.email);
console.log(Persona.email   )