let listaNuevasPersonasDOM = document.getElementById('lista-nuevas-personas')
let formAgregaPersonas = document.getElementById('form-añadir-personas')
let formBuscaEdad = document.getElementById('form-busca-user-por-edad')


class Persona {
      constructor (name, age) {
            this.name = name
            this.age = age
      }

}

let personas = [
      { name: "Juan", age: 25 },
      { name: "Maria", age: 30 },
      { name: "Pedro", age: 20 }
];



// AGREGAR PERSONAS
function agregarPersona(name, age) {
      //no edades negativas ni valores vacíos
	if (age < 0 || name.trim() === "") {
		return;
	}

	let persona = new Persona(name, age)

	personas.push(persona);
}

// ORDENAR POR EDAD
function ordenarPorEdad() {
	// personas.sort(function (a, b) {
	//       return a.age - b.age
	// });

      let len = personas.length;
      for (let i = 0; i < len; i++) {
            for(let j = 0; j < len-i-1; j++){
            if (personas[j].age > personas[j + 1].age) {
                        let temp = personas[j];
                        personas[j] = personas[j+1];
                        personas[j + 1] = temp;
                  }
            }
      }
      
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


/*

ANOTACIONES BURBUJA
 len-i-1 estaría haciendo referencia al índice del último elemento de la porción no ordenada del array. 
 
 En cada iteración del bucle exterior, i representa el número de elementos ya ordenados del array, de modo que la porción no ordenada se encuentra entre personas[0] y personas[len-i-1]. 
 
 En la primera iteración, i es 0, por lo que el índice del último elemento de la porción no ordenada es len-0-1, es decir len-1. 
 
 En la segunda iteración, i es 1, por lo que el índice del último elemento de la porción no ordenada es len-1-1, es decir len-2. Y así sucesivamente hasta que todo el array se encuentra ordenado.



*/