class Automovil{
    constructor(marca, modelo, color){
        this._marca = marca;
        this._modelo = modelo;
        this._color = color;
    }

    get marca(){
        return this._marca;
    }
    set marca(marca){
        this._marca = marca;
    }

    get modelo(){
        return this._modelo;
    }
    set modelo(modelo){
        this._modelo = modelo;
    }

    get color(){
        return this._color;
    }
    set color(color){
        this._color = color;
    }

    descripcion(){
        return this._marca + ' ' + this._modelo + ' ' + this._color +', ';
    }

    toString(){
        return this.descripcion();
    }

}

class Neumatico extends Automovil{
    constructor(  marca, modelo, color, rodado, company){
        super(marca, modelo, color);
        this._rodado = rodado;
        this._company = company;
    }

    get rodado(){
        return this._rodado;
    }
    set rodado(rodado){
        this._rodado = rodado;
    }

    get company(){
        return this._company;
    }
    set company(company){
        this._company = company;
    }

    // crear una sobreescritura de la clase neumatico al metodo descripcion de la clase padre (Automovil)

    descripcion(){
        return  super.descripcion() + 'neumaticos aprobados: '+ this._company + ', Rodado ' + this._rodado;
    }

}
let miAuto = new Automovil('chevrolet', 'corsa', 'beige');
let miNeumatico = new Neumatico('chevrolet', 'prisma', 'beige',14, 'Pirelli');

console.log(miAuto.descripcion());
console.log(miNeumatico.descripcion())

// para que me muestre el metodo toString() hay que sobreescribir el metodo  en la clase padre
console.log(miAuto.toString());

// polimorfismo. trabajo con la sobreescritura del metodo toString  en la clase padre y hago el llamado al metodo  desde la clase hija
// con los atributos de ambas clases
console.log(miNeumatico.toString())

