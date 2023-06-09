import { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";

import CoursesService from "../../../services/courses.service";

import Modal from "bootstrap/js/dist/modal";
import Swal from "sweetalert2";

function CoursesList(props) {
	const [courses, setCourses] = useState([]);
	const [error, setError] = useState(null);

	const [modalInstance, setModalInstance] = useState(null);
	const [isEditing, setIsEditing] = useState(false);
	const modalRef = useRef(null);

	const [selectedCourseId, setSelectedCourseId] = useState(null);
	const [newCourseName, setNewCourseName] = useState("");

	const userId = props.userId;
	const user = useSelector((state) => state.auth.user);
	

	useEffect(() => {
		const fetchCourses = async () => {
			try {
				const coursesService = new CoursesService();
				const response = await coursesService.getUserCourses(userId);
				
				setCourses(response);
                        setError(null)
				
			} catch (error) {
                       
				if (error.response) {
					setError(error.response.data.message);
                              
				} 
			}
		};

		fetchCourses();
	}, [userId]);

	useEffect(() => {
		if (modalRef.current) {
			const modal = new Modal(modalRef.current);
			setModalInstance(modal);
		}
	}, []);

	const handleOpenEditModal = (course, courseName) => {
		setIsEditing(true);
		setSelectedCourseId(course);
		setNewCourseName(courseName || "");
		if (modalInstance) {
			modalInstance.show();
		}
	};

	const handleOpenAddModal = () => {
		setIsEditing(false);
		setSelectedCourseId(null);
		setNewCourseName("");
		if (modalInstance) {
			modalInstance.show();
		}
	};

	const handleSaveCourse = async () => {
		try {
			const coursesService = new CoursesService();
			const updatedCourse = { course_name: newCourseName };

			if (isEditing) {
				await coursesService.updateCourse(
					userId,
					selectedCourseId,
					updatedCourse
				);
				setCourses(
					courses.map((course) =>
						course.id === selectedCourseId
							? { ...course, course_name: newCourseName }
							: course
					)
				);
			} else {
				const newCourse = await coursesService.addCourse(userId, updatedCourse);
				
				setError(null)
				setCourses([...courses, newCourse]);
			}

			if (modalInstance) {
				modalInstance.hide();
			}
		} catch (error) {
			Swal.fire(error.message);
		}
	};

	const editCourse = (course, courseName) => {
		handleOpenEditModal(course, courseName);
	};
	const deleteCourse = async (courseId) => {
		try {
			const result = await Swal.fire({
				title: "¿Estás seguro de querer eliminar este curso?",
				text: "Esta acción no se puede deshacer",
				icon: "warning",
				showCancelButton: true,
				confirmButtonColor: "#3085d6",
				cancelButtonColor: "#d33",
				confirmButtonText: "Sí, eliminar",
				cancelButtonText: "Cancelar",
			});

			if (result.isConfirmed) {
				const coursesService = new CoursesService();
				await coursesService.deleteCourse(userId, courseId);
				setCourses(courses.filter((course) => course.id !== courseId));
				Swal.fire("Eliminado", "El curso ha sido eliminado", "success");
			}
		} catch (error) {
			setError("Error al eliminar el curso");
		}
	};

	return (
		<>
			<h4 className="card-header text-center">
				Cursos{" "}
				{userId === user.user_id && (
					<button
						className="btn p-0"
						title="Agregar curso"
						onClick={handleOpenAddModal}
					>
						<i className="bi bi-plus-square fs-md-4 fs-5"></i>
					</button>
				)}
			</h4>
			{error ? (
				<div>{error}</div>
			) : courses.length > 0 ? (
				courses.map((course) => (
					<div
						key={course.id}
						className="d-flex flex-wrap justify-content-between  mt-1 bg-dark-subtle rounded p-1"
					>
						<span className="fs-6">{course.course_name}</span>
                                    {/*BOTONES SE RENDERIZAN SOLO SI ES EL USUARIO ACTUAL */}
						{userId === user.user_id && (
							<div className="d-flex align-items-center ms-auto ">
								<button
									className="btn p-0"
									onClick={() => editCourse(course.id, course.course_name)}
								>
									<i className="bi bi-pencil"></i>
								</button>

								<button
									className="btn p-1"
									onClick={() => deleteCourse(course.id)}
								>
									<i className="bi bi-trash3"></i>
								</button>
							</div>
						)}
					</div>
				))
			) : (
				<div>Aún no hay cursos</div>
			)}

			{/* Modal para editar el curso */}
			<div className="modal" tabIndex="-1" ref={modalRef}>
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title">Editar cursos</h5>
							<button
								type="button"
								className="btn-close"
								onClick={() => modalInstance.hide()}
							></button>
						</div>
						<div className="modal-body">
							{isEditing ? (
								<form>
									<div className="form-group">
										<label htmlFor="courseInput">Curso</label>
										<input
											className="form-control"
											id="courseInput"
											type="text"
											value={newCourseName}
											onChange={(e) => setNewCourseName(e.target.value)}
										/>
									</div>
								</form>
							) : (
								<form>
									<div className="form-group">
										<label htmlFor="newCourseName">Nuevo curso</label>
										<input
											className="form-control"
											id="newCourseName"
											type="text"
											value={newCourseName}
											onChange={(e) => setNewCourseName(e.target.value)}
										/>
									</div>
								</form>
							)}
						</div>
						<div className="modal-footer">
							<button
								type="button"
								className="btn btn-secondary"
								onClick={() => modalInstance.hide()}
							>
								Cancelar
							</button>
							<button
								type="button"
								className="btn btn-primary"
								onClick={handleSaveCourse}
							>
								Guardar cambios
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export { CoursesList };
