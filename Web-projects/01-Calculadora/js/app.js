console.log('Aplicacion Calculadora');

function sumar(){
    // con esto recupreamos el objeto forma de la clase formulario
    const forma = document.getElementById('forma');

    // aca accedemos a los input del formulario. esto nos va a regresar todo el elemento de tipo input number ( no los valores)
    //con .value si nos retorna los valores del input
    let operandoA = forma['operandoA'].value;
    let operandoB = forma['operandoB'].value;

    // con este recuperamos el valor de  los operando y los sumamos
    let resultado = parseInt(operandoA) + parseInt(operandoB); 
    if(isNaN(resultado)){
        resultado= 'No se ingresaron valores numéricos!'
    }

    // vamos a recuperar el elemento button (resultado) y en su inner le asignamos el valor de la variable resultado con template string
    document.getElementById('resultado').innerHTML = `resultado: ${resultado}`;
    console.log(`resultado: ${resultado}`);
}

// function sumar(){
//     let operandoA = document.getElementById('operandoA').value;
//     let operandoB = document.getElementById('operandoB').value;
    
//     //parseInt() para que me lea los operando como numeros y no como strings
//     let resultado = parseInt(operandoA) + parseInt(operandoB);
//     if(isNaN(resultado)){
//         resultado = ' no se ingresaron numeros'
//     }
//     document.getElementById('resultado').innerHTML = `resultado: ${resultado}`;

// }

function restar(){
    const forma = document.getElementById('forma');

    let operandoA = forma['operandoA'];
    let operandoB = forma['operandoB'];

    let resultado = (parseFloat(operandoA.value))-(parseFloat(operandoB.value));
    if(isNaN(resultado)){
        resultado ='No se ingresaron valores numéricos! '
    }


    document.getElementById('resultado').innerHTML= `resultado: ${resultado}`;
    console.log(`resultado: ${resultado}`);
}


function multiplicar(){
    const forma = document.getElementById('forma');

    let operandoA = forma['operandoA'];
    let operandoB = forma['operandoB'];

    let resultado = parseInt(operandoA.value) * parseInt(operandoB.value);
    if(isNaN(resultado)){
        resultado = 'No se ingresaron valores numéricos!'
    }

    document.getElementById('resultado').innerHTML = `resultado: ${resultado}`;
    console.log(`resultado: ${resultado}`);
}

function dividir(){
    const forma = document.getElementById('forma');

    let operandoA = forma['operandoA'];
    let operandoB = forma['operandoB'];

    let resultado = parseFloat(operandoA.value) / parseFloat(operandoB.value);
    if(isNaN(resultado)){
        resultado ='No se ingresaron valores numéricos!';
    }

    document.getElementById('resultado').innerHTML = `resultado: ${resultado}`;
    console.log(`resultado: ${resultado}`);
}