import React from 'react';
import NavbarItem from "./NavbarItem";

function Navbar() {
	return (
		<nav class="navbar navbar-expand-lg bg-body-transparent container">
			<div class="container-fluid">
				{/* COMPONENTE DEL LOGO */}
				<div class="container col-2">
					<a class="navbar-brand">
						<img class="logo" src="./img/enter-black.png" alt="Logo-Tecla" />
					</a>
				</div>

				{/* MENÚ HAMBURGUESA */}
				<button
					class="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span class="navbar-toggler-icon"></span>
				</button>

				{/* ELEMENTOS DE LA NAVBAR */}
				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav">
						{/* MENSAJE DE BIENVENIDA */}
						<li class="nav-item">
							<h4 class="nav-welcome d-none d-sm-block">
								Ojea nuestra comunidad:
								<a href="./views/public.html">
									<i class="bi bi-binoculars h1"></i>
								</a>
							</h4>
						</li>
					</ul>

					<ul class="navbar-nav flex-row ms-auto mb-2 mb-lg-0">
						{/* VOLVER ATRÁS */}
						<NavbarItem
							icon="bi-arrow-bar-left"
							alt="Volver atrás"
							href="javascript:history.back()"
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