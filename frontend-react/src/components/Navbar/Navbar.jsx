import { NavbarItem } from "../NavbarItem/NavbarItem";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import authService from "../../services/auth.service";
import Swal from "sweetalert2";

function Navbar() {
	const location = useLocation();
	const navigate = useNavigate();

	const user = authService.getCurrentUser()
	const token= authService.getCurrentToken();

	const greeting = user
		? user.user.gender === "F"
			? `Bienvenida ${user.user.name}`
			: `Bienvenido ${user.user.name}`
		: null;

	const handleLogout = async () => {
		await Swal.fire({
			title: `Hasta la próxima ${user.user.nickname} `,
			text: "Tu comunidad te espera!",
			imageUrl: "https://unsplash.it/400/200",
			imageWidth: 400,
			imageHeight: 200,
			imageAlt: "Custom image",
		});
		authService.logout()
		navigate("/");
	};

	return (
		<nav className="navbar navbar-expand-lg bg-body-transparent container">
			<div className="container-fluid">
				{/* COMPONENTE DEL LOGO */}
				<div className="container col-2">
					<a className="navbar-brand">
						<img className="logo" src="enter-black.png" alt="Logo-Tecla" />
					</a>
				</div>

				{/* MENÚ HAMBURGUESA */}
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>

				{/* ELEMENTOS DE LA NAVBAR */}
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav">
						{/* MENSAJE DE BIENVENIDA */}
						<li className="nav-item">
							<h4 className="nav-welcome d-none d-sm-block">
								{!token ? (
									<>
										Ojea nuestra comunidad:
										<a href="./views/public.html">
											<i className="bi bi-binoculars h1"></i>
										</a>
									</>
								) : (
									greeting
								)}
							</h4>
						</li>
					</ul>

					<ul className="navbar-nav flex-row ms-auto mb-2 mb-lg-0">
						{/* VOLVER ATRÁS */}
						{location.pathname !== "/" && (
							<NavbarItem
								icon="bi-arrow-bar-left"
								alt="Volver atrás"
								// onClick={handleBack}
							/>
						)}

						{/* EXPLORAR LA COMUNIDAD - PÚBLICO*/}
						{!token && (
							<NavbarItem
								icon="bi-binoculars"
								alt="Explorar"
								href="./public.html"
							/>
						)}

						{/* REGISTRARSE */}
						{!token && (
							<NavbarItem
								icon="bi-plus-square"
								alt="Registrarse"
								href="./views/user-register.html"
							/>
						)}

						{/* FEED */}
						{token && (
							<NavbarItem icon="bi-house" alt="Feed personal" to="/feed" />
						)}

						{/* PERFIL */}
						{token && (
							<NavbarItem
								icon="bi-person-fill"
								alt="Mi perfil"
								href="./index-login.html"
							/>
						)}

						{/* COMUNIDAD */}
						{token && (
							<NavbarItem
								icon="bi-people-fill"
								alt="Comunidad"
								href="./index-login.html"
							/>
						)}

						{/* SETTINGS */}
						{token && (
							<NavbarItem
								icon="bi-gear"
								alt="Settings"
								href="./index-login.html"
							/>
						)}

						{/* CERRAR SESIÓN */}
						{token && (
							<NavbarItem
								icon="bi-box-arrow-right"
								alt="Cerrar sesión"
								onClick={handleLogout}
							/>
						)}
					</ul>
				</div>
			</div>
		</nav>
	);
}

export { Navbar };
