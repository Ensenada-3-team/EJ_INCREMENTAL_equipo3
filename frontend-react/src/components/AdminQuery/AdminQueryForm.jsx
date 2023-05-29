import { useForm } from "react-hook-form";
import QuerysService from "../../services/querys-services";

function AdminQueryForm(props) {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const { userRole , user} = props

	const onSubmit = async (data) => {
		console.log("Datos del formulario:", data);
		try {
			const querysService = new QuerysService();
			const newQuery = await 	querysService.addQuery(user, data.query_body);
			
			
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className="container card">
			<h2 className="mb-3">Formulario de consulta al administrador</h2>
			<form onSubmit={handleSubmit(onSubmit)} className="w-100">
				<div className="mb-3">
					
					<textarea
						name="consulta"
						{...register("query_body")}
						className="form-control"
						placeholder="Escribe tu consulta aquí"
						rows="3"
					/>
				</div>
				<div className="d-flex justify-content-end">
					<button type="submit" className="btn btn-dark sombra ">
						Enviar consulta
					</button>
				</div>
			</form>
		</div>
	);
}

export { AdminQueryForm };
