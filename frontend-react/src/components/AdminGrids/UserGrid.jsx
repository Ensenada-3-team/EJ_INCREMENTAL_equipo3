import { AvatarLink } from "../AvatarLink/AvatarLink";

function UserGrid(props) {
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

	return (
		<div className="container-fluid  rounded sombra">
			<h2 className="text-center pt-3">Usuarios registrados</h2>
			<div className="row">
				<div className="col">
					<div className="table-responsive-sm overflow-auto bg-light">
						<div className="table-responsive rounded sombra">
							<table className="table table-fluid border border-dark text-start align-middle table-hover table-striped">
								<thead className="border border-dark border-3 text-sm-start">
									<tr className="fs-4 text-center align-middle table-success">
										<th>Avatar</th>
										<th className="border border-dark">ID</th>
										<th>Rol</th>
										<th>Alias</th>
										<th>Nombre</th>
										<th>Apellido</th>
										<th>Email</th>
										<th>Ocupacion</th>
										<th>Ubicación</th>
										<th>Nac.</th>
										<th>Género</th>
										<th>Linkedin</th>
										<th>Idioma</th>
										<th>Última conexión</th>
									</tr>
								</thead>
								<tbody>
									{props.users.map((user) => (
										<tr key={user.user_id}>
											<td><AvatarLink userId={user.user_id} avatar={user.avatar} size={50} /></td>
											<td className="border border-dark table-success text-center">{user.user_id}</td>											
											<td>{user.role}</td>
											<td>@{user.nickname}</td>
											<td>{user.name}</td>
											<td>{user.firstname}</td>
											<td>{user.email}</td>
											<td>{user.occupation}</td>
											<td>{user.location}</td>
											<td className="text-center">{formatDate(user.birthdate)}</td>
											<td className="text-center">{user.gender}</td>
											<td>{user.linkedin}</td>
											<td>{user.language}</td>
											<td className="text-center">{formatDate(user.last_login, true)}</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default UserGrid;
