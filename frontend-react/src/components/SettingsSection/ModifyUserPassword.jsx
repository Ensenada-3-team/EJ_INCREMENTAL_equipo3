import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import InputField from "../InputField/InputField";
import authService from "../../services/auth.service";
import Swal from "sweetalert2";

function ModifyUserPassword() {
	const {
		control,
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({});
	const navigate = useNavigate();

	const user = authService.getCurrentUser();
	const title =
		"Recuerda que tu contraseña ha de tener:\nMin. 8 caracteres\nAl menos una minuscula\nAl menos una mayuscula\nAl menos un número\nAl menos un caracter especial";

	const passwordValidation =
		/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;

	const onSubmit = async (data) => {
		try {
			console.log(data);
			const passwordsMatch = data.newPassword === data.confirmNewPassword;

			if (!passwordsMatch) {
				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: "Las contraseñas no coinciden!",
					// footer: '<a href="">Why do I have this issue?</a>'
				});
				return;
			} else {
				const updatePassword = await authService.changePassword(
					user.user_id,
					data.oldPassword,
					data.newPassword
				);

				if (updatePassword === 200) {
					await Swal.fire({
						position: "top-end",
						icon: "success",
						title:
							"Has cambiado tu contraseña! te redirigiremos al login por seguridad.",
						showConfirmButton: false,
						timer: 1500,
					});
					reset();
					authService.logout();
					navigate("/");
				}
			}
		} catch (error) {
			console.error(error);
			Swal.fire({
				icon: "error",
				title: "Oops...",
				text: `${error.message}`,
				// footer: '<a href="">Why do I have this issue?</a>'
			});
			reset();
		}
	};

	return (
		<>
			<h2 className="text-center" title={title}>
				<i className="bi bi-key-fill"></i> Cambia tu contraseña
			</h2>
			<form onSubmit={handleSubmit(onSubmit)} id="modify-user-password">
				<Controller
					name="oldPassword"
					control={control}
					defaultValue={""}
					render={({ field }) => (
						<InputField
							id="oldPassword"
							label="Contraseña actual:"
							type="password"
							placeholder="Ingresa tu contraseña actual"
							required={true}
							{...field}
							register={register}
						/>
					)}
				/>
				<Controller
					name="newPassword"
					control={control}
					defaultValue={""}
					render={({ field }) => (
						<InputField
							id="newPassword"
							label="Nueva contraseña:"
							type="password"
							placeholder="Ingresa tu nueva contraseña"
							required={true}
							{...field}
							register={register("newPassword", {
								pattern: {
									value: passwordValidation,
									message:
										"La contraseña debe tener mínimo 8 caracteres, una letra mayúscula, una letra minúscula, un carácter especial y un número.",
								},
							})}
						/>
					)}
				/>
				{errors.newPassword && (
					<p className="text-danger">{errors.newPassword.message}</p>
				)}

				<Controller
					name="confirmNewPassword"
					control={control}
					defaultValue={""}
					render={({ field }) => (
						<InputField
							id="confirmNewPassword"
							label="Confirmar nueva contraseña:"
							type="password"
							placeholder="Confirma tu nueva contraseña"
							required={true}
							{...field}
							register={register}
						/>
					)}
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
