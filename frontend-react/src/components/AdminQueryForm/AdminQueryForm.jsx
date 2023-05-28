import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

function AdminQueryForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	
	const userRole = useSelector((state) => state.userRole);

      
	const onSubmit = (data) => {
		console.log("Datos del formulario:", data);
		// Aquí puedes enviar los datos del formulario al administrador
	};

	return (
		<div className="col-md-6 col-lg-7 card fit">
			<div className="container ">
				<h2 className="mb-3">Formulario de consulta al administrador</h2>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="mb-3">
						<label className="mb-2">Consulta</label>
						<input
							name="consulta"
							{...register("consulta")}
							className="form-control form-control-lg"
							placeholder="Escribe tu consulta aquí"
						/>
					</div>
					<button type="submit" className="btn btn-success ">
						Enviar consulta
					</button>
				</form>
			</div>
		</div>
	);
}

export { AdminQueryForm };
