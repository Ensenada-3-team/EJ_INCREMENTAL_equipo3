const fs = require("fs");

function crearArchivos() {
	try {
		// creamos archivo de texto
		fs.writeFileSync("archivo1.txt", "");
		console.log("Archivo creado exitosamente");

		// insertamos texto placeholder
		fs.appendFileSync("archivo1.txt", "Este es un placeholder");
		console.log("Texto agregado exitosamente");

		// guardamos archivo
		fs.writeFileSync("archivo1.txt", "Este es un archivo actualizado");
		console.log("Archivo guardado exitosamente");

		// leemos el archivo
		const data = fs.readFileSync("archivo1.txt", "utf8");
		console.log("Contenido del archivo:", data);

		// creamos otro archivo
		fs.writeFileSync("archivo2.txt", "Este es un nuevo archivo");
		console.log("El archivo 2 se creó exitosamente");

		// leemos el contenido del segundo archivo
		const data2 = fs.readFileSync("archivo2.txt", "utf8");
		console.log("Contenido del archivo 2:", data2);
	} catch (err) {
		console.error(err);
	}
}

// crearArchivos()

// function crearArchivo() {
//   return new Promise((resolve, reject) => {
//     // creamos archivo de texto
//     fs.writeFile("archivo1.txt", "", function (err) {
//       if (err) reject(err);
//       console.log("Archivo creado exitosamente");
//       resolve();
//     });
//   });
// }

// function agregarTexto() {
//   return new Promise((resolve, reject) => {
//     // insertamos texto placeholder
//     fs.appendFile("archivo1.txt", "Este es un placeholder", function (err) {
//       if (err) reject(err);
//       console.log("Texto agregado exitosamente");
//       resolve();
//     });
//   });
// }

// function guardarArchivo() {
//   return new Promise((resolve, reject) => {
//     // guardamos archivo
//     fs.writeFile("archivo1.txt", "Este es un archivo actualizado", function (err) {
//       if (err) reject(err);
//       console.log("Archivo guardado exitosamente");
//       resolve();
//     });
//   });
// }

// function leerArchivo() {
//   return new Promise((resolve, reject) => {
//     // leer archivo
//     fs.readFile("archivo1.txt", "utf8", function (err, data) {
//       if (err) reject(err);
//       console.log("Contenido del archivo:", data);
//       resolve();
//     });
//   });
// }

// function crearArchivo2() {
//   return new Promise((resolve, reject) => {
//     // crear otro archivo
//     fs.writeFile("archivo2.txt", "Este es un nuevo archivo", function (err) {
//       if (err) reject(err);
//       console.log("El archivo 2 se creó exitosamente");
//       resolve();
//     });
//   });
// }

// function leerArchivo2() {
// 	return new Promise((resolve, reject) => {
// 	  // leer el contenido del segundo archivo
// 	  fs.readFile("archivo2.txt", "utf8", function (err, data) {
// 	    if (err) reject(err);
// 	    console.log("Contenido del archivo 2:", data);
// 	    resolve();
// 	  });
// 	});
// }
