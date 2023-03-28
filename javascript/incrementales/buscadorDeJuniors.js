//INCREMENTAL 11

buscadorJuniors = () => {
    let nombre = prompt('Ingresa tu nombre')
    let apellido = prompt('Ingresa tu apellido')
    let añoNacimiento = parseInt(prompt('Ingresa tu año de nacimiento'))
    let numCursos = parseInt(prompt('Ingresa el número de cursos de programación realizados'))
    //Condicion hecha con if
    if(añoNacimiento < 2000 ) {
        alert('¿Estás seguro de que eres un programador Junior?')
    }
    
    //Condición hecha con operador ternario en vez de con IF 
    añoNacimiento < 2000 ? alert('¿Estás seguro de que eres un programador Junior?') : alert('Ya te queda poquito para ser un pro')
    
    alert(`${nombre} ${apellido}, naciste en el año ${añoNacimiento} y realizaste ${numCursos + 1} cursos de programación.`)
};

// buscadorJuniors()
