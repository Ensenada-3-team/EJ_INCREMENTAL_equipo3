# SPRINT I - ENTREGA II

## Incremental 11 - Primer programa

1. Programa que reciba por prompt el nombre, apellido, fecha de nacimiento y la cantidad de cursos de programación realizados.
2. Al finalizar el programa agregarle +1 a los cursos de programación realizados y mostrarlo por consola.
3. Verificar si la fecha de nacimiento es anterior al año 2000 mostrar un mensaje que diga: "¿Estas seguro que eres un programador Junior?"

## extra 11 - inicio de sesión

1. Comprobar el inicio de sesión
2. Escribir un código que pregunte por el inicio de sesión con prompt.

NOTA: Si el visitante ingresa ""Admin"", entonces prompt(pregunta) por una contraseña, si la entrada es una linea vacía o Esc – muestra “Cancelado.”, si es otra cadena de texto – entonces muestra “No te conozco”.

- Comprobacion de contraseña: + Si es igual a “TheMaster”, entonces muestra “Bienvenido!”, + Si es otra cadena de texto – muetra “Contraseña incorrecta”, + Para una cadena de texto vacía o una entrada cancelada, muestra “Cancelado.”"

## Incremental 12 - Ciclos de likes

1. Desarrollar un programa que al ingresar por teclado la cantidad de likes que tiene el usuario en cada una de sus fotos (un ingreso por cada foto).
2. Contar la totalidad y mostrarla por consola.
3. Verificar la cantidad de fotos con menos de 10 y mostrar un mensaje con la cantidad de las mismas.

## extra 12

1. Solicitar al usuario que ingrese por prompt un ""1"" si quiere imprimir números impares o un ""2"" pares.
2. A partir de la opción elegida por el usuario imprimir por consola de modo descendente (desde 20 hasta 0) los números pares o impares (según la selección inicial del usuario).

## Incremental 13 - Estructuras de control - Simulando usuarios

1. Desarrollar un programa que simule un usuario registrado dentro de nuestra aplicación.

Para esto se requiere crear un programa con una función que se le ingrese por parámetro el código (o id) de un usuario y devuelva lo siguiente según el caso:

      id: 1
      respuesta: Job Daniel, fecha alta: 2021-09-16

      id:5
      respuesta: Juan, fecha alta: 2021-05-01

      id: 6
      respuesta:Jose, fecha alta: 2021-01-01

      id: 14
      respuesta:Citlalli, fecha alta: 2021-03-15

      id: 600
      respuesta: Maria, fecha alta: 2021-03-11 id: 601

1. Crear otra función que nos muestre el mes del resultado en letras por ejemplo: 03 es Marzo.

## Extra 13

1. Solicitar al usuario que ingrese un día de la semana escrito en español.

2. Almacenar lo ingresado en una variable que se enviará como parámetro de una función con nombre traducirDia()

   - Escenario 1: la variable ingresada por usuario no es un día válido.
     Dar un mensaje que indique "Lo sentimos no pudimos identificar el día ingresado"

   - Escenario 2: lo ingresado por el usuario es un día correcto.
     Mostrar al usuario el día en idioma inglés.

NOTA: El código de la función solicita debe utilizar la estructura de control SWITCH

EJEMPLO: traducirDia(""lunes""); debe imprimir por pantalla: monday

## Incremental 14

Simulando amigos:

Desarrollar un programa con una función que, agregando cualquier cantidad de amigos, permita ordenarlos alfabéticamente.
Utilizar arrays para solucionar el problema.

nota: en programación cuando se habla de "cualquier cantidad" es un ciclo (rodri)

## Extra 14

SITUACIÓN: En un local de venta de carros tenemos un array para el control de los carros a la venta estacionados en la playa:

let carros = [""Nissan March"", ""Chevrolet Aveo"", ""Volkswagen Taos"", ""KIA Rio Sedan""];

