let auto = {
    marca:"Chevrolet",
    modelo: "Classic",
    año:2010,
    idioma: 'en',

    // metodo get

    get encerder(){
        return  encendido = true;
    },
    set lang(lang){
        this.idioma = lang.toUpperCase();
    }
}

auto.lang = 'en';
console.log(auto.idioma)
console.log(auto.encerder);


// get y set en objeto libro

let libro = {
    topico: "historia",
    titulo: "lanzas coloradas",
    edicion: 1995,
    editorial: "La Castellana",
    activo: true,
    mensaje: "el libro está disponible",

    get activado(){
        return this.activo;
    },

    set activado(activado){
        
        this.activo = activado;
        if(activado == false){
            
            this.mensaje = "No está disponible";
            this.mensaje = this.mensaje.toUpperCase()
        }
        
    },

   


}
libro.activado = false;



console.log(libro.activado);

console.log(libro.mensaje);
