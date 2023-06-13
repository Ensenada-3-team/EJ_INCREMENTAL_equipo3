import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/reducers/authSlice.js";

import InputField from "../InputField/InputField.jsx";
import Swal from "sweetalert2";

function LoginForm() {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const token = useSelector((state) => state.auth.token);

	const [nicknameOrEmail, setnicknameOrEmail] = useState("");
	const [password, setPassword] = useState("");

	const handlenicknameOrEmailChange = (event) => {
		setnicknameOrEmail(event.target.value.trim());
	};

	const handlePasswordChange = (event) => {
		setPassword(event.target.value.trim());
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		const userData = {
			nicknameOrEmail: nicknameOrEmail,
			password: password,
		};
		try {
			const response = await dispatch(login(userData)).unwrap();
			console.log(response);

			if (response.token) {
				await Swal.fire({
					position: "top-end",
					icon: "success",
					title: `Hola ${response.user.nickname}`,
					showConfirmButton: false,
					timer: 1500,
				});

				navigate("/app/feed");
			}
		} catch (rejectedValueOrSerializedError) {
			console.log(rejectedValueOrSerializedError);
			Swal.fire({
				icon: "error",
				title: "Oops...",
				text: `${rejectedValueOrSerializedError.message}` || "Algo salió mal",
			});
		}

		setnicknameOrEmail("");
		setPassword("");
	};

	if (token) {
		return null;
	}

	return (
		<div className="col-md-4 p-0 mx-auto">
			<div className="card">
				<h2 className="card-header text-center">Inicia sesión en Tecla</h2>
				<div className="card-body">
					<form onSubmit={handleSubmit}>
						<div className="mb-1">
							<InputField
								id="nickname-email"
								type="text"
								label="Nombre de usuario o correo electrónico: "
								value={nicknameOrEmail}
								onChange={handlenicknameOrEmailChange}
								required={true}
								autoComplete="on"
							/>
						</div>
						<div className="mb-3">
							<InputField
								id="password"
								type="password"
								label="Password:"
								value={password}
								onChange={handlePasswordChange}
								required={true}
								autoComplete="off"
							/>
						</div>
						<button
							type="submit"
							className="btn btn-dark btn-block btn-large sombra mb-3"
						>
							Iniciar sesión
						</button>
					</form>
					<p className="text-center">
						¿No tienes una cuenta? <a href="/register">Regístrate aquí</a>.
					</p>
				</div>
			</div>
		</div>
	);
}

export { LoginForm };