- Nos indican que se vendió el KIA Rio Sedan ubicado en al último lugar del estacionamiento. Entonces debes eliminar el último elemento.

- Luego, entra un nuevo vehículo (un “Hyundai Creta”), por lo que hay que agregarlo en el final de la lista de autos.

- Por último, se encontró un error en la lista, por error se había dado de alta un ""Nissan March"" cuando en realidad se trataba de un ""Nissan Versa"".

Entonces hay que modificar la posición número 0 de nuestra “playa de estacionamiento” por el modelo correcto de auto.

CONSIGNA:
Escribe el código necesario para cumplir con todos los requerimientos pedidos.

## Ejercicio Incremental 16

Crear un botón "Me gusta" en una publicación.

Al hacer clic en el botón, aumentar el contador de "Me gusta" en 1.

Mostrar el número actualizado de "Me gusta" en la publicación.

\*\*NOTA:

\*\*Para hacer esto, los estudiantes pueden utilizar JavaScript para acceder al elemento del DOM que representa el botón y añadir un escuchador de eventos para detectar cuando se hace clic en él.

Luego, pueden actualizar el valor del contador de "Me gusta" y mostrarlo en la página utilizando métodos DOM para acceder y modificar los elementos HTML correspondientes.

## Ejercicio Extra 16

SITUACIÓN: Crear una lista de tareas

Crea un archivo HTML con una sección <ul> vacía y un formulario que permita agregar tareas a la lista.

Escribe un archivo JavaScript que escuche el evento submit del formulario y capture el valor del campo de texto.

Usa el método createElement() para crear un elemento <li> y el método appendChild() para agregarlo a la lista.

Crea un botón "Eliminar" para cada tarea que permita borrarla de la lista. Para esto, puedes agregar un botón "Eliminar" dentro de cada elemento <li> y agregar un evento click que elimine el elemento de la lista.

## Ejercicio con Resolución 16

SITUACIÓN:

Crea un archivo HTML que contenga un formulario con dos campos de texto: uno para el nombre y otro para el correo electrónico, y un botón de "Enviar".

Agrega un manejador de eventos al formulario para que al hacer submit, se cree un nuevo elemento en el DOM que muestre el nombre y el correo electrónico ingresados en el formulario. El elemento debe ser un div con dos elementos hijos: un h2 que muestre el nombre y un p que muestre el correo electrónico.

Agrega un botón "Borrar" a cada elemento creado en el paso anterior. Al hacer clic en el botón "Borrar", se debe eliminar el elemento del DOM.

Agrega estilos CSS al formulario y al elemento creado en el paso 2 para que se vean bien en la página.

<!DOCTYPE html>
<html>
  <head>
    <title>Formulario de contacto</title>
    <style>
      body {
        font-family: sans-serif;
        max-width: 600px;
        margin: 0 auto;
      }
      form {
        margin-bottom: 1em;
      }
      label {
        display: block;
        margin-bottom: 0.5em;
      }
      input[type="text"] {
        width: 100%;
        padding: 0.5em;
        border: 1px solid #ccc;
        border-radius: 0.5em;
      }
      button[type="submit"] {
        display: block;
        margin: 1em auto 0;
        padding: 0.5em;
        border: none;
        border-radius: 0.5em;
        background-color: #007bff;
        color: #fff;
        cursor: pointer;
      }
      button[type="submit"]:hover {
        background-color: #0069d9;
      }
      .contact {
        margin-bottom: 1em;
        padding: 1em;
        border: 1px solid #ccc;
        border-radius: 0.5em;
        background-color: #f8f8f8;
      }
      .contact h2 {
        margin-top: 0;
      }
      .contact p {
        margin-bottom: 0;
      }
      .delete {
        margin-left: 1em;
        padding: 0.5em;
        border: none;
        border-radius: 0.5em;
        background-color: #dc3545;
        color: #fff;
        cursor: pointer;
      }
      .delete:hover {
        background-color: #c82333;
      }
    </style>
  </head>
  
  <body>
    <h1>Formulario de contacto</h1>
    <form id="contact-form">
      <label for="name">Nombre:</label>
      <input type="text" id="name" name="name" required>
      <label for="email">Correo electrónico:</label>
      <input type="text" id="email" name="email" required>
      <button type="submit">Enviar</button>
    </form>
    <div id="contact-list">
    </div>
    <script src="app.js"></script>
  </body>
