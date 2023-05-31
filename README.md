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
  
- `services`: Se han establecido servicios de conexión de peticiones HTTP con el servidor utilizando Axios. Se utiliza la teoría de clases y se establece un método para la comunicación con cada endpoint. También se incluye un `auth-header` que agrega encabezados a las peticiones que requieren un token de autenticación. Para futuras implementaciones, se establecerá un `useService` para cada uno de los servicios.
  
- `store`: Implementación de Redux. Al utilizar el `Provider` en `index.js` y configurar el store, se pueden utilizar los estados globales de Redux para diversas funcionalidades. Hasta el momento, la implementación principal se ha realizado en el componente `Searchbar`, que recoge el estado de búsqueda y se utiliza en la vista `Friends`, específicamente en el componente `ComunityList`, para renderizar los resultados de la búsqueda.
  
- `utils`: Contiene funciones de uso común en la aplicación.

## Notas adicionales

Este proyecto tiene como objetivo desarrollar una red social utilizando Express en el backend y React en el frontend. Se han aplicado buenas prácticas, como el uso de rutas, controladores y middlewares en el backend, y la organización de componentes y el uso de Redux en el frontend.

En el futuro, se planea implementar modelos (schemas) en el backend y seguir mejorando la funcionalidad y la interfaz de usuario en el frontend.

Para cualquier consulta o duda, no dudes en contactarme. ¡Gracias por revisar este proyecto!