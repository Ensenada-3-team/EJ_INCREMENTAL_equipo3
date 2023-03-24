## Incremental 11 - Primer programa

1. Programa que reciba por prompt el nombre, apellido, fecha de nacimiento y la cantidad de cursos de programación realizados.
   
2. Al finalizar el programa agregarle +1 a los cursos de programación realizados y mostrarlo por consola. 
   
3. Verificar si la fecha de nacimiento es anterior al año 2000 mostrar un mensaje que diga: "¿Estas seguro que eres un programador Junior?"

## extra 11 - inicio de sesión

1. Comprobar el inicio de sesión
   
2. Escribir un código que pregunte por el inicio de sesión con prompt.
   
NOTA:  Si el visitante ingresa ""Admin"", entonces prompt(pregunta) por una contraseña, si la entrada es una linea vacía o Esc – muestra “Cancelado.”, si es otra cadena de texto – entonces muestra “No te conozco”.

- Comprobacion de contraseña:
      + Si es igual a “TheMaster”, entonces muestra “Bienvenido!”,
      + Si es otra cadena de texto – muetra “Contraseña incorrecta”,
      + Para una cadena de texto vacía o una entrada cancelada, muestra “Cancelado.”"


## Incremental 12 - Ciclos de likes

1. Desarrollar un programa que al ingresar por teclado la cantidad de likes que tiene el usuario en cada una de sus fotos (un ingreso por cada foto). 
   
2. Contar la totalidad y mostrarla por consola.
   
3. Verificar la cantidad de fotos con menos de 10 y mostrar un mensaje con la cantidad de las mismas.

## extra 12

1. Solicitar al usuario que ingrese por prompt un ""1"" si quiere imprimir números impares o un ""2"" pares.  
   
2. A partir de la opción elegida por el usuario imprimir por consola de modo descendente (desde 20 hasta 0) los números pares o impares (según la selección inicial del usuario).


## Incremental 13 - Estructuras de control - Simulando usuarios

1. Desarrollar  un programa que simule un usuario registrado dentro de nuestra aplicación.  
   
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

   + Escenario 1: la variable ingresada por usuario no es un día válido.
   Dar un mensaje que indique "Lo sentimos no pudimos identificar el día ingresado"

   + Escenario 2: lo ingresado por el usuario es un día correcto.
   Mostrar al usuario el día en idioma inglés.

NOTA: El código de la función solicita debe utilizar la estructura de control SWITCH

EJEMPLO: traducirDia(""lunes""); debe imprimir por pantalla: monday


## Incremental 14

Simulando amigos:

Desarrollar  un programa con una función que, agregando cualquier cantidad de amigos, permita ordenarlos alfabéticamente. 
Utilizar arrays para solucionar el problema.

nota: en programación cuando se habla de "cualquier cantidad" es un ciclo (rodri)

## Extra 14

SITUACIÓN: En un local de venta de carros tenemos un array para el control de los carros a la venta estacionados en la playa:

let carros = [""Nissan March"", ""Chevrolet Aveo"", ""Volkswagen Taos"", ""KIA Rio Sedan""];


+ Nos indican que se vendió el KIA Rio Sedan ubicado en al último lugar del estacionamiento. Entonces debes eliminar el último elemento.

+ Luego, entra un nuevo vehículo (un “Hyundai Creta”), por lo que hay que agregarlo en el final de la lista de autos.

+ Por último, se encontró un error en la lista, por error se había dado de alta un ""Nissan March"" cuando en realidad se trataba de un  ""Nissan Versa"". 

Entonces hay que modificar la posición número 0 de nuestra “playa de estacionamiento” por el modelo correcto de auto.

CONSIGNA: 
Escribe el código necesario para cumplir con todos los requerimientos pedidos.
