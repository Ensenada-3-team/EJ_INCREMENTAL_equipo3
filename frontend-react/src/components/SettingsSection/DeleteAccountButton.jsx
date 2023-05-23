import Swal from "sweetalert2";

function DeleteAccountButton({ onDelete }) {
	const handleDelete = async () => {
		const result = await Swal.fire({
			title: "¿Estás seguro de eliminar tu cuenta?",
			text: "Esta acción no se puede deshacer.",
			icon: "warning",
			showCancelButton: true,
			confirmButtonText: "Sí, eliminar",
			cancelButtonText: "Cancelar",
			dangerMode: true,
		});

		if (result.isConfirmed) {
                  await Swal.fire(
                        'Cuenta eliminada...!',
                        'Lamentamos mucho que te vayas... aqui te esperamos de vuelta...',
                        'success'
                  )
			onDelete();
		}
	};

	return (
		<button onClick={handleDelete} className="btn btn-danger sombra">
			Eliminar cuenta
		</button>
	);
}

export { DeleteAccountButton };
