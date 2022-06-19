/*
    filter() Ejemplo 1: Cómo filtrar elementos de un arreglo
    En este ejemplo, filtramos todas las personas que son niños pequeños (cuya edad está comprendida entre 0 y 4 años).
*/
let gente = [
    {nombre:'ana', edad: 12},
    {nombre: 'lucia', edad: 03},
    {nombre: 'pedro', edad: 15},
    {nombre: 'juna', edad: 2},
    {nombre: 'diana', edad:4},
    {nombre: 'Luis', edad: 25}
    ]

// filter

let personas = gente.filter(persona => persona.edad <= 4);

console.log(personas);

// filter() Ejemplo 2: Cómo filtrar elementos en función de una propiedad concreta
// En este ejemplo, solo filtraremos los miembros del equipo que sean desarrolladores.

let equipo = [
    {nombre: 'Luis', edad: 38, cargo: 'desarrollador'},
    {nombre: 'Ana', edad: 28, cargo: 'CM'},
    {nombre: 'Pedro', edad: 29, cargo: 'Ingeniero de software'},
    {nombre: 'Maria', edad: 22, cargo: 'desarrollador'},
    {nombre: 'Tim', edad: 19, cargo: 'desarrollador'},
]

let desarrolladores = equipo.filter(miembro => miembro.cargo === 'desarrollador');

console.log(desarrolladores)

// filter() Ejemplo 2: Cómo filtrar elementos en función de una propiedad concreta
// En este ejemplo, solo filtraremos los miembros del equipo que no sean desarrolladores.

let noDesarrolladores = equipo.filter(miembro => miembro.cargo !== 'desarrollador');
console.log(noDesarrolladores);


/*
    Utilizando el filter y accediendo a la propiedad del indice de cada elemento en cada iteración, podemos 
    filtrar cada uno de los tres ganadores en diferentes variables.
*/

let ganadores = ['ana', 'Lucia', 'Pedro'];
 ganadores[0]= 'Luis'
let oro = ganadores.filter((ganador, indice) => indice == 0);

let plata = ganadores.filter((ganador, indice) => indice == 1);

let bronce = ganadores.filter((ganador, indice)=> indice == 2);

console.log(`ganador Oro: ${oro}, ganador plata: ${plata}, ganador Bronce: ${bronce}`);

