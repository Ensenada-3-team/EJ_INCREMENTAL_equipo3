
## correcciones al registro 

- en middleware para verificar contraseña quitada la ñ en las variables
- instalado npm i cors ( y añadido  con require y app.use(cors())) que evita conflictos entre puertos
- el puerto donde estaba configurado la app era 3000 en vez de 3001 como teníamos en las peticiones ( no se comunicaban)
- en el eventListener registro.js , cuando redirigimos al login con window.location.href , la ruta a poner es 'login.html' (teníamos './login')