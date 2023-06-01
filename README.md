# PROYECTO FINAL : BOOTCAMP TECLA - ENSENADA

![Consigna Proyecto final](https://github.com/Ensenada-3-team/EJ_INCREMENTAL_equipo3/blob/09f32933646ca0c1e5743b087f14169e3d05bb33/frontend-react/public/sprint-final.png) Sprint Final


Este es el README del proyecto de fin de Bootcamp (Sprint final) que consiste en una red social desarrollada con Express en el backend y React (create-react-app) en el cliente/interfaz de usuario.

## Backend

### Inicialización

Para inicializar el servidor (backend), sigue los siguientes pasos:
```bash
npm install
npm run dev
```

### Estructura

El servidor es una API REST creada con Express Generator y utiliza Node.js. La estructura del backend se compone de las siguientes carpetas:

- `bin`: Contiene el archivo `www` donde se establece la configuración para la escucha del servidor en un puerto específico.
  
- `db`: Aquí se encuentra la conexión con la base de datos SQL mediante las dependencias `mysql2` y `mysql/promises`, creando un pool de conexiones.
  
- `lib`: Contiene varios archivos con funcionalidades utilizadas en diferentes partes del servidor, así como los middlewares para la verificación de datos provenientes del cliente y la autenticación.
  
- `routes`: Se definen las diferentes rutas del servidor utilizando `express.router()`. Cada ruta representa un apartado de la base de datos, como la autenticación de usuarios, cursos, relaciones de amistad, gestión de publicaciones, consultas a administradores y gestión de datos de usuario. En los endpoints se utiliza directamente SQL para evaluar su uso y manejo. Se planea una futura implementación estableciendo modelos (schemas) y una refactorización del código utilizando controladores.

Todas estas rutas se importan en `app.js`, el archivo principal del servidor. También se incluyen manejadores de errores preestablecidos.

### Dependencias destacadas

Entre las dependencias más relevantes instaladas en el backend se encuentran:

- `cors`: Se utiliza para permitir las solicitudes desde otros dominios o puertos.
- `jsonwebtoken`: Se utiliza para la autenticación de las peticiones mediante JSON Web Token (JWT).
- `bcrypt`: Se utiliza para el cifrado de contraseñas.
- `moment`: Se utiliza para el manejo de fechas y tiempos.
- `nodemon`: Se utiliza en el script de inicialización en modo de desarrollo para reiniciar automáticamente el servidor al realizar cambios.

## Frontend

### Inicialización

Para inicializar el cliente (frontend), sigue los siguientes pasos:
```bash
npm install
npm start

node --trace-warnings node-modules/react-scripts/scripts/start.js start
```
Inicializar el cliente en modo `--trace-warnings`
```bash
node --trace-warnings node-modules/react-scripts/scripts/start.js start
```

### Estructura

El cliente se desarrolló en React, utilizando el framework create-react-app. A lo largo del último sprint, se refactorizó el código previo desarrollado con JavaScript, HTML y CSS para utilizar React.

Los estilos principales se implementaron utilizando Bootstrap 5. Se descargó la última versión de Bootstrap 5 y se importó en el archivo principal de la aplicación (`index.js`).

La estructura del frontend consta de las siguientes carpetas:

- `public`: Contiene las imágenes, fondo y logo empleados en toda la web.
- `src`: Contiene la mayor parte de la aplicación.

Dentro de la carpeta `src`:

- `index.js` y `index.css`: Archivos principales de la aplicación.
- `.env.local`: Archivo de variables de entorno locales.

Las siguientes carpetas se encuentran dentro de `src`:

- `components`: Contiene el componente principal `App.js` y los subcomponentes que forman parte de las diferentes vistas establecidas para las distintas rutas.
  - `App`: Contiene el componente principal de la aplicación, `App.js`, y el archivo `routes.js`, que establece las rutas principales y las rutas protegidas por autenticación. También se incluyen los estilos CSS personalizados y media queries.
  
- `pages`: Aquí se encuentran los componentes padre que se renderizan en cada vista de cada ruta establecida en `App`, para una mejor organización y localización del código.
  
- `services`: Se han establecido servicios de conexión de peticiones HTTP con el servidor utilizando Axios. Se utiliza la teoría de clases y se establece un método para la comunicación con cada endpoint. También se incluye un `auth-header` que agrega encabezados a las peticiones que requieren un token de autenticación. Para futuras implementaciones, se establecerá un hook personalizado `useService` para cada uno de los servicios. Actualmente el proyecto cuenta con `useFriendService`.
  
- `store`: Implementación de Redux. Al utilizar el `Provider` en `index.js` y configurar el store, se pueden utilizar los estados globales de Redux para diversas funcionalidades. 
  - Hasta el momento, la implementación principal se ha realizado en el componente `Searchbar`, que recoge el estado de búsqueda y se utiliza en la vista `Friends`, específicamente en el componente `ComunityList`, para renderizar los resultados de la búsqueda.
  
- `utils`: Contiene funciones de uso común en la aplicación.

## Notas adicionales

Este proyecto tiene como objetivo desarrollar una red social utilizando Express en el backend y React en el frontend. Se han aplicado buenas prácticas, como el uso de rutas, controladores y middlewares en el backend, y la organización de componentes y el uso de Redux en el frontend.

En el futuro, se planea implementar modelos (schemas) en el backend y seguir mejorando la funcionalidad y la interfaz de usuario en el frontend.

Para cualquier consulta o duda, no dudes en contactarme. ¡Gracias por revisar este proyecto!


## Decisiones administrativas del proyecto

A lo largo del desarrollo del proyecto se han tomado ciertas decisiones que guían su funcionamiento. A continuación se detallan algunas de estas decisiones:

- **Requisitos de contraseña:** Se estableció que la contraseña debe tener un mínimo de 8 caracteres, incluir al menos una mayúscula, una minúscula, un número y un carácter especial.

- **Modificación de datos de usuario:** El usuario tiene la capacidad de modificar cualquiera de sus datos, incluyendo el correo electrónico. Sin embargo, al realizar cambios en los datos personales, se redirige al usuario nuevamente al inicio de sesión, excepto en el caso de la biografía y los cursos.

- **Eliminación de cuenta de usuario:** Cuando un usuario decide eliminar su cuenta, se realiza una eliminación en cascada de todas las referencias a su user_id en las tablas relacionales de la base de datos.

- **Opciones de inicio de sesión:** El usuario puede iniciar sesión tanto con su dirección de correo electrónico como con su nombre de usuario (nickname).

- **Diferentes implementaciones de componentes:** En el proyecto se pueden encontrar diferentes implementaciones para componentes similares. Esto se hizo intencionalmente con fines didácticos para mostrar las distintas formas de resolver ciertos componentes, como por ejemplo los formularios.

- **Publicación de cursos:** La funcionalidad de publicar cursos se ha desarrollado específicamente para el apartado de perfil del usuario, y no está incluida en los posteos generales.

*Ten en cuenta que estas decisiones están sujetas a futuras mejoras y refactorizaciones del proyecto.*


## Ejercicios incrementales ~ Localización en el código

A continuación se presentan los ejercicios incrementales requeridos diariamente para el desarrollo del proyecto, así como los componentes o secciones donde se puede encontrar su implementación.

### Seguridad

- **Login seguro:** Agrega la seguridad necesaria a la vista de diseño para que la contraseña se guarde de forma codificada. Se debe utilizar Localstorage en el frontend y Node.js en el backend.

### Validando la red social

- **Validación de datos:** Realiza las modificaciones necesarias para validar los tipos de datos ingresados en el formulario de creación de la cuenta del Tecler. Asegúrate de devolver los errores de manera adecuada. La validación debe realizarse en el frontend.

### Testeando los objetos

- **Testing de clase:** Realiza los tests necesarios para validar la clase que crea al usuario Tecler. Utiliza Mocha y Chai para realizar las pruebas.

### Login seguro en toda la red social

- **Verificación de usuario logueado:** Implementa la seguridad en toda la red social:
  1. Recibe el token creado en la página principal.
  2. Verifica que el usuario esté correctamente logueado. Utiliza Localstorage para este propósito.

### Mi primeros pasos en React

- **Publicar cursos o habilidades nuevas:** Crea un programa que genere un formulario HTML para publicar cursos o habilidades nuevas.

### Mis primeros componentes

- **Componentes para Publicar:** Genera los componentes necesarios para la pantalla "Publicar". Utiliza Localstorage para este propósito.

### Generando funcionalidad

- **Publicar curso:** Agrega la funcionalidad de "Publicar curso" en la pantalla de "Publicar".

### Modificando estados globales

- **Modificación de estados:** Desarrolla un programa que modifique los estados en "Publicar", incluyendo la funcionalidad de "Publicar nueva habilidad".

### Solicitud de ayuda

- **Formulario de ayuda:** Crea una pantalla de "Solicitud de ayuda" con un formulario para que los Teclers se comuniquen con los administradores de la aplicación. Utiliza React para implementarlo.

### Usando States

- **Utilizando State:** Agrega "State" al formulario de ayuda y muestra el resultado cargado.

### Mis primeros efectos en React

- **Cambio de título:** Desarrolla un programa que cambie el título de todas las pantallas de la aplicación utilizando `useEffect`. El título debe incluir el nombre del Tecler logueado, obtenido de la base de datos.

### Hooks

- **Contexto del componente:** Desarrolla un programa que agregue el contexto de un componente al formulario de ayuda.

### Usando Redux

- **Menú principal:** Desarrolla un programa que genere el menú principal de la aplicación utilizando React y todas las propiedades aprendidas hasta el momento.

### Redux 2.0

- **Comentarios de administrador:** Desarrolla un programa que permita a un administrador realizar comentarios sobre un Tecler. Crea un formulario en React y permite ingresar los datos en la base de datos.

*Nota: Para cada ejercicio, se buscó la implementación correspondiente en los componentes o secciones indicadas.*
  
##  A FUTURO
  - MEJORAS 
  - PUNTOS A IMPLEMENTAR
    - USUARIO:
      - Expiración de la sesión de la cuenta añadiendo tiempo de expiración al token. 
      - Posibilidad de login con cuenta de google
      - Posibilidad de añadir multimedia a los posts 
      - Posibilidad de editar su foto de perfil agregándola desde el archivo
    - ADMINISTRADOR:
      - CRUD : posibilidad de eliminar cuenta de usuario, resetear contraseña, bloquear y editar sus datos.
      - 
