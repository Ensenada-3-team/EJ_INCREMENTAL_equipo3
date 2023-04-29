// INCREMENTAL 17  - config-account.html

const eliminarCuentaBtn = document.querySelector("#eliminar-cuenta");
eliminarCuentaBtn.addEventListener("click", confirmarEliminacionCuenta);
const msjElim = document.querySelector("#msj-elim");

//RESOLUCIÓN CON ASYNC/AWAIT
function confirmarEliminacionCuenta() {
	const confirmacion = confirm(
		"¿Estás seguro de que deseas eliminar tu cuenta? Esta acción no se puede deshacer."
	);
	if (confirmacion) {
		// eliminarCuenta();
		deleteUser();
	}
}

async function eliminarCuenta() {
	try {
		msjElim.innerHTML = "Conectando al servidor... Eliminando Cuenta...";
		// Esperamos 2 segundos para simular una solicitud asincrónica al servidor
		await new Promise((resolve) => setTimeout(resolve, 3000));

		// Redireccionamos al usuario a la página de inicio de sesión
		window.location.href = "./index-login.html";
	} catch (error) {
		console.error(error);
	}
}

// BORRA EL USUARIO DE LA BASE DE DATOS
async function deleteUser() {
	const user = JSON.parse(localStorage.getItem("userData"));

	try {
		const response = await fetch(
			`http://localhost:3000/users/delete/${user.user_id}`,
			{
				method: "DELETE",
			}
		);
		const userDeleted = await response.json();

		if (response.status === 200) {
			// Si se ha eliminado el usuario, redirigir a la página "bye-bye.html"
			msjElim.innerHTML = "Conectando al servidor... Eliminando Cuenta...";
			await new Promise((resolve) => setTimeout(resolve, 3000));
			window.location.href = "./views/bye-bye.html";
		} else {
			// Si no se ha eliminado el usuario, mostrar una alerta
			alert("No se ha podido eliminar al usuario.");
		}
	} catch (error) {
		console.error(error.message);
	}
}
