// test/auth.test.js
const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app");
const expect = chai.expect;

chai.use(chaiHttp);

const newUser = {
	name: "Martina",
	firstname: "Fernández",
	nickname: "avendez",
	birthdate: "1968-03-02",
	gender: "F",
	avatar:
		"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
	password: "Grupo3!!",
	email: "avendez@grupo3.com",
	occupation: "Developer",
	location: "New York",
	grade: "Bachiller",
	linkedin: "https://www.linkedin.com/in/avendez",
	language: "English",
	bio: "Software developer student",
};

describe("POST /auth/register", () => {
	it("debería registrar un nuevo usuario", (done) => {
		chai
			.request(app)
			.post("/auth/register")
			.send(newUser)
			.end((err, res) => {
				expect(err).to.be.null;
				expect(res).to.have.status(200);
				// Agrega las expectativas adicionales que necesites aquí
				done();
			});
	});

	it("debería fallar si el email ya existe", (done) => {
		const invalidEmailUser = { ...newUser, email: "anomima@gmail.com" };

		chai
			.request(app)
			.post("/auth/register")
			.send(invalidEmailUser)
			.end((err, res) => {
				expect(res).to.have.status(400);
				expect(res.body.message).to.equal('Ya existe un usuario con ese email');
				done();
			});
	});

	it("debería fallar si el nickname ya existe", (done) => {
		const duplicateNicknameUser = { ...newUser, nickname: "anonimus" };

		chai
			.request(app)
			.post("/auth/register")
			.send(duplicateNicknameUser)
			.end((err, res) => {
				expect(res).to.have.status(400);
				expect(res.body.message).to.equal(
					"Ya existe un usuario con ese nickname"
				);
				done();
			});
	});

	it("debería fallar si la contraseña no cumple con los requisitos de seguridad", (done) => {
		const weakPasswordUser = { ...newUser, password: "123" };

		chai
			.request(app)
			.post("/auth/register")
			.send(weakPasswordUser)
			.end((err, res) => {
				expect(res).to.have.status(400);
				expect(res.body.message).to.equal(
					"La password debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula, un número y un caracter especial."
				);
				done();
			});
	});
});
