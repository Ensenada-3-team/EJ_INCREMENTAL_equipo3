import { useNavigate } from "react-router-dom";

function MainProfileCard(props) {
	const { profileData } = props;
	const navigate = useNavigate();

	return (
		<>
			{/* --- CARD IZQUIERDA PERFIL ---*/}
			<section className="col-md-6 col-sm-1 order-sm-1 order-1 mx-sm-1 mx-md-0 mb-md-0 card white-card p-0 ipad-profile">
				{/* PORTADA*/}
				<div id="user-banner">
					<img
						src="geom-dark.jpg"
						alt="foto de portada"
						className="img-fluid rounded"
					/>
				</div>
				{/* BODY - FOTO + DATOS */}
				<div className="card-body w-100">
					{/* FOTO + MODIFICAR */}
					<div
						className="d-flex justify-content-between"
						style={{ position: "relative", marginTop: '-3.5rem' }}
					>
						<button className="btn">
							<img
								id="imagen-usuario"
								className="avatar avatar-lg rounded rounded-circle position-relative border border-dark"
								alt="avatar"
								src={profileData.avatar}
							/>
						</button>
						<button className="btn" aria-label="Editar foto de perfil">
							<i className="bi bi-pencil position-relative"></i>
						</button>
					</div>
					{/* DATOS  */}
					<div>
						<h2 id="name-firstname">
							{profileData.name} {profileData.firstname}
						</h2>
						<h5 id="user-nickname">({profileData.nickname})</h5>
					</div>
					<div>
						<p id="ocupacion" className="mb-0">{profileData.ocupation}</p>
						<p id="ocupacion">{profileData.grade}</p>
					</div>
					<div className="d-flex">
						<i className="bi bi-geo-alt"></i>
						<p id="ubicacion">{profileData.location}</p>
					</div>
					<div>
						<p id="friends-count">20 amigos Teclers </p>
					</div>
				</div>
				{/* FOOTER - BOTONES LINKS */}
				<div className="card-footer d-flex">
					<button
						className="btn btn-sm btn-primary"
						onClick={() => navigate("/friends")}
					>
						Amigos
					</button>

					<button
						className="btn btn-sm btn-dark mx-1"
						onClick={() => navigate("./funciones.html")}
					>
						Explora mi trabajo en equipo
					</button>
				</div>
			</section>
		</>
	);
}

export { MainProfileCard };
