import { useForm, Controller, register } from "react-hook-form";
import { Link, useNavigate, useLocation } from "react-router-dom";
import InputField from "../InputField/InputField";
import UserService from "../../services//user.service";
import authService from "../../services/auth.service";

function ModifyUserData() {
	const {
		control,
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({});
	const navigate = useNavigate();

	const userService = new UserService();
	const user = authService.getCurrentUser();

	const onSubmit = async (data) => {
		try {
			console.log(data);
			if (data.nickname !== user.nickname || data.email !== user.email) {
				const checkedData = await userService.checkUser(
					user.user_id,
					data.nickname,
					data.email
				);

				if (checkedData.message) {
					alert(userData.message);
					return;
				}
			}

			const updatedUser = await userService.updateUser(user.user_id, data);

			if (updatedUser.message) {
				alert(updatedUser.message);
				alert("\nPor seguridad debes volver a loguearte.");
				authService.logout()
				navigate("/");
			} else {
				alert(
					"Ha habido algún problema con la modificación de tus datos, vuelve a intentarlo."
				);
			}

			reset();
		} catch (error) {
			console.error(error.message);
			alert(
				error.message +
					"\nTus datos no han podido modificarse, prueba de nuevo."
			);
		}
	};

	return (
		<>
			<h2 className="text-center">Modificar datos</h2>
			<form onSubmit={handleSubmit(onSubmit)} id="modify-user-data">
				<Controller
					name="name"
					control={control}
					defaultValue={""}
					render={({ field }) => (
						<InputField
							id="name"
							label="Nombre:"
							type="text"
							required={false}
							{...field}
							register={register}
						/>
					)}
				/>
				<Controller
					name="firstname"
					control={control}
					defaultValue={""}
					render={({ field }) => (
						<InputField
							id="firstname"
							label="Apellido:"
							type="text"
							required={false}
							{...field}
							register={register}
						/>
					)}
				/>
				<Controller
					name="nickname"
					control={control}
					defaultValue={user.nickname}
					render={({ field }) => (
						<InputField
							id="nickname"
							label="Nickname:"
							type="text"
							required={false}
							{...field}
							register={register}
						/>
					)}
				/>
				<Controller
					name="birthdate"
					control={control}
					defaultValue={""}
					render={({ field }) => (
						<InputField
							id="birthdate"
							label="Fecha de nacimiento:"
							type="date"
							required={false}
							{...field}
							register={register}
						/>
					)}
				/>
				<Controller
					name="gender"
					control={control}
					defaultValue={""}
					render={({ field }) => (
						<InputField
							id="gender"
							label="Género:"
							type="select"
							options={[
								{ value: "", label: "" },
								{ value: "M", label: "Masculino" },
								{ value: "F", label: "Femenino" },
								{ value: "O", label: "Otro" },
							]}
							required={false}
							{...field}
							register={register}
						/>
					)}
				/>
				<Controller
					name="avatar"
					control={control}
					defaultValue={""}
					render={({ field }) => (
						<InputField
							id="avatar"
							label="Avatar:"
							type="text"
							required={false}
							{...field}
							register={register}
						/>
					)}
				/>
				<Controller
					name="email"
					control={control}
					defaultValue={user.email}
					render={({ field }) => (
						<InputField
							id="email"
							label="Email:"
							type="email"
							placeholder="ejemplo@mail.com"
							required={false}
							{...field}
							register={register}
						/>
					)}
				/>
				<Controller
					name="occupation"
					control={control}
					defaultValue={""}
					render={({ field }) => (
						<InputField
							id="occupation"
							label="Ocupación:"
							type="text"
							required={false}
							{...field}
							register={register}
						/>
					)}
				/>
				<Controller
					name="location"
					control={control}
					defaultValue={""}
					render={({ field }) => (
						<InputField
							id="location"
							label="Ubicación:"
							type="text"
							required={false}
							{...field}
							register={register}
						/>
					)}
				/>
				<Controller
					name="grade"
					control={control}
					defaultValue={""}
					render={({ field }) => (
						<InputField
							id="grade"
							label="Grado académico:"
							type="text"
							required={false}
							{...field}
							register={register}
						/>
					)}
				/>
				<Controller
					name="linkedin"
					control={control}
					defaultValue={""}
					render={({ field }) => (
						<InputField
							id="linkedin"
							label="Perfil de LinkedIn:"
							type="text"
							required={false}
							{...field}
							register={register}
						/>
					)}
				/>
				<Controller
					name="language"
					control={control}
					defaultValue={""}
					render={({ field }) => (
						<InputField
							id="language"
							label="Idioma:"
							type="text"
							required={false}
							{...field}
							register={register}
						/>
					)}
				/>
				<Controller
					name="hobby"
					control={control}
					defaultValue={""}
					render={({ field }) => (
						<InputField
							id="hobby"
							label="Pasatiempos:"
							type="text"
							required={false}
							{...field}
							register={register}
						/>
					)}
				/>
				<button type="submit" className="btn btn-dark">
					Guardar cambios
				</button>
			</form>
			<hr />
		</>
	);
}

export { ModifyUserData };
