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
    nombreCompleto(){
        return this._nombre + ' '+ this._apellido;
        
    }
    
}

class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre,apellido);
        this._departamento = departamento;
    }

    get departamanto(){
        return this._departamento;
    }
    set departamanto(departamanto){
        this._departamento = departamanto;
    }
    
    nombreCompleto(){
        // return this._nombre +' '+ this._apellido + ', ' + this._departamento;
        return super.nombreCompleto() + ', '+ this._departamento;
    }
    
}

let empleado1 = new Empleado("Marta", "Gonzalez", "Limpieza");

console.log(empleado1);

console.log(empleado1.nombreCompleto());//metodo get nombre de la clase Persona

