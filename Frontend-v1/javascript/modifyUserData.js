const formModifyUserDataDOM = document.getElementById("modify-user-data");
const formModifyUserPasswordDOM = document.getElementById(
	"modify-user-password"
);


// MODIFICAR DATOS GENÉRICOS
formModifyUserDataDOM.addEventListener("submit", async (event) => {
	event.preventDefault();

	const userData = JSON.parse(localStorage.getItem("userData"));
	const userId = userData.user_id;

	const name = document.getElementById("inputname").value;
	const firstname = document.getElementById("inputfirstname").value;
	const nickname = document.getElementById("inputnickname").value.trim() ;
	const birthdate = document.getElementById("inputbirthdate").value;
	const gender = document.getElementById("inputgender").value;
	const avatar = document.getElementById("inputavatar").value;
	const email = document.getElementById("inputemail").value.trim();
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

			if (checkResponse.status === 400 || checkResponse.status === 409 ) {
				alert(checkResult.message);
				return;
			}
		}

		//Petición PUT  para modificar los datos
		const response = await fetch(
			`http://127.0.0.1:3000/users/user/data/${userId}`,
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
		} else {
			
			alert("Tus cambios han sido guardados con éxito");
			//AQUÍ GUARDAR LOS NUEVOS CAMBIOS AL LOCALSTORAGE CUANDO FUNCIONE
		}

		// Clear input fields
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


//MODIFICAR CONTRASEÑA

formModifyUserPasswordDOM.addEventListener('submit', (event)=>{
	event.preventDefault()

	const oldPassword = document.getElementById('old-password').value.trim()
	const newPassword = document.getElementById('new-password').value.trim()
	const confirmPassword = document.getElementById('confirm-new-password').value.trim()


	
})