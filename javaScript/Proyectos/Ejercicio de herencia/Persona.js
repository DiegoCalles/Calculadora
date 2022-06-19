// creacion de tres clases Persona, empleado, cliente. con sus atributos(nombre, apellido, id, edad, fechaRegistro, sueldo) y  sus 
// metodos (get, set, toString)
// se puede crear un contador para cada clase hija (empleado y cliente) para saber cuantos objetos de las mismas se han creado


class Persona{

    static contadorPersonas = 0;

    constructor(nombre, apellido, edad){
        // contadorPersonas con pre-incremento
        this.idPersona = ++Persona.contadorPersonas;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
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

    get edad(){
        return this._edad;
    }
    set edad(edad){
        this._edad = edad;
    }

    toString(){
        return 'Id: '+ this.idPersona + ', ' + this.nombre + ' ' + this.apellido;
    }


}





let empleado1 = new Empleado("Salo", "Calles", 15, 15000);
let empleado2 = new Empleado("Lucia", "Calles", 27, 18000);
let cliente1 = new Cliente("Fabi", "Talavera", 36, );

console.log(empleado1.toString());
console.log(empleado2.toString());
console.log(cliente1.toString());



