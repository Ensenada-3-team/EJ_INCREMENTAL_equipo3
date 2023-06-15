const express = require("express");
const router = express.Router();
require("dotenv").config();

const authMiddleware = require("../lib/authMiddleware");
const postController = require("../controllers/posts");

/**ENDPOINTS http://localhost:3000/posts  */

//GET - OBTENER TODAS LAS PUBLICACIONES EXISTENTES
router.get("/", postController.getAllPosts);

//GET - TRAE LOS POSTS DE UN USUARIO POR SU NICKNAME
router.get(
	"/private/search/:nickname",
	authMiddleware,
	postController.getPostsByNickname
);

//GET - TRAE PUBLICACIONES DEL USUARIO Y DE SUS AMIGOS Y ADEMÁS LOS DATOS DE LOS AMIGOS QUE ESCRIBIERON EL POST
router.get(
	"/private/:user_id",
	authMiddleware,
	postController.getUserAndFriendsPosts
);

//POST- CREA UN POST + LO AÑADE A LA BASE DE DATOS + LO DEVUELVE JUNTO CON VALOR EXTRA PUBLISHDATE
router.post("/new-post/", authMiddleware, postController.createNewPost);

//DELETE- BORRAR UN POST POR SU POST_ID
router.delete(
	"/delete-post/:postId",
	authMiddleware,
	postController.deletePost
);

//POST - AÑADIR LIKES A UN POST                   /:post_id/likes/:user_id
//DELETE - USUARIO RETIRA LIKE A UNA PUBLICACION  /:post_id/likes/:user_id

module.exports = router;
