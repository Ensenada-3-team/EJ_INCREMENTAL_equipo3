import { useState, useEffect } from "react";
import authService from "../../services/auth.service";
import FriendService from "../../services/friend.service";
import { FriendshipRequestCard } from "../FeedRequestsSection/FriendshipRequestCard";
import { SectionCard } from "./SectionCard";
import Swal from "sweetalert2";

function RequestsList() {
	const [requests, setRequests] = useState([]);
	const user = authService.getCurrentUser();

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
				// footer: '<a href=""> </a>',
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
            <>
                {requests.length !== 0 ? (
                      <div className="container">
                          <SectionCard
                              title="¡Tienes solicitudes de amistad!"
                              background="bg-dark"
                              textColor="text-light"
                              fontWeigth="fw-normal"
                          />
                        <div className="row row-cols-2 row-cols-sm-2 g-3">
                            {requests.map((request) => (
                                <div className="col">
                                    <FriendshipRequestCard
                                        key={request.friendship_id}
                                        data={request}
                                        onAction={handleAction}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="card-body text-center w-100">
                        No tienes solicitudes de amistad
                    </div>
                )}
            </>
        );
}

export { RequestsList };