</html>

## Incremental 17

Crear un botón "Eliminar cuenta" en la sección de configuración de la cuenta.

Al hacer clic en el botón "Eliminar cuenta", mostrar un mensaje de confirmación al usuario.

Si el usuario confirma la eliminación de la cuenta, utilizar una solicitud asincrónica (por ejemplo, mediante fetch) para eliminar la cuenta del servidor y llamar a una función de callback que redirija al usuario a la página de inicio de sesión.

Para hacer esto, los estudiantes pueden utilizar JavaScript para acceder al botón "Eliminar cuenta" y añadir un escuchador de eventos para detectar cuando se hace clic en él.
Luego, pueden utilizar una función de confirmación de JavaScript para mostrar un mensaje de confirmación al usuario y utilizar una solicitud asincrónica (por ejemplo, mediante fetch) para eliminar la cuenta del servidor si el usuario confirma la eliminación.

Finalmente, pueden utilizar una función de callback para redirigir al usuario a la página de inicio de sesión después de que se haya eliminado la cuenta.

## Extra 17

SITUACIÓN: Crear una lista de tareas

Supongamos que estamos trabajando en una aplicación de comercio electrónico que permite a los usuarios realizar pedidos de comida en línea. Una de las características principales de esta aplicación es la capacidad de enviar notificaciones en tiempo real al usuario sobre el estado de su pedido. Para hacer esto, podemos utilizar callbacks.

Por ejemplo, podemos tener una función llamada realizarPedido que se encarga de enviar el pedido al restaurante y devuelve un objeto con la información del pedido, incluyendo un ID único. Luego, podemos tener otra función llamada notificarEstadoPedido que se encarga de enviar una notificación al usuario sobre el estado actual de su pedido. Esta función toma el ID del pedido como argumento y llama a un callback una vez que se ha actualizado el estado del pedido.

## Ejercicio con Resolución 17

SITUACIÓN: Realiza una programa simulando la vida real:

Supongamos que estás trabajando en una aplicación de clima que necesita obtener la ubicación actual del usuario para mostrar las condiciones meteorológicas. Para hacer esto, puedes utilizar la API de geolocalización del navegador. Sin embargo, la API de geolocalización es asíncrona, por lo que necesitas utilizar callbacks para manejar el resultado.

NOTA: todo esto debes realizarlo sin usar ninguna API.

Supongamos que la ubicación actual del usuario es 37.7749 grados de latitud y -122.4194 grados de longitud.

Javascript.

<!DOCTYPE html>

<html>

<head>
    <title>Ejemplo de callbacks</title>
  </head>

<body>

<h1>Obtener ubicación actual</h1>

<p>Presione el botón para obtener la ubicación actual:</p>

<button id="btn-obtener-ubicacion">Obtener ubicación</button>

<div id="ubicacion"></div>

<script>

function obtenerUbicacionActual(callback) {

if (navigator.geolocation) {

navigator.geolocation.getCurrentPosition(

function(posicion) {

const latitud = posicion.coords.latitude;

const longitud = posicion.coords.longitude;

callback(null, { latitud, longitud }); // llama al callback con la ubicación

},

function(error) {

callback(error, null); // llama al callback con el error

}

);

} else {

callback('Geolocalización no soportada', null); // llama al callback con el error

}

}

const btnObtenerUbicacion = document.querySelector('#btn-obtener-ubicacion');

const ubicacionDiv = document.querySelector('#ubicacion');

