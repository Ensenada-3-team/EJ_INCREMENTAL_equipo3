import { useState, useEffect } from "react";
import authService from "../../services/auth.service";
import FriendService from "../../services/friend.service";
import { FriendshipRequestCard } from "./FriendshipRequestCard";
import Swal from "sweetalert2";

function FeedRequestsSection() {
	const [requests, setRequests] = useState([]);
	const user = authService.getCurrentUser();
	console.log(requests);

	const fetchRequests = async () => {
		const user = authService.getCurrentUser();
		const friendService = new FriendService();

		try {
			const newRequests = await friendService.getFriendshipRequests(
				user.user_id
			);
			setRequests(newRequests);
		} catch (error) {
			console.error(error);
			Swal.fire({
				icon: "error",
				title: "Oops...",
				text: "Ha ocurrido un error al obtener las peticiones de amistad!",
				footer: '<a href=""> </a>',
			});
		}
	};

	const handleAction = () => {
		fetchRequests();
	};

	useEffect(() => {
		fetchRequests();
	}, [user.user_id]);

	return (
		<div
			id="posible-friends"
			className="col-md-3 col-lg-2 card d-none d-md-block fit"
		>
			<h4 className="text-center p-md-0 p-lg-0 card-header">Solicitudes</h4>
			{requests.length !== 0 ? (
				requests.map((request) => (
					<FriendshipRequestCard
						key={request.friendship_id}
						data={request}
						onAction={handleAction}
					/>
				))
			) : (
				<div className="card-body text-center w-100">
					No tienes solicitudes de amistad
				</div>
			)}
		</div>
	);
}

export default FeedRequestsSection;
