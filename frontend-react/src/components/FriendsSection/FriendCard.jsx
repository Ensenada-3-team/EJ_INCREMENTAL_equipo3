import { AvatarLink } from "../AvatarLink/AvatarLink";
import { useFriendService } from "../../services/useFriendService";
import authService from "../../services/auth.service";


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
			className="list-group-item border p-1 sombra rounded"
			style={{
				backgroundColor: "rgba(255, 255, 255, 0.644)",
			}}
		>
			<div className="row align-items-center">
				<div className="col-md-5 d-flex justify-content-around">
					<AvatarLink userId={data.user_id} avatar={data.avatar} />

					<div className="mt-3">
						<h6>
							{data.name} {data.firstname} @{data.nickname}
						</h6>
						<h6 style={{ fontWeight: "normal" }}>{data.ocupation}</h6>
						<p style={{ fontWeight: "normal" }}>
							{data.lastLogin && data.lastLogin !== null
								? "Connected " + data.lastLogin
								: "Conectado hace mucho tiempo"}
						</p>
					</div>
				</div>
				
				{/* BOTONES DE ACCIÓN EN FUNCIÓN DE FRIENSHIPSTATE */}
				<div className="col-md-7">
					<div className="d-flex justify-content-end m-3">
						{user.user_id === data.user_id && null}

						{friendShipState === null && user.user_id !== data.user_id && (
							<button onClick={handleAddFriend} className="btn btn-dark sombra">
								<i class="bi bi-person-plus"></i>
							</button>
						)}
						{friendShipState === "pending" && user.user_id === senderId && (
							<button
								onClick={handleCancelRequest}
								className="btn btn-sm btn-secondary sombra"
							>
								Cancelar solicitud
							</button>
						)}
						{friendShipState === "accepted" && (
							<>
								<button className="btn fs-5">
									<i class="bi bi-chat-text"></i>
								</button>
								<button className="btn fs-5">
									<i
										class="bi bi-person-dash-fill"
										onClick={handleRemoveFriend}
									></i>
								</button>
							</>
						)}
						{friendShipState === "rejected" && (
							<button onClick={handleAddFriend} className="btn btn-dark sombra">
								<i class="bi bi-person-plus"></i>
							</button>
						)}
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
									<i className="bi bi-dash-lg"></i>
								</button>
							</>
						)}
					</div>
				</div>
			</div>
		</li>
	);
}

export { FriendCard };
