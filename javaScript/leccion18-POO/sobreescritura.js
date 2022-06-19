class Empleado{
    constructor(nombre, sueldo){
        this._nombre = nombre;
        this._sueldo = sueldo;
    }

    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }

    get sueldo(){
        return this._sueldo;
    }
    set sueldo(sueldo){
        this._sueldo = sueldo;
    }

    obtenerDetalles(){
        return `Nombre: ${this._nombre}, Sueldo: ${this._sueldo}`
    }

}
class Gerente extends Empleado{
    constructor(nombre, salario, area){
        super(nombre, salario);
        this._nombre = nombre;
        this._sueldo = this.sueldo;
        this._area = area;

    }
    get area(){
        return this._area;
    }
    set area(area){
        this._area = area;
    }

    obtenerDetalles(){
        console.log(`Gerente: ${super.obtenerDetalles()}\nArea: ${this._area}`);
    }

}

let emplado1 = new Empleado();
let gerente1 = new Gerente("Carlos", 5000, "Administrativa");
gerente1.obtenerDetalles()
