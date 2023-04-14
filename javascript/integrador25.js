let listaNuevasPersonasDOM = document.getElementById('lista-nuevas-personas')
let formAgregaPersonas = document.getElementById('form-añadir-personas')
let formBuscaEdad = document.getElementById('form-busca-user-por-edad')


class Persona {
      constructor (name, age) {
            this.name = name;
            this.age = age;
      }

}

let personas = [];

// AGREGAR PERSONAS
function agregarPersona(name, age) {
      //no edades negativas ni valores vacíos
	if (age < 0 || name.trim() === "") {
		return;
	}
	let persona = new Persona(name, age);
	personas.push(persona);
}

// ORDENAR POR EDAD
function ordenarPorEdad() {
     
	personas.sort(function (a, b) {
	      return a.age - b.age
	});

      pintaPersonasDOM(personas)
      return
}

// BUSCAR POR EDAD
function buscarPorEdad(age) {
	return personas.filter(persona => persona.age === age);
}

// PINTAR EN EL DOM
function pintaPersonasDOM(lista) {

      listaNuevasPersonasDOM.innerHTML = ''
      
      lista.forEach( persona => {
            listaNuevasPersonasDOM.innerHTML += `
            <li class='border'>

                  <p><i class="bi bi-person"></i> ${persona.name}, Edad: ${persona.age}</p>
            </li>
      `
      })
}

// FORMULARIO QUE AGREGA PERSONAS
formAgregaPersonas.addEventListener('submit', (event) =>{
            event.preventDefault()

            nuevoNombreInput = document.getElementById('nombre-usuario-añadido').value
            nuevaEdadInput = parseInt(document.getElementById('edad-usuario-añadido').value)

            agregarPersona(nuevoNombreInput, nuevaEdadInput)
            // listaNuevasPersonasDOM.innerHTML = ''
            
            pintaPersonasDOM(personas)


            document.getElementById('nombre-usuario-añadido').value = ''
            document.getElementById('edad-usuario-añadido').value = ''

      }
)

// FORMULARIO QUE BUSCA PERSONAS POR EDAD

formBuscaEdad.addEventListener('submit', (event) =>{
      event.preventDefault()

      let edadInput = parseInt(document.getElementById('busca-edad').value)
      
      // filtro la búsqueda y pinto el resultado 
      let ListabusquedaPorEdad = buscarPorEdad(edadInput)
      pintaPersonasDOM(ListabusquedaPorEdad)
      
      document.getElementById('busca-edad').value = ''
      
})