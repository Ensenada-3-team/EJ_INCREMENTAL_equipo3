//Creamos la función que invocaremos al final para ejecutarla
function ordenAmigos() {
  //  nº amigos a agregar
  let numeroAmigos = prompt("Número amigos a agregar");
  
  // Crea el array vacío ([])  para almacenar los amigos añadidos
  let amigosArray = [];
  
  // Iteración para ingresar el nombre 
  for (let i = 0; i < numeroAmigos; i++) {
    let nombreAmigo = prompt("Ingresa el nombre del amigo:"); 
    //push lleva nombre al final  array
    amigosArray.push(nombreAmigo); 
  }

  amigosArray.sort(); // Sort ordena array alfabéticamente
  amigosArray.forEach(data => console.log(data)) // foreach recorre el array 
}

// Ejecutar función 
ordenAmigos();

