import { useState } from "react";
import { useNavigate } from "react-router-dom";

import AuthService from "../../services/auth.service.js";
import Swal from "sweetalert2";

function LoginForm() {
	const [usernameOrEmail, setUsernameOrEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();
	const token = AuthService.getCurrentToken();

	const handleUsernameOrEmailChange = (event) => {
		setUsernameOrEmail(event.target.value.trim());
	};

	const handlePasswordChange = (event) => {
		setPassword(event.target.value.trim());
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			const response = await AuthService.login(usernameOrEmail, password);
			console.table(response);
			if (response.token) {
				await Swal.fire({
					position: "top-end",
					icon: "success",
					title: `Hola ${response.user.nickname}`,
					showConfirmButton: false,
					timer: 1500,
				});
				navigate("/app/feed")

				
			}
		} catch (error) {
			console.error(error);
			Swal.fire({
				icon: "error",
				title: "Oops...",
				text: `${error.response.data.message}` || "Error al iniciar sesión",
				footer: '<a href="">Why do I have this issue?</a>',
			});
		}

		setUsernameOrEmail("");
      	setPassword("");
	};

	if (token) {
		return null
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
								id="username-email"
								type="text"
								className="form-control"
								name="usuario"
								value={usernameOrEmail}
								onChange={handleUsernameOrEmailChange}
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
						¿No tienes una cuenta?{" "}
						<a href="/register">Regístrate aquí</a>.
					</p>
				</div>
			</div>
		</div>
	);
}

export { LoginForm };
