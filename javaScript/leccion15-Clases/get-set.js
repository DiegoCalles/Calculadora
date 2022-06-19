// no acepta hoisting
let pers2 = new Persona('maria', "laura")
class Persona{
    constructor(nombre, apellido){
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

class Empleado extends Persona{
    constructor(departamento){
        this._departamento = departamento;
    }

    get departamanto(){
        return this._departamento;
    }
    set departamanto(departamanto){
        this._departamento = departamanto;
    }

    
}

let pers1 = new Persona("José", "Ramirez");
// modificado por el metodo set nombre ("Carlos ") / no necesitamos colocarle parentesis al metodo
pers1.nombre= "Carlos";
console.log(pers1.nombre); // retornamos el valor de nombre  por el metodo get nombre