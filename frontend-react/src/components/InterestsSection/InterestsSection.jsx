import authService from "../../services/auth.service";

function InterestsSection() {
	const token = authService.getCurrentToken();
	if (!token) {
		return null
	}
	return (
		<div className="col-md-2 col-lg-2 d-none d-md-block z-1">
		<div className="col-md-2 col-lg-2 d-none d-md-block position-fixed start-0 end-0 z-0 p-0">
			<div className="container">
				<div className="row">
					<div className="col card w-100 text-center">
						<h4 className="d-lg-block d-md-none card-header">Intereses</h4>
						<div>
							<a href="https://github.com/Ensenada-3-team/EJ_INCREMENTAL_equipo3" target="_blank">
								<i
									className="bi bi-github"
									style={{ fontSize: "1.5rem", transform: "scale(2)" }}
									id="icono"
									title="Repositorio del proyecto"
									alt="Github repositorio"
								></i>
							</a>
							<h6 className="d-lg-block d-md-none">Github</h6>
						</div>
						<div>
							<a href="https://www.linkedin.com/" target="_blank">
								<i
									className="bi bi-linkedin"
									style={{ fontSize: "1.5rem", transform: "scale(2)" }}
									id="icono"
									title="Linkedin"
									alt="Linkedin"
								></i>
							</a>
							<h6 className="d-lg-block d-md-none">Linkedin</h6>
						</div>
						<div>
							<a href="/public" target="">
								<i
									className="bi bi-search"
									style={{ fontSize: "1.5rem", transform: "scale(2)" }}
									id="icono"
									alt="lo mas reciente"
								></i>
							</a>
							<h6 className="d-lg-block d-md-none">Empleo</h6>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col card w-100">
						<h4 className="d-lg-block d-md-none card-header">Cuenta</h4>
						<div>
							<a href="/app/profile">
								<i
									className="bi bi-person"
									style={{ fontSize: "1.5rem", transform: "scale(2)" }}
									id="icono"
									alt="perfil"
								></i>
							</a>
						</div>
						<div>
							<a href="/app/settings">
								<i
									className="bi bi-gear"
									style={{ fontSize: "1.5rem", transform: "scale(2)" }}
									id="icono"
									alt="configuración"
								></i>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
		
	);
}


export default InterestsSection ;