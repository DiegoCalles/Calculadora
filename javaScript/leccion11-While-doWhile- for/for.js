for(let contador = 0; contador < 3; contador++){
    console.log(contador);
}
 console.log("fin ciclo for");

 // Ejercicio numeros pares de cero a diez y la palabra break
inicio:
 for(let contador = 1; contador<=10; contador++){
     if(contador % 2 == 0){
     console.log(contador);
     // si quiero detenerlo una vez encuentre el primer numero par, dentro del if ejecuto el break
     break
     }
    
 }
 console.log("Fin del ciclo for")


 // ejercicio   con la palabra continue

 for(let contador = 0; contador < 10; contador++){
     // acá cambiamos la logica. preguntaremos si el numero no es par( con comparacion estricta). si no lo es, le pediremos que avance
    if(contador % 2 !== 0){
        continue; // ir a la siguiente iteracion, obviando la que no cumpla la condicion
    }
    else{
        console.log(contador)
    }
}

// labels en el Ejercicio numeros pares de cero a diez y la palabra (break inicio;)
inicio:
 for(let contador = 1; contador<=10; contador++){
     if(contador % 2 == 0){
     console.log(contador);
     // si quiero detenerlo una vez encuentre el primer numero par, dentro del if ejecuto el break
     break inicio;
     }
    
 }

 

