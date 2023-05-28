import { useState } from "react";
import { useNavigate } from "react-router-dom";

import AuthService from "../../services/auth.service.js";
import InputField from "../InputField/InputField.jsx";
import Swal from "sweetalert2";

function RegisterForm() {
	const navigate = useNavigate();
	const [inputValues, setInputValues] = useState({
		name: "",
		firstname: "",
		nickname: "",
		birthdate: "",
		gender: "",
		avatar: "",
		password: "",
		conf_password: "",
		email: "",
		occupation: "",
		location: "",
		grade: "",
		linkedin: "",
		language: "",
		bio: "",
	});

	const genderOptions = [
		{ value: "", label: "" },
		{ value: "M", label: "Masculino" },
		{ value: "F", label: "Femenino" },
		{ value: "O", label: "Otro" },
	];

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setInputValues({
			...inputValues,
			[name]: value,
		});
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		if (inputValues.password === inputValues.conf_password) {
			try {
				const response = await AuthService.register(
					inputValues.name,
					inputValues.firstname,
					inputValues.nickname,
					inputValues.birthdate,
					inputValues.gender,
					inputValues.avatar ||
						"https://avatars.steamstatic.com/0086700abf852fcd014d8fa02998ce4eca2babeb_full.jpg",
					inputValues.password,
					inputValues.email,
					inputValues.occupation,
					inputValues.location,
					inputValues.grade,
					inputValues.linkedin,
					inputValues.language,
					inputValues.bio
				);
				console.log(response);
				if (response === 200) {
					Swal.fire({
						title: `¡${inputValues.nickname}, te has registrado con éxito!\n¡Te redirigimos al login ipso facto!`,
						width: 400,
						padding: "2em",
						color: "#716add",
						background: "#fff url(/images/trees.png)",
						backdrop: `
                                      rgba(0,0,123,0.4)
                                      url("/images/nyan-cat.gif")
                                      left top
                                      no-repeat
                                    `,
					});
					navigate("/");
				}
			} catch (error) {
				console.error(error.message);
				if (error.message === "Usuario menor de 18 años") {
					Swal.fire("Debes ser mayor de 18 años para registrarte.");
				} else if (
					error.message === "Ya existe un usuario con ese nickname y email"
				) {
					Swal.fire(
						"El nickname y el email ya existen en la base de datos. Prueba a cambiarlos"
					);
				} else {
					Swal.fire(error.message);
				}
			}
		} else {
			Swal.fire(
				"La contraseña y su confirmación no coinciden.\nHan de tener como mínimo:\n-8 caracteres \n-al menos un número,\n-un caracter especial,\n-una letra mayúscula y \n-una minúscula."
			);
		}
	};

	return (
		<>
			<div className="col-md-5 p-0 mx-auto">
				<div className="card">
					<h2 className="card-header text-center">Únete a la comunidad:</h2>
					<form className="w-75" onSubmit={handleSubmit}>
						<InputField
							id="name"
							label="Nombre:"
							type="text"
							required={true}
							value={inputValues.name}
							onChange={handleInputChange}
						/>

						<InputField
							id="firstname"
							label="Apellido:"
							type="text"
							required={true}
							value={inputValues.firstname}
							onChange={handleInputChange}
						/>
						<InputField
							id="nickname"
							label="Nickname:"
							type="text"
							required={true}
							value={inputValues.nickname}
							onChange={handleInputChange}
						/>
						<div className="row">
							<div className="col">
								<InputField
									id="gender"
									label="Género: "
									type="select"
									required={true}
									value={inputValues.gender}
									onChange={handleInputChange}
									options={genderOptions}
								/>
							</div>
							<div className="col">
								<InputField
									id="birthdate"
									label="Nacimiento:"
									type="date"
									value={inputValues.birthdate}
									onChange={handleInputChange}
								/>
							</div>
						</div>

						<InputField
							id="avatar"
							label="Avatar:"
							type="text"
							value={inputValues.avatar}
							onChange={handleInputChange}
						/>
						<div className="row">
							<div className="col">
								<InputField
									id="password"
									label="Contraseña:"
									type="password"
									title="8 caracteres con mayúscula, minúscula, número y caracter especial."
									placeholder="8 caracteres con mayúscula, minúscula, número y caracter especial."
									required={true}
									value={inputValues.password}
									onChange={handleInputChange}
								/>
							</div>
							<div className="col">
								<InputField
									id="conf_password"
									label="Confírmala: 🔑"
									type="password"
									required={true}
									value={inputValues.conf_password}
									onChange={handleInputChange}
								/>
							</div>
						</div>

						<InputField
							id="email"
							label="Email:"
							type="email"
							placeholder="ejemplo@mail.com"
							required={true}
							value={inputValues.email}
							onChange={handleInputChange}
						/>

						<div className="row">
							<div className="col">
								<InputField
									id="occupation"
									label="Ocupación:"
									type="text"
									required={true}
									value={inputValues.occupation}
									onChange={handleInputChange}
								/>
							</div>
							<div className="col">
								<InputField
									id="location"
									label="Ubicación:"
									type="text"
									required={true}
									value={inputValues.location}
									onChange={handleInputChange}
								/>
							</div>
						</div>

						<InputField
							id="grade"
							label="Grado académico:"
							type="text"
							required={true}
							value={inputValues.grade}
							onChange={handleInputChange}
						/>

						<InputField
							id="linkedin"
							label="Perfil de LinkedIn:"
							type="text"
							required={true}
							value={inputValues.linkedin}
							onChange={handleInputChange}
						/>

						<InputField
							id="language"
							label="Idiomas:"
							title="Qué idiomas dominas?"
							type="text"
							value={inputValues.language}
							onChange={handleInputChange}
						/>

						<InputField
							id="bio"
							label="Sobre mi:"
							title="Puedes escribir algo sobre tí, o completar este campo más tarde."
							type="text"
							value={inputValues.bio}
							onChange={handleInputChange}
						/>
						<div>
							<button
								type="submit"
								className="btn btn-dark btn-block btn-large sombra mb-3"
							>
								Registrarse
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}

export { RegisterForm };
