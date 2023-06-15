const express = require("express");
const router = express.Router();
require("dotenv").config();

const authMiddleware = require("../lib/authMiddleware");
const coursesController = require("../controllers/courses");

/**ENDPOINTS http://localhost:3000/courses */

// GET  - LISTA DE CURSOS POR ID
router.get("/user/:user_id", authMiddleware, coursesController.getCoursesById);

// POST - CREA UN NUEVO CURSO
router.post("/user/:user_id", authMiddleware, coursesController.createCourse);

// PUT - ACTUALIZA UN CURSO
router.put(
	"/user/:user_id/courses/:courseId",
	authMiddleware,
	coursesController.updateCourse
);

// DELETE - ELIMINA UN CURSO
router.delete(
	"/user/:user_id/courses/:courseId",
	authMiddleware,
	coursesController.deleteCourse
);

module.exports = router;
