class Cliente extends Persona{
    static contadorCliente = 0;

    constructor(nombre, apellido, edad, fechaRegistro){
        super(nombre, apellido, edad);
        this._idCliente = ++Cliente.contadorCliente;
        this._fechaRegistro = new Date(); 
    }
    get idCliente(){
        return this._idCliente;
    }

    get fechaRegistro(){
        return this._fechaRegistro;
    }
    set fechaRegistro(fechaRegistro){
        this._fechaRegistro = new Date();
    }

    toString(){
       return (`${super.toString()}, Id del cliente: ${this.idCliente}, 
                fecha de registro: 
                ${this._fechaRegistro.getDate()}/${this._fechaRegistro.getMonth() + 1}/${this._fechaRegistro.getFullYear()}` );  
}
}