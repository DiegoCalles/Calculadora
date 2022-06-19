let mes = 6;

let estacion;

switch(mes){
    case 12: case 1: case 2:
        estacion = "Verano";
        break;
    case 3: case 4: case 5:
        estacion = "Otoño";
        break;
    case 6: case 7: case 8:
        estacion = "Invierno";
        break;
    case 9: case 10: case 11:
        estacion = "Primavera"
        break;
    default:
        estacion = " No corresponde a un mes del año";
        break;
}

console.log(estacion);


// ejercicio miembros de la familia

let familiar= "prima";

switch(familiar){
    case "hijo":
        console.log(" Salomón");
        break;
    case "hija":
        console.log("Lucia");
        break;
    case "Esposa":
        console.log("Fabiola");
        break;
    default:
        console.log("no está registrado como familiar")

}
