import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector} from 'react-redux';
import { login } from "../../store/reducers/authSlice.js";

import authService from "../../services/auth.service.js";

import Swal from "sweetalert2";

function LoginForm() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const errorMessage = useSelector(state => state.auth.errorMessage);
	console.log(errorMessage)
	const token = authService.getCurrentToken();

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
		}
		try {
			const response = await dispatch(login(userData));
			console.log(response)
			
			if (response.type === "auth/login/fulfilled") {
				await Swal.fire({
					position: "top-end",
					icon: "success",
					title: `Hola ${response.payload.user.nickname}`,
					showConfirmButton: false,
					timer: 1500,
				});

				navigate("/app/feed");
			}

			if (response.type === "auth/login/rejected") {
				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: `${response.error.message}`,
				});
			}
		} catch (error) {
			console.log(error)
			Swal.fire({
				icon: "error",
				title: "Oops...",
				text:  "Error al iniciar sesión",
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
							<label htmlFor="username-email" className="form-label">
								Nombre de usuario o correo electrónico:
							</label>
							<input
								id="nickname-email"
								type="text"
								className="form-control"
								name="usuario"
								value={nicknameOrEmail}
								onChange={handlenicknameOrEmailChange}
								required
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="password" className="form-label">
								Password:
							</label>
							<input
								id="password"
								type="password"
								className="form-control"
								name="password"
								value={password}
								onChange={handlePasswordChange}
								required
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
