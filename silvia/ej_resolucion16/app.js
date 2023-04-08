//Ejercicio con resolución 16
const form16 = document.getElementById('contact-form')
const lista = document.getElementById('contact-list')

function deleteButton(id) {
      const element = document.getElementById(`${id}`)
      element.remove()
}


form16.addEventListener('submit', (event) => {
      event.preventDefault()
      const nombreInput = document.getElementById('name').value
      const emailInput = document.getElementById('email').value

     
      return lista.innerHTML = `
            <div>
            <h2 id='nombre'>${nombreInput}</h2><button id='deleteBtn' onclick='deleteButton(nombre)'>borrar</button>
            <p id='email'>${emailInput}<button id='deleteBtn' onclick='deleteButton(email)'>borrar</button></p>
            </div>
      `

})
    