/*
    Sistema de Ventas
- va a constar de tres clases que van a tener una relacion de agrecacion:
    1. producto[id, nombre, precio], constructo(), toString()
    2. cliente[id, nombre, apellido], constructor, tostring() sobreescritura
    3. orden{idOrdenes, producto[],MAX_PRODUCTOS } constructor, agregarProducto(), calcularTotal(), MostrarOrden()


*/


class Producto{
    static contadorProductos =0;

    constructor(nombre, precio){
        this._idProductos = ++Producto.contadorProductos;
        this._nombre = nombre;
        this._precio = precio;
    }

    get idProductos(){
        return this._idProductos; 
    }

    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._precio = nombre;
    }

    get precio(){
        return this._precio;

    }
    set precio(precio){
        this._precio = precio;
    }

    toString(){
        return `ID del producto: ${this._idProductos}, Producto: ${this._nombre}, Precio: $ ${this._precio} \n`;
    }
}


class Cliente{
    static contadorCliente = 0;

    constructor( nombreCliente, apellido){
        this._idCliente = ++ Cliente.contadorCliente;
        this._nombreCliente = nombreCliente;
        this._apellido = apellido;
    }

    get idCliente(){
        return this._idCliente;
    }

    get nombreCliente(){
        returnthis._nombreCliente;
    }
    set nombreCliente(nombreCliente){
        this._nombreCliente = nombreCliente;
    }

    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }

    toString(){
        return `ID: ${this._idCliente}, Nombre: ${this._nombreCliente}, Apellido: ${this._apellido} \n`;
    }
}


class Orden{
    static get MAX_PRODUCTOS(){
        return 5;
    }

    static contadorOrdenes = 0;
    static productos = [];
    static cliente = [];

    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = Orden.productos;
        this._cliente = Orden.cliente;

    }

    get idOrden(){
        return this._idOrden;
    }

    get productos(){
        return this._productos;
    }
     get cliente(){
         return this._cliente;
     }

    agregarCliente(cliente){
        this._cliente.push(cliente);

    }

    agregarProducto(producto){
        if(this._productos.length < Orden.MAX_PRODUCTOS){
            this._productos.push(producto);
        }
        else{
            console.log('No se pueden agregar mas productos!');
        }

        
    }

    calcularTotal(){
        let totalVenta = 0;

        for(let producto of this._productos){
            totalVenta += producto.precio;
        }
        return totalVenta;

    }

    mostrarOrden(){
        let prodcutosOrden = '';

        for(let producto of this._productos){
           prodcutosOrden += producto.toString();
        } 

        console.log(`Productos: \n${prodcutosOrden}Orden Nro: ${this._idOrden}\nDatos del Cliente:${this._cliente}Total: ${this.calcularTotal()}`);
        
        
    }
        

}

let producto1 = new Producto("TV", 80000);
let producto2 = new Producto("NoteBook", 115000);

console.log(producto1.toString());
let producto3 = new Producto("Zapatillas", 18900);
let producto4 = new Producto("Pantalon", 8900);
let producto5 = new Producto("Camisa", 4500);
let producto6 = new Producto("short", 6500);


let cliente1 = new Cliente("Jose", "Gutierrez");
console.log(cliente1.toString());

let orden1 = new Orden();
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);
orden1.agregarProducto(producto3);
orden1.agregarProducto(producto4);
orden1.agregarProducto(producto5);
orden1.agregarProducto(producto6)
orden1.agregarCliente(cliente1)

orden1.mostrarOrden()






