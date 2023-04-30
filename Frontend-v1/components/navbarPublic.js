/*
Componente navbar, falta dinamizar los campos que cambian según donde se vaya a usar - REVISAR -

*/

export let navbarPublicElement = `
<!-- BARRA DE NAVEGACION -->
		<nav class="navbar navbar-expand-lg bg-body-transparent container">
			<div class="container-fluid">
				<!-- CONTAINER DEL LOGO -->
				<div class="container col-2">
					<a class="navbar-brand" >
						<img class="logo" src="./img/enter-black.png" alt="Logo-Tecla" />
					</a>
				</div>
				<!-- MENÚ HAMBURGUESA -->
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

				<!-- DESDE AQUÍ TODO LO QUE SE ESCONDE -->
				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav">
						<li class="nav-item">
							<h4 class="nav-welcome d-none d-sm-block">
								Ojea nuestra comunidad:
								<a href="./views/public.html"><i class="bi bi-binoculars h1"></i></a>
							</h2>
						</li>
					</ul>
					<!-- SEARCHBAR NO EN INDEX-LOGIN -->
					<!-- <form class="form-inline search-box ms-auto d-none d-sm-block">
						<button class="btn-search">
							<img
								class="search-icon"
								src="./img/icons/search-icon2.png"
								alt=""
							/>
						</button>
						<input
							type="text"
							class="input-search"
							placeholder="Type to Search..."
						/>
					</form> -->
					<!-- SEARCHBAR HASTA AQUI -->

					<ul class="navbar-nav flex-row ms-auto mb-2 mb-lg-0">
						<!-- EXPLORAR LA COMUNIDAD -->
						<li class="nav-item navbar-collapse-icons">
							<a class="nav-link" href="./public.html">
								<i
									class="bi bi-binoculars"
									style="font-size: 1.8rem"
									id="icono"
									alt="Explorar"
								></i>
							</a>
						</li>
						<!-- REGISTRARSE -->
						<li class="nav-item navbar-collapse-icons">
							<a class="nav-link" href="./views/user-register.html">
								<i
									class="bi bi-plus-square"
									style="font-size: 1.8rem"
									id="icono"
									alt="Registrarse"
								></i>
							</a>
						</li>
						<!-- IR AL LOGIN- LANDING-PAGE -->
						<li class="nav-item navbar-collapse-icons">
							<a class="nav-link" href="./index-login.html">
								<i
									class="bi bi-door-open"
									style="font-size: 1.8rem"
									id="icono"
									alt="Cerrar sesión"
								></i>
							</a>
						</li>
						
					</ul>
				</div>
			</div>
		</nav>


`