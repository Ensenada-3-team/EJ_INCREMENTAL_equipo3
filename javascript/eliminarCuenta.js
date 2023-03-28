// INCREMENTAL 17

// Creamos una lista de usuarios y un usuario ficticio
let usuariosList = [1, 2, 3,'Pepe'];

const usuarioFicticio = { 
      id: 600,
      nombre: 'John', 
      apellido: 'Doe', 
      email: 'johndoe@example.com' 
};

usuariosList.push(usuarioFicticio)

//accedemos al DOM del botón que elimina cuenta
const eliminarCuentaBtn = document.querySelector('#eliminar-cuenta');
// const eliminarcuentaBtnconID = document.getElementById('eliminar-cuenta')

eliminarCuentaBtn.addEventListener('click', confirmarEliminacionCuenta);


function confirmarEliminacionCuenta() {
      const confirmacion = confirm('¿Estás seguro de que deseas eliminar tu cuenta? Esta acción no se puede deshacer.');

      if (confirmacion) {
            eliminarCuenta();
      }
}


async function eliminarCuenta() {

      try {
            // Simulamos la eliminación de la cuenta del usuario ficticio
            console.log(usuariosList)
            console.table(usuarioFicticio)

            delete usuarioFicticio;
            usuariosList.pop()

            console.table(usuarioFicticio)
            console.log(usuariosList)

            // Esperamos 2 segundos para simular una solicitud asincrónica al servidor
            await new Promise(resolve => setTimeout(resolve, 10000));

            // Redireccionamos al usuario a la página de inicio de sesión
            // window.location.href = '../login.html';
            window.open('./login.html', '_blank')

      } catch (error) {
            console.error(error);
      }
}
    