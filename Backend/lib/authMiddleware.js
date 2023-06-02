/* MIDDLEWARE QUE COMPRUEBA QUE EL TOKEN QUE ESTÁ ENVIÁNDOSE EN 
LAS PETICIONES PRIVADAS POR EL HEADER ES CORRECTO
*/
const jsonwebtoken = require("jsonwebtoken");

function authMiddleware(req, res, next) {
	const token = req.headers.authorization
		? req.headers.authorization.split(" ")[1]
		: null;
	if (!token) {
		return res.status(401).json({
			error: "Unauthorized user",
		});
	}

	try {
		const decoded = jsonwebtoken.verify(token, process.env.JWT_SECRET);
		req.jwtInfo = decoded;

		// console.log(decoded);
		next();
	} catch (error) {
		console.log(error);
		res.status(401).json({
			error: "Token no válido",
		});

		return;
	}
}

module.exports = authMiddleware;
