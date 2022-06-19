/* - de 6am a 11 am = buenos dias
   - de 12 pm a 18 pm = buenas tardes
   - de 19pm  a 24pm = buenas noches
   - de 0 am a 5 am = durmiendo

*/
let hora = 6;

let mensaje;

if(hora == 6 || mes <= 11){
    mensaje = "Buenos dias";
    console.log(mensaje);
}
else if(hora == 12 || hora <= 18){
    mensaje = "Buenas tardes";
    console.log(mensaje);
}
else if(hora == 19 || hora <= 24){
    mensaje = "Buenas noches";
    console.log(mensaje);
}
else if(hora == 0 || hora <= 5){
    mensaje = "Durmiendo";
    console.log(mensaje);
}