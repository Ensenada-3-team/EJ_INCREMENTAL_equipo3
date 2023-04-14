// Definimos las variables que necesitamos
var personas = [];

// Función para mostrar las personas en la lista
function mostrarPersonas() {
    var personasList = document.getElementById('personas-list');
    personasList.innerHTML = '';
    personas.forEach(function(persona) {
        var li = document.createElement('li');
        li.textContent = persona.nombre + ', ' + persona.edad + ' años';
        personasList.appendChild(li);
    });
}

// Función para agregar una persona al array "personas"
function agregarPersona(nombre, edad) {
    // Agregamos un control de validación para asegurarnos de que la edad no sea negativa y el nombre no sea vacío
    if (edad < 0 || nombre.trim() === '') {
        console.log('Error: la edad no puede ser negativa y el nombre no puede estar vacío');
        return;
    }
    // Creamos el objeto "persona" con las propiedades "nombre" y "edad"
    var persona = {
        nombre: nombre,
        edad: edad
    };
    // Agregamos la persona al array "personas"
    personas.push(persona);
    // Mostramos las personas en la lista
    mostrarPersonas();
}

// Función para ordenar el array "personas" por edad
function ordenarPorEdad() {
    personas.sort(function(a, b) {
    return a.edad - b.edad;
    });
    mostrarPersonas();
}

// Función para buscar personas por edad
function buscarPorEdad(edad) {
    var resultados = personas.filter(function(persona) {
    return persona.edad === edad;
    });
    mostrarResultados(resultados);
    }

// Función para mostrar los resultados de búsqueda
function mostrarResultados(resultados) {
    var personasList = document.getElementById('personas-list');
    personasList.innerHTML = '';
    resultados.forEach(function(persona) {
        var li = document.createElement('li');
        li.textContent = persona.nombre + ', ' + persona.edad + ' años';
        personasList.appendChild(li);
    });
}

// Evento submit del formulario para agregar personas
var agregarForm = document.getElementById('agregar-form');
agregarForm.addEventListener('submit', function(event) {
    event.preventDefault();
    var nombreInput = document.getElementById('nombre-input');
    var edadInput = document.getElementById('edad-input');
    agregarPersona(nombreInput.value, parseInt(edadInput.value));
    nombreInput.value = '';
    edadInput.value = '';
});

// Evento click del botón para ordenar personas por edad
var ordenarBtn = document.getElementById('ordenar-btn');
ordenarBtn.addEventListener('click', function() {
ordenarPorEdad();
});

// Evento click del botón para buscar personas por edad
var buscarBtn = document.getElementById('buscar-btn');
buscarBtn.addEventListener('click', function() {
    var buscarInput = document.getElementById('buscar-input');
    var edad = parseInt(buscarInput.value);
    buscarPorEdad(edad);
    buscarInput.value = '';
});

// Mostramos las personas por defecto al cargar la página
mostrarPersonas();
