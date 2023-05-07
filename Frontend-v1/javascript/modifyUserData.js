// Formularios en el DOM de donde vamos a obtener los datos a modificar.
const formModifyUserDataDOM = document.getElementById("modify-user-data");
const formModifyUserPasswordDOM = document.getElementById(
	"modify-user-password"
);

// Recogemos los datos que tenemos guardados en el Localstorage para usarlos en las peticiones
const token = JSON.parse(localStorage.getItem("token"));
// const userData = JSON.parse(localStorage.getItem("userData")); MISTERIO: DICE QUE YA ESTÁ DECLARADO EN ESTE FICHERO
const userId = userData.user_id;



// EVENTLISTENER : MODIFICAR DATOS GENÉRICOS
formModifyUserDataDOM.addEventListener("submit", async (event) => {
	event.preventDefault();

	const name = document.getElementById("inputname").value;
	const firstname = document.getElementById("inputfirstname").value;
	const nickname = document.getElementById("inputnickname").value.trim() || userData.nickname;
	const birthdate = document.getElementById("inputbirthdate").value;
	const gender = document.getElementById("inputgender").value || userData.gender;
	const avatar = document.getElementById("inputavatar").value;
	const email = document.getElementById("inputemail").value.trim() || userData.email;
	const ocupation = document.getElementById("inputocupation").value;
	const location = document.getElementById("inputlocation").value;
	const grade = document.getElementById("inputgrade").value;
	const linkedin = document.getElementById("inputlinkedin").value;
	const language = document.getElementById("inputlanguage").value;
	const hobbie = document.getElementById("inputhobbies").value;

	try {
		//Petición para contrastar si el nickname o el email ya existen en la bd sin contar con los del usuario
		if (nickname !== userData.nickname || email !== userData.email) {
			const checkResponse = await fetch(
				`http://127.0.0.1:3000/users/check/${userId}?nickname=${nickname}&email=${email}`
			);

			const checkResult = await checkResponse.json();

			if (checkResponse.status === 400 || checkResponse.status === 409) {
				alert(checkResult.message);
				return;
			}
		}

		//Petición PUT  para modificar los datos
		const response = await fetch(
			`http://127.0.0.1:3000/users/change-data/${userId}`,
			{
				method: "PATCH",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					name: name,
					firstname: firstname,
					nickname: nickname,
					birthdate: birthdate,
					gender: gender,
					avatar: avatar,
					email: email,
					ocupation: ocupation,
					location: location,
					grade: grade,
					linkedin: linkedin,
					language: language,
					hobbie: hobbie,
				}),
			}
		);

		const updatedUser = await response.json();
		console.log(updatedUser);

		if (updatedUser.message) {
			alert(updatedUser.message);
			alert("\nPor seguridad debes volver a loguearte.");
			window.location.href = '../index-login.html'
		} else {
			alert("Ha habido algún problema con la modificación de tus datos, vuelve a intentarlo.");
		}

		// Limpiamos los valores de los inputs
		document.getElementById("inputname").value = "";
		document.getElementById("inputfirstname").value = "";
		document.getElementById("inputnickname").value = "";
		document.getElementById("inputbirthdate").value = "";
		document.getElementById("inputgender").value = "";
		document.getElementById("inputavatar").value = "";
		document.getElementById("inputemail").value = "";
		document.getElementById("inputocupation").value = "";
		document.getElementById("inputlocation").value = "";
		document.getElementById("inputgrade").value = "";
		document.getElementById("inputlinkedin").value = "";
		document.getElementById("inputlanguage").value = "";
		document.getElementById("inputhobbies").value = "";
	} catch (error) {
		console.error(error.message);
		alert("Tus datos no han podido modificarse, prueba de nuevo.");
	}
});



// EVENTLISTENER : MODIFICAR CONTRASEÑA
formModifyUserPasswordDOM.addEventListener("submit", async (event) => {
	event.preventDefault();

	const oldPassword = document.getElementById("old-password").value.trim();
	const newPassword = document.getElementById("new-password").value.trim();
	const confirmPassword = document.getElementById("confirm-new-password").value.trim();

	// Verificar si la nueva contraseña y la confirmación son iguales
	const passwordsMatch = newPassword === confirmPassword;

	if (passwordsMatch) {
		
		// Crear objeto con los datos a enviar
		const data = {
			userId,
			oldPassword,
			password: newPassword,
		};

		try {
			// Realizamos la solicitud al endpoint para modificar contraseña
			const response = await fetch("http://localhost:3000/auth/change-password", {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
					'Authorization': `Bearer ${token}`
				},
				body: JSON.stringify(data),
			});

			// Verificamos que la respuesta del servidor sea OK (status 200 === response.ok)
			if (response.ok) {
				const result = await response.json();
				alert(result.message + "\nSerás redirigido a la página de inicio para loguearte de nuevo :)");
				window.location.href = "../index-login.html"
				
			} else {
				const error = await response.json();
				console.error(error.message);
				alert(error.message)
				
			}
		} catch (error) {
			console.error("Error:", error);
			alert("Error:", error)
			
		}
	} else {
		
		console.error("La nueva contraseña y la confirmación no coinciden");
		alert("La nueva contraseña y la confirmación no coinciden")
		
	}
});
