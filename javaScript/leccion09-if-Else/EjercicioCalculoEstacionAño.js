let mes = 6;
let estacion;

if(mes==3 || mes <= 5){
    estacion = "Otoño";
    console.log("estamos en " , estacion);
}
else if(mes == 6 || mes <= 8){
    estacion = "Invierno";
    console.log("Es ", estacion);
}
else if(mes == 9 || mes <= 11){
    estacion = "Primavera";
    console.log("Estamos en ", estacion);
}
else if(mes == 12 || mes <= 2){
    estacion = "Verano"
    console.log("Estamos en ", estacion);
}
else{
    console.log("El numero de mes no corresponde a un mes del año")
}