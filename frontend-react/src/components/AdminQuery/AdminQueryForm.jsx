import { useForm } from "react-hook-form";
import QuerysService from "../../services/querys-services";

function AdminQueryForm(props) {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	const { userRole , userId, updateData } = props

	const onSubmit = async (data) => {
		
		try {
			const querysService = new QuerysService();
			const newQuery = data.query_body

			const addNewQuery = await querysService.addQuery(userId, newQuery);

			updateData((prevData) => [...prevData, addNewQuery]);
			reset({ query_body: "" });	
			
		} catch (error) {
			console.error(error);
		}
	};


	return (
		<div className="container card bg-secondary bg-gradient">
			<h2 className="mb-3"><i className="bi bi-patch-question"></i> Consulta con nosotros</h2>
			<form onSubmit={handleSubmit(onSubmit)} className="w-100">
				<div className="mb-3">
					
					<textarea
						name="consulta"
						{...register("query_body")}
						className="form-control"
						placeholder="Escribe tu consulta aquí"
						rows="3"
					/>
					{errors.query_body && (
						<div className="alert alert-danger">{errors.query_body.message}</div>
					)}
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
