const formModifyUserDataDOM = document.getElementById("modify-user-data");
const formModifyUserPasswordDOM = document.getElementById(
	"modify-user-password"
);

formModifyUserDataDOM.addEventListener("submit", async (event) => {
	event.preventDefault();

      const userData = JSON.parse(localStorage.getItem('userData'))
      const userId = userData.user_id

	const name = document.getElementById("name").value;
	const firstname = document.getElementById("firstname").value;
	const nickname = document.getElementById("nickname").value;
	const birthdate = document.getElementById("birthdate").value;
	const gender = document.getElementById("gender").value;
	const avatar = document.getElementById("avatar").value;
	const email = document.getElementById("email").value;
	const ocupation = document.getElementById("ocupation").value;
	const location = document.getElementById("location").value;
	const grade = document.getElementById("grade").value;
	const linkedin = document.getElementById("linkedin").value;
	const language = document.getElementById("language").value;
	const hobbie = document.getElementById("hobbies").value;

	try {
		const response = await fetch(`http://127.0.0.1:3000/users/${userId}`, {
			method: "PUT",
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
		});

		const newUser = await response.json();
		console.log(newUser);


	} catch (error) {
		console.error(error.message);
		alert("Tus datos no han podido modificarse, prueba de nuevo.");
	}
});
