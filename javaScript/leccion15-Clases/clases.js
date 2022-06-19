class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }


}

// instacia de clase ( creacion de un nuevo objeto de tipo persona)

let chamo = new Persona("Juan", "Diego");

console.log(chamo);

class Car{
    constructor(name,year){
      this.name = name;
      this.year = year;
    }

    carAge(){
      let date = new Date(); // date() es una clase que trabaja con las fechas y el tiempo
      return date.getFullYear() - this.year;
    }
  }

  let myCar = new Car("Classic", 2010);

  console.log(myCar.carAge());

  