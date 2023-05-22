import authService from "../../services/auth.service";

function InterestsSection() {
	const token = authService.getCurrentToken();
	if (!token) {
		return null
	}
	return (
		<div className="col-md-2 col-lg-2 d-none d-md-block">
			<div className="container">
				<div className="row">
					<div className="col card w-100 text-center">
						<h4 className="d-lg-block d-md-none card-header">Intereses</h4>
						<div>
							<a href="../views/public.html">
								<i
									className="bi bi-newspaper"
									style={{ fontSize: "1.5rem", transform: "scale(2)" }}
									id="icono"
									alt="noticias"
								></i>
							</a>
							<h6 className="d-lg-block d-md-none">Reciente</h6>
						</div>
						<div>
							<a href="" target="">
								<i
									className="bi bi-chat-dots"
									style={{ fontSize: "1.5rem", transform: "scale(2)" }}
									id="icono"
									alt="aleatorio"
								></i>
							</a>
							<h6 className="d-lg-block d-md-none">Mensajes</h6>
						</div>
						<div>
							<a href="" target="">
								<i
									className="bi bi-search"
									style={{ fontSize: "1.5rem", transform: "scale(2)" }}
									id="icono"
									alt="New"
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
							<a href="../views/user-profile.html">
								<i
									className="bi bi-person"
									style={{ fontSize: "1.5rem", transform: "scale(2)" }}
									id="icono"
									alt="guardados"
								></i>
							</a>
						</div>
						<div>
							<a href="../views/config-account.html">
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
	);
}


export default InterestsSection ;