import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import FriendService from "../../services/friend.service";

import { FriendshipRequestCard } from "./FriendshipRequestCard";

import Swal from "sweetalert2";

function FeedRequestsSection() {
	const [requests, setRequests] = useState([]);
	const user = useSelector((state) => state.auth.user);

	const fetchRequests = async () => {
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
		<div className="col-md-2 col-lg-2 d-none d-md-block z-1 ">
			<div
				id="friendship-requests"
				className="col-md-2 col-lg-2  position-fixed start-1 end-0 card d-none d-md-block fit z-0 p-1"
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
		</div>
	);
}

export default FeedRequestsSection;
