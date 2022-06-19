/*
    1. clase dispositivos de entrada (padre de raton y teclado)
        -tipo de entrada (string)
        - marca (string)
        -  constructor y getter/setter de los atributos
        - responsabilidades: crear objetos de tipo DispositivoEntrada

    2. clases Raton y teclado (hijas)
        - idRaton e idTeclado
        - static contadorRatones y contadorTeclado (number)
        - toString(ambos)
        - getter para ambos
        responsabilidades: crear objetos de tipo raton y teclado
    
    3. clase monitor (independiente)
    - idMonitor (number)
    - marca (string)
    - tamaño (string)
    - static contadorMonitores
    - constructor, getter/setter
    - toString
    -responsabilidades: crear objetos de tipo monitor

    4. clase computadora (recibe de referencia (por relacion de agregacion) objetos de las clases monitor, raton, teclado)
    - idComputadora (number)
    - nombre (string)
    - monitor (string)
    - teclado (string)
    - raton (string)
    - static contadorComputadoras (number)
    - constructor / getter/ setter
    - toString

    
     4. clase computadora (recibe de referencia (por relacion de agregacion) objetos de las clases monitor, raton, teclado)
    - idComputadora (number)
    - nombre (string)
    - monitor (string)
    - teclado (string)
    - raton (string)
    - static contadorComputadoras (number)
    - constructor / getter/ setter
    - toString
*/

  

class DispositivoEntrada{
    constructor(tipoEntrada, marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }

    get tipoEntrada(){
        return this._tipoEntrada;
    }
    set tipoEntrada(tipoEntrada){
        this._tipoEntrada = tipoEntrada;
    }

    get marca(){
        return this._marca = this.marca;
    }
    set marca(marca){
        this._marca = marca;
    }

}

class Raton extends DispositivoEntrada{
    static constadorRatones = 0;
    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idRaton = ++Raton.constadorRatones;
    }

    get idRaton(){
        return this._idRaton;
    }

   

    toString(){
        return `IdRaton: ${this._idRaton}, Tipo de Entrada: ${this._tipoEntrada}, Marca: ${this._marca}`;
    }
}
class Teclado extends DispositivoEntrada{
    static contadorTeclados = 0;
    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idTeclado = ++Teclado.contadorTeclados;
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
        
    }

    get idTeclado(){
        return this._idTeclado;
    }


    toString(){
        return `IdTeclado: ${this._idTeclado}, Tipo de Entrada: ${this._tipoEntrada}, Marca: ${this._marca}`;
    }
}

class Monitor{
    static contadorMonitor = 0;

    constructor(marca, tamaño){
        this._idMonitor = ++Monitor.contadorMonitor;
        this._marca = marca;
        this._tamaño = tamaño;
    }

    get idMonitor(){
        return this._idMonitor;
    }

    get marca(){
        return this._marca;
    }
    set marca(marca){
        this._marca = marca;
    }

    get tamaño(){
        return this._tamaño;
    }
    set tamaño(tamaño){
        this._tamaño = tamaño;
    }

    toString(){
        return `IdMonitor: ${this._idMonitor}, Marca: ${this._marca}, Tamaño: ${this._tamaño}`;
    }
}




class Computadora{
    static contadorComputadoras = 0;

    constructor(nombre, monitor, teclado, raton){
        this._idComputadora = ++Computadora.contadorComputadoras;
        this._nombre = nombre;
        this._monitor = monitor;
        this._teclado = teclado;
        this._raton = raton;
    }

    get idComputadora(){
        return this._idComputadora;
    }

    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }

    get monitor(){
        return this._monitor;
    }
    set monitor(monitor){
        this._monitor = monitor;
    }

    get teclado(){
        return this._teclado;
    }
    set teclado(teclado){
        this._teclado = teclado;
    }

    get raton(){
        return this._raton;
    }
    set raton(raton){
        this._raton = raton;
    }

    toString(){
        return `\nComputadora ${this._idComputadora}: ${this._nombre}\nMonitor: ${this._monitor} \nTeclado: ${this._teclado} \nRaton: ${this._raton} `
    }
}
/*  
    5 Clase Orden (relacion de agregacion con la clase computadora)
    - idOrden (number)
    - _computadora = computadora[]
    - static contadorComputadoras (number)
    - constructor / getter / setter
    - agregar computadora(computadora)
    - mostrarOrden
    - toString (no es necesario, ya esta mostrarOrden)
    - responsabilidades: crear objetos de tipo orden, almacenar un array de objetos de tipo computadora

*/

class Orden{
    static contadorOrden = 0;
    static computadoras = [];  
    constructor(){
        this._idOrden = ++Orden.contadorOrden;
        this._computadoras = Orden.computadoras;
    }

    get idOrden(){
        return this._idOrden;
    }

    get computadoras(){
        return this._computadoras;
    }

    agregarComputadora(computadoras){
       this._computadoras.push(computadoras)
    }

    mostarOrden(){
        let ComputadoraOrden;
        for(let computadora of this._computadoras){

           //ComputadoraOrden += computadora.toString();
           //lo puedo hacer con template string 
           // la adicion (+=) computadoraOrden para que se sumen las distintas computadoras a la Orden
           ComputadoraOrden += `${computadora}`;
        }
        console.log( `Orden: ${this._idOrden} Computadoras: ${ComputadoraOrden}`);
        
    }

}

let dispositivo1 = new DispositivoEntrada();
let raton1 = new Raton("USB", 'Genious');
let teclado1 = new Teclado("Bluetooth", "Noga");
let monitor1= new Monitor("Hp", "24 pulgadas")
let dispositivo2 = new DispositivoEntrada();
let raton2 = new Raton("USB", 'Samsung');
let teclado2 = new Teclado("Wired", "Samsung");
let monitor2= new Monitor("Samsung", "28 pulgadas")

let compu1 = new Computadora("Mac", monitor1.toString(),teclado1.toString(),raton1.toString());
let compu2 = new Computadora("Razen8", monitor2.toString(),teclado2.toString(),raton2.toString());
let orden1 = new Orden();
let orden2 = new Orden();

orden1.agregarComputadora(compu1);
orden1.mostarOrden()
orden1.agregarComputadora(compu2);
orden2.mostarOrden()

console.log(raton1.toString());
console.log(teclado1.toString());
console.log(monitor1.toString());
console.log(`${compu1})`);
console.log(teclado2.toString())