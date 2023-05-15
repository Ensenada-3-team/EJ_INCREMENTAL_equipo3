function ProfileSection() {
	return (
		<>
			<div className="row ipad-container">
				{/* CARD IZQUIERDA PERFIL */}
				<section className="col-md-6 col-sm-1 order-sm-1 order-1 mx-sm-1 mx-md-0 mb-3 mb-md-0 card white-card p-0 h-75 ipad-profile">
					{/* PORTADA*/}
					<div id="user-banner">
						<img
							src="geom-dark.jpg"
							alt="foto de portada"
							className="img-fluid rounded"
						/>
					</div>
					{/*FOTO+ NOMBRE + PROFESION + LOCACION + BOTONES */}
					<div className="card-body">
						<div className="d-flex justify-content-between">
							<button className="btn">
								<img
									id="imagen-usuario"
									className="avatar rounded rounded-circle position-relative border border-dark"
									alt="avatar"
									style={{ top: "-5rem", width: "6.25rem", height: "6.25rem" }}
								/>
								<i
									className="bi bi-camera"
									style={{
										position: "relative",
										top: "-4.063rem",
										right: "7.5rem",
									}}
								></i>
							</button>
							<button className="btn">
								<i
									className="bi bi-pencil position-relative "
									style={{ top: "-2rem" }}
								></i>
							</button>
						</div>
						{/* contenido principal datos */}

						{/* nombre y apellidos */}
						<div>
							<h2 id="name-firstname"></h2>
							<h5 id="user-nickname"></h5>
						</div>
						{/* ocupacion */}
						<div>
							<p id="ocupacion">Full Stack Developer</p>
						</div>
						<div className="d-flex mt-5">
							<i className="bi bi-geo-alt"></i>
							<p id="ubicacion"></p>
						</div>
						<div className="d-flex justify-content-between w-75">
							<p id="followers-counter">3456 Followers</p>
							<p id="following-counter">56 Following</p>
						</div>
					</div>
					{/* botones links mi perfil */}
					<div className="card-footer d-flex">
						<button
							className="btn btn-sm btn-primary"
							onClick={() => window.open("./user-friends.html")}
						>
							Seguidos
						</button>

						<button
							className="btn btn-sm btn-dark mx-1"
							onClick={() => window.open("./funciones.html")}
						>
							Explora mi trabajo en equipo
						</button>
					</div>
				</section>
				{/* CARD DERECHA : BIO + ICONOS REDES LINK + MAS INFO */}
				<section className="col-md-5 col-sm-1 order-sm-1 order-2 card mx-sm-0 mx-md-3 h-75 ipad-profile">
					<h4 className="card-header text-center">Acerca de mi:</h4>
					{/* bio */}
					<div className="card-body">
						<p id="acerca-de">
							Soy una persona apasionada por la aventura y la exploración al
							aire libre, especialmente en la montaña⛰ y en el surf🏄🏻‍♂️. Además,
							me encanta el mundo de la programación💻 y la tecnología, y estoy
							constantemente buscando nuevas oportunidades de aprendizaje en
							este campo.
							<br />
							Me apasiona compartir mis experiencias y conocimientos con otros,
							y me encanta por la posibilidad de inspirar a otros a explorar sus
							pasiones.
							<br />
							Para mí, la vida se trata de descubrir nuevas posibilidades y
							desafiar los límites, tanto en la naturaleza🌲🌱🍂 como en la
							tecnología.
						</p>
					</div>

					<div className=""></div>

					{/* mas info */}
					<div>
						<i className="bi bi-file-person"></i>
						<a id="link-hoja-de-vida" href="/">
							{" "}
							Más info
						</a>
					</div>
					<div>
						<i className="bi bi-envelope-at"></i>
						<a id="email" href="/">
							Email
						</a>
					</div>

					{/* links redes sociales */}
					<div className="card-footer d-flex justify-content-center mt-4">
						{/* github */}
						<button className="btn">
							<i className="bi bi-github"></i>
						</button>
						{/* linkedin */}
						<button className="btn">
							<i className="bi bi-linkedin"></i>
						</button>
						{/*  insta*/}
						<button className="btn">
							<i className="bi bi-instagram"></i>
						</button>
					</div>
				</section>
			</div>
		</>
	);
}


export default ProfileSection