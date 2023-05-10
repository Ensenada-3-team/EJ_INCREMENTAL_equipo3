import React from 'react';
// import { useHistory } from 'react-router-dom'
import NavbarItem from "./NavbarItem";


function Navbar() {

	// const history = useHistory();
	// const handleBack = () => {
	// 	history.goBack();
	//     };

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
								Ojea nuestra comunidad:
								<a href="./views/public.html">
									<i className="bi bi-binoculars h1"></i>
								</a>
							</h4>
						</li>
					</ul>

					<ul className="navbar-nav flex-row ms-auto mb-2 mb-lg-0">
						{/* VOLVER ATRÁS */}
						<NavbarItem
							icon="bi-arrow-bar-left"
							alt="Volver atrás"
					
							// onClick={handleBack}
						/>

						{/* EXPLORAR LA COMUNIDAD */}
						<NavbarItem
							icon="bi-binoculars"
							alt="Explorar"
							href="./public.html"
						/>

						{/* REGISTRARSE */}
						<NavbarItem
							icon="bi-plus-square"
							alt="Registrarse"
							href="./views/user-register.html"
						/>

						{/* CERRAR SESIÓN */}
						<NavbarItem
							icon="bi-door-open"
							alt="Cerrar sesión"
							href="./index-login.html"
						/>
					</ul>
				</div>
			</div>
		</nav>
	);
}


export default Navbar;