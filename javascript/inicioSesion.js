//EXTRA 11

inicioSesion = () => {

    //Variables Globales
    let user;

    //Introducir Usuario
    user = prompt('Ingrese su Nombre de Usuario:');

    //Condicional para determinar si es el Administrador
    if (user === 'Admin') {
        let password = prompt('Ingrese su contraseña:');

        //Condicional para verificar la contraseña
        (password === 'TheMaster') ? alert('Bienvenido!') :
        (password === '' || password === null) ? alert('Cancelado') :
        alert('Contraseña incorrecta');

    } else if (user === '' || user === null) {
        alert('Cancelado');
    } else {
        alert('No te conozco');
    }

}

// inicioSesion()

