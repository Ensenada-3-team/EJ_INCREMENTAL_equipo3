import { useNavigate } from "react-router-dom";

function FriendCard(props) {
	const { data } = props;
	const navigate = useNavigate();

	const handleClick = () => {
		navigate(`/profile?user_id=${encodeURIComponent(
			JSON.stringify(data.user_id)
		)}`)
	}

	return (
		<li
			className="list-group-item border p-1 sombra rounded"
			style={{
				backgroundColor: "rgba(255, 255, 255, 0.644)",
			}}
		>
			<a
				onClick={handleClick}
				style={{ display: "block" }}
			>
				<div className="row align-items-center">
					<div className="col-md-5 d-flex justify-content-around">
						<img
							className="avatar rounded rounded-circle align-self-center border border-dark"
							src={data.avatar}
							alt=""
							id=""
						/>
						<div className="mt-3">
							<h6 className="">
								{data.name} {data.firstname} @{data.nickname}
							</h6>
							<h6 style={{ fontWeight: "normal" }}>{data.ocupation}</h6>
							<p style={{ fontWeight: "normal" }}>Conectado hace { Math.floor(Math.random() * 24) + 1} horas</p>
						</div>
					</div>

					<div className="col-md-7">
						<div className="d-flex justify-content-end m-3">
							<button className="btn btn-dark sombra">Enviar mensaje</button>
						</div>
					</div>
				</div>
			</a>
		</li>
	);
}


export { FriendCard }