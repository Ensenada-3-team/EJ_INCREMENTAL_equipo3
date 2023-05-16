import { useNavigate} from 'react-router-dom'

function MainProfileCard(props) {
      const { profileData } = props;
      const navigate = useNavigate();

	return (
		<>
			{/* --- CARD IZQUIERDA PERFIL ---*/}
			<section className="col-md-6 col-sm-1 order-sm-1 order-1 mx-sm-1 mx-md-0 mb-3 mb-md-0 card white-card p-0 h-75 ipad-profile">
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
					<div className="d-flex justify-content-between">
						<button className="btn">
							<img
								id="imagen-usuario"
								className="avatar rounded rounded-circle position-relative border border-dark"
								alt="avatar"
								style={{ top: "-5rem", width: "6.25rem", height: "6.25rem" }}
                                                src={profileData.avatar}
							/>
							
						</button>
						<button className="btn">
							<i
								className="bi bi-pencil position-relative "
								style={{ top: "-3rem" }}
							></i>
						</button>
					</div>
					{/* DATOS  */}
					<div>
						<h2 id="name-firstname">{profileData.name} {profileData.firstname}</h2>
						<h5 id="user-nickname">({profileData.nickname})</h5>
					</div>
					<div>
						<p id="ocupacion">{profileData.ocupation}</p>
                                    <p id="ocupacion">{profileData.grade}</p>
					</div>
					<div className="d-flex mt-5">
						<i className="bi bi-geo-alt"></i>
						<p id="ubicacion">{profileData.location}</p>
					</div>
					<div className="d-flex justify-content-between w-75">
						<p id="friends-count">20 Teclers conectados</p>
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