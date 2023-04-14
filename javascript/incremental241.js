var persona = {
    nombre: "Renata",
    edad: 27
}



class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  }
  
  const persons = [];
  
  function agregarPersona(nombre, edad) {
    if (edad < 0) {
      console.log('Error: la edad no puede ser negativa');
      return;
    }
    if (!nombre || nombre.trim() === '') {
      console.log('Error: el nombre no puede estar vacío');
      return;
    }
    const person = new Person(nombre, edad);
    persons.push(person);
    console.log(`Se agregó la persona ${nombre} con edad ${edad}`);
  }
  
  agregarPersona('Juan', 30);
  agregarPersona('María', 25);
  agregarPersona('', 35);
  agregarPersona('Pedro', -10);
  
  console.log(persons);
  