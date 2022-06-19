

const persona = {
    nombre:'Juan',
    apellido: 'Perez'
}

function cambiarValorDeObjeto(p1){
    p1.nombre = 'Pedro';
    p1.apellido = 'Lara';
    // cuando termina de ejecutarse la funcion, el parametro p1 se destruye 

}

cambiarValorDeObjeto(persona);
/*el objeto persona es pasado por referencia a la funcion cambiarValorDeObjeto y sus valores son actualizados, aun fuera de la funcion.
 el paso se da porq la referencia de memoria reservada para el objeto persona es apuntado  tambien por la funcion  al ser
 pasado por argumento cuando se llama a la funcion. luego al retornarlo en la consola (persona) su valor se actualiza con 
 el de la funcion.
 
 es decir, al objeto persona se le pasó por la referencia de memoria que apuntaba a la funcion (cambiarValorDeObjeto), 
 en su parametro (p1),  los valores de sus atributos que sustituyeron a los del objeto(persona)
 */
console.log(persona);
