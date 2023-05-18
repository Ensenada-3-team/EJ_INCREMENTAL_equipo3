import { useNavigate } from "react-router-dom";
import { AvatarLink } from "../AvatarLink/AvatarLink";

function FriendCard(props) {
	const { data } = props;
	const navigate = useNavigate();

	
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
						<h6 className="">
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
						<button className="btn btn-dark sombra">Enviar mensaje</button>
					</div>
				</div>
			</div>
		</li>
	);
}

export { FriendCard };