btnObtenerUbicacion.addEventListener('click', function() {

obtenerUbicacionActual(function(error, ubicacion) {

if (error) {

ubicacionDiv.textContent = 'Error al obtener la ubicación: ' + error;

} else {

ubicacionDiv.textContent = 'Ubicación actual: ' + ubicacion.latitud + ', ' + ubicacion.longitud;

}

});

});

</script>

</body>

</html>

## Ejercicio Incremental 18

Refactorizar la funcionalidad de "Me gusta" usando Promesas.
Queremos crear una función que nos permita obtener el número total de "me gusta" de una publicación, utilizando una promesa para asegurarnos de que la operación sea asíncrona y no bloquee la ejecución del programa.
La función getTotalLikes recibe como parámetro el ID de la publicación de la cual queremos obtener el número total de "me gusta". La función utiliza una promesa para devolver el número de "me gusta" de la publicación.

getTotalLikes(123)
.then(likes => console.log(`La publicación tiene ${likes} me gusta`))
.catch(error => console.error(error));

## Extra 18

SITUACIÓN: Crear una lista de números pares o impares.

Primero, define una función llamada checkNumber que tome un número como parámetro y devuelva una promesa que resuelva con el mensaje "El número es par" si el número es par, o se rechace con el mensaje "El número es impar" si el número es impar.

Después, utiliza la función checkNumber para comprobar si varios números son pares o impares. Puedes hacerlo utilizando un bucle for y un array de números.

Finalmente, utiliza los métodos then() y catch() de las promesas para mostrar en la consola el resultado de cada número. Si el número es par, muestra el mensaje "El número es par". Si el número es impar, muestra el mensaje "El número es impar".

## Ejercicio con resolución 18

SITUACIÓN:

Crea una aplicación web que permita al usuario buscar información sobre una película utilizando la API de IMDb. Para ello, la aplicación debe mostrar un formulario donde el usuario pueda ingresar el título de la película que desea buscar.

Una vez que el usuario ha ingresado el título de la película y ha presionado el botón de búsqueda, la aplicación debe utilizar la API de IMDb para obtener la información de la película, incluyendo su título, año de lanzamiento, género, calificación y una breve descripción.

`
const apiKey = 'tu_api_key'; // reemplaza esto con tu propia API key

const form = document.querySelector('form');
const searchInput = document.querySelector('input');
const movieTitle = document.querySelector('#movie-title');
const movieYear = document.querySelector('#movie-year');
const movieGenre = document.querySelector('#movie-genre');
const movieRating = document.querySelector('#movie-rating');
const moviePlot = document.querySelector('#movie-plot');

form.addEventListener('submit', event => {
event.preventDefault();

const title = searchInput.value;

fetch(`https://www.omdbapi.com/?apikey=${apiKey}&t=${title}`)
.then(response => response.json())
.then(movie => {
movieTitle.innerText = movie.Title;
movieYear.innerText = movie.Year;
movieGenre.innerText = movie.Genre;
movieRating.innerText = movie.imdbRating;
moviePlot.innerText = movie.Plot;
})
.catch(error => console.error(error));
});

