import { useState, useEffect } from "react";

import FriendService from "../../../services/friend.service";
import Swal from "sweetalert2";

function MainProfileCard(props) {
	const { profileData } = props;

	const [friendCount, setFriendCount] = useState(0);

	useEffect(() => {
		const fetchFriends = async () => {
		    try {
			  const friendService = new FriendService();
			  const friends = await friendService.getAllFriends(profileData.user_id);
			  setFriendCount(friends.length);
		    } catch (error) {
			  console.log(error);
			  Swal.fire("Error", "Error al obtener los amigos", "error");
		    }
		};
	  
		fetchFriends();
	  }, [profileData.user_id]);


	return (
		<>
			{/* --- CARD IZQUIERDA PERFIL ---*/}
			<section className="col-md-6 col-sm-1 order-sm-1 order-1 mx-sm-1 mx-md-0 mb-md-0 card bg-light bg-gradient p-0 ipad-profile">
				{/* PORTADA*/}
				<div id="user-banner">
					<img
						src="/geom-dark.jpg"
						alt="foto de portada"
						className="img-fluid rounded"
					/>
				</div>
				{/* BODY - FOTO + DATOS */}
				<div className="card-body w-100">
					{/* FOTO + MODIFICAR */}
					<div
						className="d-flex justify-content-between"
						style={{ position: "relative", marginTop: "-3.5rem" }}
					>
						<button className="btn">
							<img
								id="imagen-usuario"
								className="avatar avatar-lg rounded rounded-circle position-relative border border-dark"
								alt="avatar"
								src={profileData.avatar}
							/>
						</button>
						<button
							className="btn"
							aria-label="Editar foto de perfil"
							title="aún no puedes editar tu foto de perfil..coming soon!"
						>
							<i className="bi bi-pencil position-relative"></i>
						</button>
					</div>
					{/* DATOS  */}
					<div>
						<h2 id="name-firstname">
							{profileData.name} {profileData.firstname}
						</h2>
						<h5 id="user-nickname">({profileData.nickname})</h5>
						<p id="last-login" className="fw-normal">Connected {profileData.lastLogin}</p>
						
					</div>
					<div>
						<p id="ocupacion" className="mb-0">
							{profileData.occupation}
						</p>
						<p id="ocupacion">{profileData.grade}</p>
						<p><i className="bi bi-translate"></i> {profileData.language}</p>
					</div>
					<div className="d-flex">
						<i className="bi bi-geo-alt"></i>
						<p id="ubicacion">{profileData.location}</p>
					</div>
					<div>
						<p id="friends-count">{friendCount} amigos Teclers</p>
					</div>
				</div>
				{/* FOOTER - BOTONES LINKS */}
				<div className="card-footer d-flex">
					<button
						className="btn btn-sm btn-primary"
						onClick={() => navigate("/app/friends")}
					>
						Amigos
					</button>

					
				</div>
			</section>
		</>
	);
}

export { MainProfileCard };
