import { useNavigate } from "react-router-dom";

import authService from "../../services/auth.service";
import UserService from '../../services/user.service';

import { ModifyUserData } from "./Forms/ModifyUserData";
import { ModifyUserPassword } from "./Forms/ModifyUserPassword";
import { AvatarLink } from "../AvatarLink/AvatarLink";
import { DeleteAccountButton } from "./Forms/DeleteAccountButton";

function ConfigContainer() {
	const user = authService.getCurrentUser();
	const navigate = useNavigate();
	const userService = new UserService();

	const handleDeleteAccount = async () => {
		await userService.deleteUser(user.user_id);
		authService.logout();
		navigate('/');
	    };



	return (
		<>
			<div
				className="card bg-transparent bg-gradient "
				
			>
				<div className="card-header">
					<h2>
						Configuración&nbsp;<i className="bi bi-gear"></i>
					</h2>
				</div>
				<div className="card-body w-100">
					<div className="row">
						<div className="col-md-4 border border-dark rounded sombra mb-3 bg-body-tertiary">
							<h2 className="text-center mt-2">Tu cuenta</h2>
							<div className="card align-items-start mx-auto bg-body-tertiary">
							<AvatarLink userId={user.user_id} avatar={user.avatar} size="avatar-lg" />
								<p id="name-firstname">{user.name} {user.firstname}</p>
								<p id="email" className="ipad-email">{user.email}</p>
								<p id="nickname"><i className="bi bi-person-fill"></i> {user.nickname}</p>

							</div>

							<div id="msj-elim" className="h3"></div>

							<div className="mt-4 text-center">
								<DeleteAccountButton onDelete={handleDeleteAccount} />
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
