let numero = 3;

let numerTexto = "Valor desconocido";

switch(numero){
    case 1:
        numerTexto = "Numero uno";
        break;
    case 2:
        numerTexto = "numero dos";
        break;
    case 3:
        numerTexto = "Numero tres";
        break;
    default:
        numerTexto = "Caso no encontrado";
        break;

}

console.log(numerTexto)