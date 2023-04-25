const fs = require('fs');

// Nombre del archivo y texto placeholder
const fileName = 'miArchivo.txt';
const placeholderText = 'Texto de ejemplo';

// Crear archivo de texto
fs.writeFile(fileName, '', function (err) {
  if (err) throw err;
  console.log(`Archivo ${fileName} creado exitosamente.`);
  
  // Insertar texto placeholder
  fs.appendFile(fileName, placeholderText, function (err) {
    if (err) throw err;
    console.log(`Texto "${placeholderText}" insertado en ${fileName}.`);
    
    // Guardar archivo
    console.log(`Guardando ${fileName}...`);
    fs.writeFile(fileName, '', function (err) {
      if (err) throw err;
      console.log(`Archivo ${fileName} guardado exitosamente.`);
    });
  });
});
