import InputField from "../InputField/InputField";
function ModifyUserPassword() {
	return (
		<>
			<h2 className="text-center">Cambiar contraseña</h2>
			<form id="modify-user-password">
				<InputField
					id="old-password"
					label="Contraseña actual:"
					type="password"
					placeholder="Ingresa tu contraseña actual"
					required
				/>
				<InputField
					id="new-password"
					label="Nueva contraseña:"
					type="password"
					placeholder="Ingresa tu nueva contraseña"
					required
				/>
				<InputField
					id="confirm-new-password"
					label="Confirmar nueva contraseña:"
					type="password"
					placeholder="Confirma tu nueva contraseña"
					required
				/>
				<button type="submit" className="btn btn-dark">
					Cambiar contraseña
				</button>
			</form>
			<hr />
		</>
	);
}

export { ModifyUserPassword };
