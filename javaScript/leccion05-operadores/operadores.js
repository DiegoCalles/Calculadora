let num1 = 25, num2 = 20;

const addResult = num1 + num2;

console.log(" The result of the addition  is: " + addResult);

// substraction
const subResult = num1 - num2;

console.log(" The result of the substraction  is: " + subResult);

// multiplication
const multResult = num1 * num2;
console.log(" The result of the multiplication  is: " + multResult);


// division

const divResult = num1 / num2; 
console.log(" The result of the division  is: " + divResult);

// exponentiation

const expResult = num1**num2;
console.log(" The result of the exponentiation  is: " + expResult);

// modulus
const modResult = num1 % num2;
console.log(" The result of the modulus  is: " + modResult);

// pre increment (++num1)

const incResult = ++num1;
// se incrementó el valor de la varianble num1  y luego se actualizo ese nuevo valor en  incResult
console.log( num1);
console.log(" The result of the increment  is: " + incResult);

// post increment (num1 ++)
const posIncResult = num1 ++;
// acá se asigna el valor de la variable num1 sin actualizarse  a posIncResult. 
// OJO: ya en la variable num1 vale 26 + 1 = 27, puesto que tenia un incremento pendiente de la linea anterior, pero en posIncResult aun no
console.log( num1);
console.log(" The result of the increment  is: " + posIncResult);


// decrement
const decResult = --num2;
console.log(" The result of the decrement  is: " + decResult);





let a= 3, b = 2, c = 1, d = 4;

z=  a + b * (c / d);
console.log(z)

// operadores de asignacion

a +=1;
// esto seria así: a = a +1 / a = 3 + 1 / a = 4;
a
a +=a;
a

let x = 3, y= 2, m ="3";

r = x == y;
console.log(r)
w= x == m;
console.log(w)

// acá  retorna true porque x es distinto en valor a y 
s = x!==y;

// acá retorna false porq x es igual a m en valor, mas no en typeof 
p = x!=m

// acá retorna verdadero porque x, a pesar de ser igual en valor a m, es distinto en typeof
p1 = x!==m
console.log(s, p, p1)


num1 = 11, num2= 14, alias= "11";

mayor = num1>= num2;
