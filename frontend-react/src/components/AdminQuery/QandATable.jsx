import { AvatarLink } from "../AvatarLink/AvatarLink";

function QandATable(props) {
	const { data, user } = props;
	const userRole = user.role;

	function formatDate(date, includeTime = false) {
		const options = {
			year: "numeric",
			month: "short",
			day: "numeric",
			hour: includeTime ? "2-digit" : undefined,
			minute: includeTime ? "2-digit" : undefined,
			second: includeTime ? "2-digit" : undefined,
		};
		return new Date(date).toLocaleDateString("es-ES", options);
	}

	function getIconForStatus(status) {
		if (status === "pending") {
			return <i className="bi bi-hourglass"></i>;
		} else if (status === "responded") {
			return <i className="bi bi-check-lg"></i>;
		} else {
			return null;
		}
	}

	if (data.length === 0) {
		return <p className="text-center">No hay consultas pendientes</p>;
	}

	return (
		<>
			<div className="container card bg-light bg-gradient">
				<div className="row ">
					<div className="col">
						<div className="rounded sombra ">
							<table
								style={{ fontSize: "0.8rem" }}
								className="table table-responsive table-fluid table-hover table-bordered overflow-auto border border-dark text-start align-middle bg-light"
							>
								<thead className="text-center align-middle table-success">
									<tr>
										{userRole === "admin" && <th scope="col"> Usuario</th>}
										<th scope="col">Consultas</th>
										<th scope="col">Respuestas</th>
										<th scope="col">Fecha</th>
										{userRole === "admin" && <th scope="col">Estado</th>}
									</tr>
								</thead>
								<tbody>
									{data.map((row) => (
										<tr key={row.query_id}>
											{userRole === "admin" && (
												<td className="text-center">
													<AvatarLink
														userId={row.user_id}
														avatar={row.avatar}
														size={50}
													/>
													{row.nickname}
												</td>
											)}
											<td>{row.query}</td>
											<td>{row.response}</td>
											<td>{formatDate(row.query_date)}</td>
											{userRole === "admin" && (
												<td className="text-center">
													{getIconForStatus(row.query_status)}
												</td>
											)}
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export { QandATable };
