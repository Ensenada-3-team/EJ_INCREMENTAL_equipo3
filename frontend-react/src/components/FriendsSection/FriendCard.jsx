function FriendCard(props) {
	return (
		<li
			className="list-group-item border p-2"
			style={{
				backgroundColor: "rgba(255, 255, 255, 0.644)",
				boxShadow: "0px 0px 10px 2px rgba(0, 0, 0, 0.5)",
			}}
		>
			<a
				href={`./tecler-profile.html?user_id=${encodeURIComponent(
					JSON.stringify(props.user_id)
				)}`}
				style={{ display: "block" }}
			>
				<div className="row align-items-center">
					<div className="col-md-5 d-flex justify-content-around">
						<img
							className="avatar rounded rounded-circle align-self-center border border-dark"
							src={props.avatar}
							alt=""
							id=""
						/>
						<div className="mt-3">
							<h6 className="">
								{props.username} {props.fistname} @{props.nickname}
							</h6>
							<h6 style={{ fontWeight: "normal" }}>{props.ocupation}</h6>
							<p style={{ fontWeight: "normal" }}>Conectado hace 22 horas</p>
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