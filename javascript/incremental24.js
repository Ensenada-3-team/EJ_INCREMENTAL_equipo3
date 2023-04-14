let formAgregarAmigos = document.getElementById("agregar-amigos")
const botonAgregar = document.getElementById("agregar");
let listaResultados = document.getElementById("resultados")
let personas = [];

formAgregarAmigos.addEventListener("submit", (event) => {
  event.preventDefault()
  const nombreInput = document.getElementById("nombre").value;
  const edadInput = parseInt(document.getElementById("edad").value);

 let persona = agregarPersona(nombreInput, edadInput);
  if (persona !== null) {
    personas.push(persona);
    console.log(personas);
  }

  listaResultados.innerHTML = ""

personas.forEach(persona => {
  listaResultados.innerHTML += `
  <li> <p> ${persona.nombre} <br> ${persona.edad} </p> </li>
  `
}) 
});





const personaInicial = {
  nombre: "Roberto",
  edad: 36
};

function agregarPersona(nombre, edad) {
  if (edad < 0) {
    alert("La edad no puede ser negativa");
    return null;
  } else if (nombre.trim() === "") {
    alert("El nombre no puede estar vacío");
    return null;
  } else {
    const persona = {
      nombre: nombre,
      edad: edad
    };
    return persona;
  }
}


var persona1 = agregarPersona("Rosa", 23);
var persona2 = agregarPersona("Ricardo", 43);
var persona3 = agregarPersona("Saray", 27);

personas.push(persona1);
personas.push(persona2);
personas.push(persona3);


function ordenarPorEdad(personas) {
  personas.sort(function(persona1, persona2) {
    return persona1.edad - persona2.edad;
  });
  return personas;
}

var personasOrdenadas = ordenarPorEdad(personas);
console.log(personasOrdenadas);

function buscarPorEdad(edad, personas) {
  return personas.filter(function(persona) {
    return persona.edad === edad;
  });
}

console.log(buscarPorEdad(27, personas))