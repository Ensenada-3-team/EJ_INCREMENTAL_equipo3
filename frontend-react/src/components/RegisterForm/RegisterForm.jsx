import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { register } from "../../store/reducers/authSlice.js";

import InputField from "../InputField/InputField.jsx";
import Swal from "sweetalert2";

function RegisterForm() {
	const navigate = useNavigate();
	const dispatch = useDispatch();

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
				const userData = {
					name: inputValues.name,
					firstname: inputValues.firstname,
					nickname: inputValues.nickname,
					birthdate: inputValues.birthdate,
					gender: inputValues.gender,
					avatar:
						inputValues.avatar ||
						"https://avatars.steamstatic.com/0086700abf852fcd014d8fa02998ce4eca2babeb_full.jpg",
					password: inputValues.password,
					email: inputValues.email,
					occupation: inputValues.occupation,
					location: inputValues.location,
					grade: inputValues.grade,
					linkedin: inputValues.linkedin,
					language: inputValues.language,
					bio: inputValues.bio,
				};

				const response = await dispatch(register(userData)).unwrap();

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
							autoComplete="on"
						/>

						<InputField
							id="firstname"
							label="Apellido:"
							type="text"
							required={true}
							value={inputValues.firstname}
							onChange={handleInputChange}
							autoComplete="on"
						/>
						<InputField
							id="nickname"
							label="Nickname:"
							type="text"
							required={true}
							value={inputValues.nickname}
							onChange={handleInputChange}
							autoComplete="off"
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
									autoComplete="off"
								/>
							</div>
							<div className="col">
								<InputField
									id="birthdate"
									label="Nacimiento:"
									type="date"
									value={inputValues.birthdate}
									onChange={handleInputChange}
									autoComplete="off"
								/>
							</div>
						</div>

						<InputField
							id="avatar"
							label="Avatar:"
							type="text"
							value={inputValues.avatar}
							onChange={handleInputChange}
							autoComplete="off"
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
									autoComplete="off"
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
									autoComplete="off"
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
							autoComplete="off"
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
									autoComplete="off"
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
									autoComplete="off"
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
							autoComplete="off"
						/>

						<InputField
							id="linkedin"
							label="Perfil de LinkedIn:"
							type="text"
							required={false}
							value={inputValues.linkedin}
							onChange={handleInputChange}
							autoComplete="off"
						/>

						<InputField
							id="language"
							label="Idiomas:"
							title="Qué idiomas dominas?"
							type="text"
							value={inputValues.language}
							onChange={handleInputChange}
							autoComplete="off"
						/>

						<InputField
							id="bio"
							label="Sobre mi:"
							title="Puedes escribir algo sobre tí, o completar este campo más tarde."
							type="text"
							value={inputValues.bio}
							onChange={handleInputChange}
							autoComplete="off"
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
