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
        return `Nombre: ${this._nombre}, Sueldo: ${this._sueldo}`;
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
        return`Gerente: ${super.obtenerDetalles()}\nArea: ${this._area}`;
    }

}

// funcion fuera de ambas clases - Polimorfismo- acá no se necesita saber el tipo
function imprimir(tipo){
    console.log( tipo.obtenerDetalles());
    if(tipo instanceof Gerente){
        console.log("Es una instacia de tipo Gerente");
        console.log(tipo.area);
    }
    // si no le agrego el (else) me va a mostrar ambos mensajes(empleado / gerente) en la clase hija
    // con el (else) ligamos los casos (los if)
    else if(tipo instanceof Empleado){
        console.log("Es una instacia de tipo Empleado");
        // como es area instanceof gerente me retorna undefined 
        console.log(tipo.area);
    }
}

// instanceof - cuando se necesita saber el tipo
// es recomendable comenzar el instanceof con la clase hija (de menor jerarquia) 

let emplado1 = new Empleado("Mateo", "messi");
let gerente1 = new Gerente("Carlos", "5000", "Administrativa");
let gerente2 = new Gerente("Carlos", 10000, "Sistemas");
// al llamar a la funcion le paso como argumento el objeto de cualquiera de las clases
imprimir(emplado1);
imprimir(gerente1);
imprimir(gerente2);
