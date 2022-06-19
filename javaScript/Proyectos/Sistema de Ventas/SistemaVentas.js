class Producto{
    static contadorProductos = 0;
    constructor(nombre, precio){
        this._idProductos = ++Producto.contadorProductos;
        this._nombre = nombre;
        this._precio = precio;
    }

    get idProductos(){
        return this._idProductos;
    }

    get nombre(){
        return this._nombre = this.nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }

    get precio(){
        return this._precio;
    }
    set precio(precio){
        this._precio = precio;
    }

    toString(){
        return `Id del Producto: ${this._idProductos}, Nombre: ${this._nombre}, Precio: $ ${this._precio} `;
    }
}



// ambas clases van a tener una relacion de agregacion o asociacion 

class Orden{
       
    static contadorOrdenes = 0;// para saber cuantos objetos de tipo orden se han creado

    static get MAX_PRDUCTOS(){
        return 5;
    } 

   
    
    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        // de esta forma javascript  sabe que esta variable almacena una referencia a un arreglo vacio y podemos 
        // agregar elementos al arreglo
        this._productos = [];
        // para contar lo productos que han sido agregados desde el metodo (agregarProductos())
       // this._contadorProductosAgregados = 0;
        
       
    }

    get idOrden(){
        return this._idOrden;
    }

   

    // para
    agregarProductos(producto){
    // antes de agregar productos necesito saber si se superó la cantidad de productos agregados
    // como es un array, trabajo con la propiedad this._productos.length para recorrerlo
        if(this._productos.length < Orden.MAX_PRDUCTOS){
            this._contadorProductosAgregados++;
            //agregamos un nuevo producto al array con el metodo push (metodo recomendado)
            this._productos.push(producto);
            

            // otra forma de agregarlo seria a traves del indice (this._contadorProductosAgregados, xq nos indica en que posicion vamos)
            //this._productos[this._contadorProductosAgregados] = producto; // es mas larga esta forma
        }
        else{
            console.log("No se pueden agregar mas productos! ya Agregaste:"+ this._contadorProductosAgregados + 'productos');
        }

    }

    calcularTotal(){
        let totalVenta = 0;// para que vaya almacenando la suma de cada precio en la venta de productos

        // una forma simplificada de recorrer arreglos (for x of arrayName){}

        for(let producto of this._productos){
            totalVenta += producto.precio; 
        }
        return totalVenta;
    }

// este metodo no va a regresar nada, simplemente va a imprimir cada uno de los elementos de la orden y cada uno de los productos.
// vamos a iterar cada uno de los productos y por cada producto que tengamos en el arreglo de productos lo vamos a convertir en string,
// para finalmente imprimirla con todos los productos que tenemos en la orden
    mostrarOrden(){
        // creamos la var productosOrden inicalizada con una cadena vacia para ir agregando cada uno de los productos
        let productosOrden ='';
        
        for(let producto of this._productos){
            // (/n) para salto de linea
            productosOrden +='\n'+ producto.toString()+ ' ';
        }   
// imprimimos el id, el total y el string del producto que se vendió                      
        console.log(`  Productos: ${productosOrden} \nOrden: ${this._idOrden}, Total: $ ${this.calcularTotal()}`);

    }

}

// probando el programa con objetos de ambas clases
let producto1 = new Producto("Pantalon", 8900);
let producto2 = new Producto("Camisa", 4500);
// creo el objeto orden para agregarle productos (relacion de agregacion)
let orden1 = new Orden();
orden1.agregarProductos(producto1);
orden1.agregarProductos(producto2);
orden1.mostrarOrden()

let producto3 = new Producto("Zapatillas", 18900);

let orden2= new Orden();
orden2.agregarProductos(producto3);
orden2.agregarProductos(producto1);
orden2.agregarProductos(producto2);
orden2.mostrarOrden();