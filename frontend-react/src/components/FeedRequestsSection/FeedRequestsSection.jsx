import { useState, useEffect } from "react";
import authService from "../../services/auth.service";
import FriendService from "../../services/friend.service";
import { FriendshipRequestCard } from "./FriendshipRequestCard";
import Swal from "sweetalert2";


function FeedRequestsSection() {
	const [requests , setRequests] = useState([]);
	const user = authService.getCurrentUser();

	useEffect(() => {
		const fetchRequests = async () => {
			const user = authService.getCurrentUser()
			const friendService  = new FriendService();

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
		}

		fetchRequests();
	}, [user.user_id]);

	return (
		<div
			id="posible-friends"
			className="col-md-3 col-lg-2 card d-none d-md-block fit"
		>
			<h4 className="text-center p-md-0 p-lg-0 card-header">Sugerencias</h4>
			{requests.map((request) => (
				<FriendshipRequestCard key={request.friendship_id} data={request} />
			))}
		</div>
	);
}

export default FeedRequestsSection