import { ModifyUserData } from "./ModifyUserData";
import { ModifyUserPassword } from "./ModifyUserPassword";
import authService from "../../services/auth.service";
import { AvatarLink } from "../AvatarLink/AvatarLink";

function ConfigContainer() {
	const user = authService.getCurrentUser();

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
						<div className="col-md-4 border border-dark rounded sombra mb-3">
							<h2 className="text-center mt-2">Tu cuenta</h2>
							<div className="card white-card align-items-start mx-auto">
							<AvatarLink userId={user.user_id} avatar={user.avatar} size="avatar-lg" />
								<p id="name-firstname">{user.name} {user.firstname}</p>
								<p id="email" className="ipad-email">{user.email}</p>
								<p id="nickname"><i className="bi bi-person-fill"></i> {user.nickname}</p>

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
