import { ModifyUserData } from "./ModifyUserData";
import { ModifyUserPassword } from "./ModifyUserPassword";

function ConfigContainer() {
	return (
		<>
			<div
				className="card"
				style={{ backgroundColor: "rgba(41, 39, 39, 0.146)" }}
			>
				<div className="card-header">
					<h2>
						Configuración&nbsp;<i className="bi bi-gear"></i>
					</h2>
				</div>
				<div className="card-body w-100">
					<div className="row">
						<div className="col-md-4 border border-dark rounded sombra">
							<h2 className="text-center">Datos de la cuenta</h2>
							<div className="card white-card text-start">
								<img
									id="logged-user-image"
									className="avatar rounded rounded-circle border border-dark"
									alt="imagen usuario logueado"
								/>
								<p id="name"></p>
								<p id="firstname"></p>
								<p id="email"></p>
							</div>

							<div id="msj-elim" className="h3"></div>

							<div className="mt-4 text-center">
								<button id="eliminar-cuenta" className="btn btn-danger sombra">
									Eliminar cuenta
								</button>
							</div>
						</div>
						<div className="col-md-8">
                                          {/* FORMULARIOS  */}
							<ModifyUserData />
							<ModifyUserPassword />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default ConfigContainer;