`

## Ejercicio Incremental 19

Contexto:

Continuamos trabajando en el proyecto para crear una red social y necesitas implementar una funcionalidad que permita a los usuarios buscar publicaciones de otras cuentas en la plataforma. Para ello, has decidido utilizar una API de redes sociales como la de Twitter o Instagram.

Tu tarea es crear una página web utilizando JavaScript, HTML y CSS donde los usuarios puedan buscar publicaciones de una cuenta en particular utilizando el nombre de usuario. Una vez que el usuario haya ingresado el nombre de usuario, deberás utilizar la API que hayas elegido para obtener los datos de las publicaciones de esa cuenta.

Luego, deberás mostrar las publicaciones en la página web utilizando HTML y CSS. Cada publicación deberá mostrar la imagen, el texto y la fecha de la publicación.

Recuerda que la página web debe ser atractiva y fácil de usar para los usuarios. Además, deberás manejar los errores que puedan surgir al utilizar la API de redes sociales de manera adecuada, para que la página no se rompa si los datos no se obtienen correctamente.

# SPRINT I - ENTREGA III

## Ejercicio Incremental 21

Mis primeros objetos:

Crear las clases y objetos necesarios para manejar los datos de los usuarios de la red social (perfil).
Crear un usuario de prueba con nombre: José Hernández.
Solicitar al menos un atributo por teclado.

## Ejercicio Extra 21

Crear una clase llamada “Cuenta” que tendrá los siguientes atributos:

- titular (que es una persona) y
- cantidad (puede tener decimales).
  (El titular será obligatorio y la cantidad es opcional. )

Construye los siguientes métodos para la clase:

- Un constructor, donde los datos pueden estar vacíos.
- Los setters y getters para cada uno de los atributos.
- El atributo no se puede modificar directamente, sólo ingresando o retirando dinero.
- \*mostrar(): Muestra los datos de la cuenta.
- \*ingresar(cantidad): se ingresa una cantidad a la cuenta, si la cantidad introducida es negativa, no se hará nada.
- \*retirar(cantidad): se retira una cantidad a la cuenta. La cuenta puede estar en números rojos.

## jercicio Incremental 22

Programando con Pseudocódigo:

- Desarrollar un algoritmo (pseudocódigo) que permita leer tres valores de likes de la red social por foto y almacenarlos en las variables A, B y C respectivamente.

NOTA: El algoritmo debe imprimir cuál es el mayor y cuál es el menor.
Recuerda constatar que los tres valores introducidos por el teclado sean valores distintos.

- Presentar un mensaje de alerta en caso de que se detecte la introducción de valores iguales.

## Ejercicio Extra 22

‌

1. Desarrolle un algoritmo en Pseudocódigo que permita leer tres valores y almacenarlos en las variables A, B y C respectivamente.
   NOTA: El algoritmo debe imprimir cuál es el mayor y cuál es el menor.
   Recuerde constatar que los tres valores introducidos por el teclado sean valores distintos.

2. Presentar un mensaje de alerta en caso de que se detecte la introducción de valores iguales.
3. Determinar si el mayor y el menor son números primos y si son números positivos.

## Ejercicio Incremental 23

Calculando:

1. Desarrollar una función llamada “ordenar_amigos” que recibe 2 parámetros:

- El primero: un número entero con la cantidad de amigos del Tecler.
- El segundo: una función que utilizaremos como callback.

2. Mostrar los siguientes console.log dentro de cada función:

Hola Tecler

Hola callback

## Ejercicio Extra 23

Crear un programa que nos permita ordenar un array de productos del cual contiene nombre y precio.
NOTA: La función debe ser un Callback que permita ordenar cualquier tipo de array con la misma estructura. El ordenamiento tiene que ser de manera natural y por precio de mayor a menor.

## Ejercicio Incremental 24

Creando usuarios al azar:

1. Desarrollar  un programa utilizando la API que nos brinda randomuser para traer información a nuestro desarrollo y poder mostrarla en nuestra red social.
2. Crear una función que reciba como parámetro un usuario de randomuser.
3. Mostrarlo en la sección de usuario; emulando a un usuario registrado en la red social.
4. Encontrar la información del usuario haciendo una llamada a: [https://randomuser.me/]

## Ejercicio Extra 24

1. Utilizar la API fakestore para resolver el siguiente ejercicio:

2.Crear un script que solicite al usuario un id de producto por prompt.

3. Con ese código de producto ingresado por el usuario, obtener toda la información de ese producto desde la API.

NOTA: A partir del JSON obtenido mostrar las propiedades: title y rate del producto del modo que prefieras (document.write, console.log, alert). Se debe hacer mediante promesas.
