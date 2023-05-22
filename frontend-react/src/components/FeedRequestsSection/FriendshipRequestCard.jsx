import { useState, useEffect } from "react";
import FriendService from "../../services/friend.service";
import authService from "../../services/auth.service";
import { AvatarLink } from "../AvatarLink/AvatarLink";
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
			props.onAction()
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
			props.onAction()
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
			<div className="mt-2 p-0 card rounded sombra bg-transparent d-flex">
				<AvatarLink userId={data.user_id} avatar={data.avatar} size="avatar-md" />
				<div className="d-flex flex-column mx-auto">
					<h6 className="fs-md-5 mt-1 ipad-nickname">{data.name} {data.firstname}</h6>
					<h6 className="fs-md-5 ipad-nickname">@{data.nickname}</h6>
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
