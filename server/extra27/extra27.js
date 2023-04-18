const fs = require("fs");

// crear archivo de texto
fs.writeFile("archivo1.txt", "", function (err) {
	if (err) throw err;
	console.log("Archivo creado exitosamente");
});

// insertar texto placeholder
fs.appendFile("archivo1.txt", "Este es un placeholder", function (err) {
	if (err) throw err;
	console.log("Texto agregado exitosamente");
});

// guardar archivo
fs.writeFile("archivo1.txt", "Este es un archivo actualizado", function (err) {
	if (err) throw err;
	console.log("Archivo guardado exitosamente");
});

// leer archivo
fs.readFile("archivo1.txt", "utf8", function (err, data) {
	if (err) throw err;
	console.log("Contenido del archivo:", data);
});

// crear otro archivo
fs.writeFile("archivo2.txt", "Este es un nuevo archivo", function (err) {
	if (err) throw err;
	console.log("El archivo 2 se creó exitosamente");
});

// leer el contenido del segundo archivo
fs.readFile("archivo2.txt", "utf8", function (err, data) {
	if (err) throw err;
	console.log("Contenido del archivo 2:", data);
});
