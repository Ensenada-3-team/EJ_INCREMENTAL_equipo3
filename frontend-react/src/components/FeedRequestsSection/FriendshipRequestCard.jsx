import { useState, useEffect } from "react";
import FriendService from "../../services/friend.service";
import authService from "../../services/auth.service";
import Swal from "sweetalert2";

function FriendshipRequestCard(props) {
	const { data } = props;
	const [accepted, setAccepted] = useState(false);
	const [rejected, setRejected] = useState(false);
	const user = authService.getCurrentUser();

	const handleAccept = async () => {
		const friendService = new FriendService();
		try {
			await friendService.acceptFriendshipRequest(data.user_id, user.user_id);
			Swal.fire('Amistad aceptada!', '', 'success');

			setAccepted(true);
		} catch (error) {
			console.error(error);
			Swal.fire({
				icon: "error",
				title: "Oops...",
				text: "Ha ocurrido un error al aceptar la petición de amistad!",
			});
		}
	};

	const handleReject = async () => {
		const friendService = new FriendService();
		try {
			await friendService.rejectFriendshipRequest(data.user_id, user.user_id);
			Swal.fire(`No se notificará a ${data.name} de tu decisión...`);

			setRejected(true);
		} catch (error) {
			console.error(error);
			Swal.fire({
				icon: "error",
				title: "Oops...",
				text: "Ha ocurrido un error al rechazar la petición de amistad!",
			});
		}
	};

	if (accepted || rejected) {
		return null;
	}

	return (
		<>
			<div className="mt-3 p-lg-2 p-md-1 rounded sombra bg-friends d-flex">
				<img
					className="avatar avatar-sm rounded rounded-circle border border-dark d-block"
					style={{ maxWidth: "100%" }}
					src={data.avatar}
					alt="avatar"
				/>
				<div className="d-flex flex-column mx-2">
					<h7 className="fs-md-5 ipad-nickname">{data.name} {data.firstname}</h7>
					<h7 className="fs-md-5 ipad-nickname">@{data.nickname}</h7>
				</div>
			</div>
			<div className="d-flex justify-content-around w-100 mt-2">
				<button
					className="btn btn-sm btn-dark sombra"
					type="button"
					onClick={handleAccept}
				>
					<i className="bi bi-plus-lg"></i>
				</button>
				<button
					className="btn btn-sm btn-dark sombra"
					type="button"
					onClick={handleReject}
				>
					<i className="bi bi-dash-lg"></i>
				</button>
			</div>
		</>
	);
}

export { FriendshipRequestCard };
