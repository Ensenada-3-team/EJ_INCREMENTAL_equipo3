import { useState, useEffect } from "react";
import { AvatarLink } from "../AvatarLink/AvatarLink";
import FriendService from "../../services/friend.service";
import authService from "../../services/auth.service";

function FriendCard(props) {
	const { data } = props;
	const [friendShipState, setFriendshipState] = useState(false);
	const user = authService.getCurrentUser();

	useEffect(() => {
		const fetchFriendshipStatus = async () => {
			const friendService = new FriendService();

			try {
				const response = await friendService.getFriendshipStatus(
					user.user_id,
					data.user_id
				);
				setFriendshipState(response.status);
			} catch (error) {
				console.error(error);
				setFriendshipState(null);
			}
		};

		fetchFriendshipStatus();
	}, [user.user_id, data.user_id]);

	const handleAddFriend = async () => {
		const friendService = new FriendService();

		try {
			await friendService.sendFriendshipRequest(user.user_id, data.user_id);
			setFriendshipState("pending");
		} catch (error) {
			console.error(error);
		}
	};

	const handleCancelRequest = async () => {
		const friendService = new FriendService();

		try {
			await friendService.cancelFriendshipRequest(user.user_id, data.user_id);
			setFriendshipState(null);
		} catch (error) {
			console.error(error);
		}
	};

	const handleAcceptRequest = async () => {
		const friendService = new FriendService();

		try {
			await friendService.acceptFriendshipRequest(data.user_id, user.user_id);
			setFriendshipState("accepted");
		} catch (error) {
			console.error(error);
		}
	};

	const handleRejectRequest = async () => {
		const friendService = new FriendService();

		try {
			await friendService.rejectFriendshipRequest(data.user_id, user.user_id);
			setFriendshipState("rejected");
		} catch (error) {
			console.error(error);
		}
	};

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

				<div className="col-md-7">
					<div className="d-flex justify-content-end m-3">
						{friendShipState === null && (
							<button onClick={handleAddFriend} className="btn btn-dark sombra">
								<i class="bi bi-person-plus"></i>
							</button>
						)}
						{friendShipState === "pending" && (
							<button
								onClick={handleCancelRequest}
								className="btn btn-secondary sombra"
							>
								Cancelar solicitud
							</button>
						)}
						{friendShipState === "accepted" && (
							<button className="btn fs-5"><i class="bi bi-chat-text"></i></button>
						)}
						{friendShipState === "rejected" && (
							<button onClick={handleAddFriend} className="btn btn-dark sombra">
								<i class="bi bi-person-plus"></i>
							</button>
						)}
						{friendShipState === "null" && (
							<button
								onClick={handleAcceptRequest}
								className="btn btn-success sombra"
							>
								Aceptar solicitud
							</button>
						)}
						{friendShipState === "null" && (
							<button
								onClick={handleRejectRequest}
								className="btn btn-danger sombra"
							>
								Rechazar solicitud
							</button>
						)}
					</div>
				</div>
			</div>
		</li>
	);
}

export { FriendCard };
