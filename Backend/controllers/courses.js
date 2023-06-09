const pool = require("../db/connection");

class CoursesController {
	static async getCoursesById(req, res) {
		const userId = req.params.user_id;

		try {
			const results = await pool.query(
				"SELECT id, user_id, course_name FROM courses WHERE user_id = ?",
				[userId]
			);

			if (results[0].length === 0) {
				return res
					.status(404)
					.json({ message: "El usuario no tiene cursos registrados" });
			}
			return res.status(200).json(results[0]);
		} catch (error) {
			console.error(error);
			return res.status(500).json({ message: "Error al buscar cursos" });
		}
	}

	static async createCourse(req, res) {
		const userId = req.params.user_id;
		const course_name = req.body.course_name;

		try {
			const insertResults = await pool.query(
				"INSERT INTO courses (user_id, course_name) VALUES (?, ?)",
				[userId, course_name]
			);
			const insertedCourseId = insertResults[0].insertId;

			// Obtener el curso creado
			const courseResults = await pool.query(
				"SELECT * FROM courses WHERE id = ?",
				[insertedCourseId]
			);

			const newCourse = courseResults[0][0];

			return res.status(201).json(newCourse);
		} catch (error) {
			console.error(error);
			return res.status(500).json({ message: "Error al crear curso" });
		}
	}

	static async updateCourse(req, res) {
		const userId = req.params.user_id;
		const courseId = req.params.courseId;
		const { course_name } = req.body;

		try {
			const updatedRows = await pool.query(
				"UPDATE courses SET course_name = ? WHERE id = ? AND user_id = ?",
				[course_name, courseId, userId]
			);

			if (updatedRows.affectedRows === 0) {
				return res.status(404).json({ message: "El curso no existe" });
			}

			return res
				.status(200)
				.json({ message: "Curso actualizado correctamente" });
		} catch (error) {
			console.error(error);
			return res.status(500).json({ message: "Error al editar el curso" });
		}
	}

	static async deleteCourse(req, res) {
		// const userId = req.params.user_id;
		const courseId = req.params.courseId;

		try {
			const deletedRows = await pool.query("DELETE FROM courses WHERE id = ?", [
				courseId,
			]);

			if (deletedRows.affectedRows === 0) {
				return res.status(404).json({ message: "El curso no existe" });
			}

			return res.status(200).json({ message: "Curso eliminado correctamente" });
		} catch (error) {
			console.error(error);
			return res.status(500).json({ message: "Error al eliminar el curso" });
		}
	}
}

module.exports = CoursesController;
