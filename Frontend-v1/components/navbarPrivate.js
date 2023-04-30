/*
Barra de navegación en la zona privada. 
Habilitada searchbar e iconos de navegación interna.
*/

export let navbarPrivateElement = `
<!-- BARRA DE NAVEGACION -->
		<nav class="navbar navbar-expand-lg bg-body-transparent container">
			<div class="container-fluid">
				<!-- CONTAINER DEL LOGO -->
				<div class="container col-2">
					<a class="navbar-brand" href="../views/feed.html">
						<img class="logo" src="../img/enter-black.png" alt="Logo-Tecla" />
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
							<h2 class="nav-welcome d-none d-sm-block">
								¡¡Bienvenido, Tecler!!
							</h2>
						</li>
					</ul>
					<!-- SEARCHBAR -->
					<form
						id="form-search-posts-nickname"
						class="form-inline search-box ms-auto d-none d-sm-block"
					>
						<button type="submit" class="btn-search">
							<img
								class="search-icon"
								src="../img/icons/search-icon2.png"
								alt=""
							/>
						</button>
						<input
							id="input-search-nickname"
							type="text"
							class="input-search"
							placeholder="Type to Search..."
						/>
					</form>
					<!-- SEARCHBAR HASTA AQUI -->

					<ul class="navbar-nav flex-row ms-auto mb-2 mb-lg-0">
						<!-- comunidad -->
						<li class="nav-item navbar-collapse-icons">
							<a
								class="nav-link"
								aria-current="page"
								href="../views/user-friends.html"
							>
								<i
									class="bi bi-people-fill"
									style="font-size: 1.8rem"
									id="icono"
									alt="Comunidad de amigos"
								>
								</i>
							</a>
						</li>
						<!-- config-account -->
						<li class="nav-item navbar-collapse-icons">
							<a class="nav-link" href="../views/config-account.html">
								<i
									class="bi bi-gear"
									style="font-size: 1.8rem"
									id="icono"
									alt="Configuración"
								></i>
							</a>
						</li>
						<!-- mi perfil -->
						<li class="nav-item navbar-collapse-icons">
							<a class="nav-link" href="../views/user-profile.html">
								<i
									class="bi bi-person-fill"
									style="font-size: 1.8rem"
									id="icono"
									alt="Mi perfil"
								></i>
							</a>
						</li>
						<!-- cerrar sesion -->
						<li class="nav-item navbar-collapse-icons">
							<a id="logout-link" class="nav-link" href="../index-login.html">
								<i
									class="bi bi-box-arrow-right"
									class="bi bi-people-fill"
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
		<!-- BARRA DE NAVEGACIÓN HASTA AQUÍ -->
`