import authService from "../../../services/auth.service";

import { AvatarLink } from "../../AvatarLink/AvatarLink";
import { useFriendService } from "../../../services/useFriendService";


function FriendCard(props) {
	const { data } = props;
	const { 
		friendShipState, 
		senderId, 
		handleAddFriend,
		handleCancelRequest,
		handleAccept,
		handleReject,
		handleRemoveFriend 
	} = useFriendService(data.user_id);

	const user = authService.getCurrentUser();


	return (
		<li
			className="list-group-item border p-1 sombra rounded bg-light bg-gradient"
			style={{
				backgroundColor: "rgba(255, 255, 255, 0.644)",
			}}
		>
			<div className="row align-items-center">
				<div className="col-md-7 col-sm-8 col-lg-5 d-flex justify-content-around ipad-friend-card">
					<AvatarLink userId={data.user_id} avatar={data.avatar} />

					<div className="mt-3 mx-auto ">
						<h6>
							{data.name} {data.firstname} @{data.nickname}
						</h6>
						<h6 style={{ fontWeight: "normal" }}>{data.occupation}</h6>
						<p style={{ fontWeight: "normal" }}>
							{data.lastLogin && data.lastLogin !== null
								? "Connected " + data.lastLogin
								: "Conectado hace mucho tiempo"}
						</p>
					</div>
				</div>

				{/* BOTONES DE ACCIÓN EN FUNCIÓN DE FRIENSHIPSTATE */}
				<div className="col-md-5 col-sm-4 col-lg-7 ipad-friend-card-button">
					<div className="d-flex justify-content-end m-3">

						{/* EL PROPIO USUARIO*/}
						{user.user_id === data.user_id && null}

						{/* NO HAY RELACION DE AMISTAD */}
						{friendShipState === null && user.user_id !== data.user_id && (
							<button onClick={handleAddFriend} className="btn " title="Añadir amigo">
								<i className="bi bi-person-plus fs-4"></i>
							</button>
						)}

						{/* PENDIENTE SOLICITUD ENVIADA POR EL USUARIO */}
						{friendShipState === "pending" && user.user_id === senderId && (
							<>
							<i className="bi bi-hourglass fs-4 mt-2"></i>
							<button
								onClick={handleCancelRequest}
								className="btn"
								title="Cancela la solicitud de amistad"
							>
								<i className="bi bi-x-lg fs-4"></i>
							</button>
							</>
						)}

						{/* PENDIENTE SOLICITUD RECIBIDA POR EL USUARIO */}
						{friendShipState === "pending" && user.user_id !== senderId && (
							<>
								<button
									className="btn btn-sm btn-dark sombra"
									type="button"
									onClick={handleAccept}
								>
									<i className="bi bi-plus-lg"></i>
								</button>
								<button
									className="btn btn-sm btn-dark sombra mx-2"
									type="button"
									onClick={handleReject}
								>
									<i className="bi bi-dash-lg "></i>
								</button>
							</>
						)}

						{/* AMIGOS ACEPTADOS */}
						{friendShipState === "accepted" && (
							<>
								<button className="btn" title="Escribir mensaje">
									<i className="bi bi-chat-text fs-4"></i>
								</button>
								<button className="btn" title="Eliminar amigo">
									<i
										className="bi bi-person-dash-fill fs-4"
										onClick={handleRemoveFriend}
									></i>
								</button>
							</>
						)}

						{/* AMIGOS RECHAZADOS - SOLICITAR AMISTAD DE NUEVO */}
						{friendShipState === "rejected" && (
							<button onClick={handleAddFriend} className="btn " title="Añadir amigo">
								<i className="bi bi-person-plus fs-4"></i>
							</button>
						)}

						
					</div>
				</div>
			</div>
		</li>
	);
}

export { FriendCard };
