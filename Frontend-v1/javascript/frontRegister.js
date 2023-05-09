const registerForm = document.getElementById("procesar-registro");

registerForm.addEventListener("submit", async (event) => {
	event.preventDefault();

	const name = document.getElementById("name").value.trim();
	const firstname = document.getElementById("firstname").value.trim();
	const nickname = document.getElementById("nickname").value.trim();
	const birthdate = document.getElementById("birthdate").value.trim();
	const gender = document.getElementById("gender").value.trim();
	const avatar = document.getElementById("avatar").value.trim();
	const password = document.getElementById("password").value.trim();
	const confPassword = document.getElementById("conf_password").value.trim();
	const email = document.getElementById("email").value.trim();
	const ocupation = document.getElementById("ocupation").value.trim();
	const location = document.getElementById("location").value.trim();
	const grade = document.getElementById("grade").value.trim();
	const linkedin = document.getElementById("linkedin").value.trim();
	const language = document.getElementById("language").value.trim();
	const hobby = document.getElementById("hobbies").value.trim();

	if (password === confPassword) {
		try {
			const response = await fetch("http://127.0.0.1:3000/auth/register", {
				method: "POST",
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
					password: password,
					email: email,
					ocupation: ocupation,
					location: location,
					grade: grade,
					linkedin: linkedin,
					language: language,
					hobby: hobby,
				}),
			});

			const newUser = await response.json();
			console.log(newUser);
			// Comunicamos al usuario si el nickname o el email ya están en la bd, o que debe ser mayor de 18 años
			if (newUser.message) {
				if (newUser.message === 'Usuario menor de 18 años') {
                              alert('Debes ser mayor de 18 años para registrarte.');
                        }
                        if (newUser.message ===  "Ya existe un usuario con ese nickname y email"){
                              alert('El nickname y el email ya existen en la base de datos. Prueba a cambiarlos')
                        }
                        if (newUser.message ===  "Ya existe un usuario con ese nickname"){
                              alert('Ya existe un usuario con ese nickname')
                        }
                        if (newUser.message ===  "Ya existe un usuario con ese email"){
                              alert("Ya existe un usuario con ese email")
                        }
			} else {
				// Si está todo bien, redirige al index
				alert(
					"¡Te has registrado con éxito!\n¡Te redirigimos al login ipso facto!"
                              );
                              window.location.href = "../index-login.html";
			}
		} catch (error) {
			console.error(error.message);
		}
	} else {
		alert(
			"Por favor introduzca la misma contraseña.\nHa de tener como mínimo 8 caracteres que contengan al menos:\nun número,\nun caracter especial,\nuna letra mayúscula y una minúscula."
		);
	}
});
