# MANUAL DE LA API 

Aquí se encuentran una relación de los endpoints creados para esta API. 

## Auth Service - AUTENTICACIÓN

**Login**

- Método: `POST`
- URL: `http://localhost:3000/auth/login`
- Parámetros de la solicitud:
  - `nicknameOrEmail` (cadena): El nombre de usuario o correo electrónico del usuario.
  - `password` (cadena): La contraseña del usuario.
- Respuesta exitosa:
  - Código de estado: `200`
  - Cuerpo de respuesta: Objeto con el token de autenticación y el user sin la contraseña.


**Register**

- Método: `POST`
- URL: `http://localhost:3000/auth/register`
- Parámetros de la solicitud:
  - `name` (cadena): El nombre del usuario.
  - `firstname` (cadena): El apellido del usuario.
  - `nickname` (cadena): El nombre de usuario del usuario.
  - `birthdate` (cadena): La fecha de nacimiento del usuario.
  - `gender` (cadena): El género del usuario.
  - `avatar` (cadena): La URL del avatar del usuario.
  - `password` (cadena): La contraseña del usuario.
  - `email` (cadena): El correo electrónico del usuario.
  - `occupation` (cadena): La ocupación del usuario.
  - `location` (cadena): La ubicación del usuario.
  - `grade` (cadena): El grado del usuario.
  - `linkedin` (cadena): El perfil de LinkedIn del usuario.
  - `language` (cadena): El idioma del usuario.
  - `bio` (cadena): La biografía del usuario.
- Respuesta exitosa:
  - Código de estado: `200`

**Change Password**

- Método: `PUT`
- URL: `http://localhost:3000/auth/change-password`
- Parámetros de la solicitud:
  - `userId` (cadena): El ID del usuario.
  - `oldPassword` (cadena): La contraseña antigua del usuario.
  - `password` (cadena): La nueva contraseña del usuario.
- Encabezados:
  - `Authorization`: Token de autenticación del usuario.
- Respuesta exitosa:
  - Código de estado: `200`


## Courses Service - CURSOS DEL USUARIO

**GetUserCourses**

- Método: `GET`
- URL: `http://localhost:3000/courses/user/{userId}`
- Parámetros de la solicitud:
  - `userId` (cadena): El ID del usuario.
- Encabezados:
  - `Authorization`: Token de autenticación del usuario.
- Respuesta exitosa:
  - Código de estado: `200`
  - Cuerpo de respuesta: Objeto con los cursos del usuario.

**AddCourse**

- Método: `POST`
- URL: `http://localhost:3000/courses/user/{userId}`

- Parámetros de la solicitud:
  - `userId` (cadena): El ID del usuario.
  - `newCourse` (objeto): Objeto con los datos del nuevo curso.
- Encabezados:
  - `Authorization`: Token de autenticación del usuario.
- Respuesta exitosa:
  - Código de estado: `201`
  - Cuerpo de respuesta: Objeto con los datos del curso agregado.

**UpdateCourse**

- Método: `PUT`
- URL: `http://localhost:3000/courses/user/{userId}/courses/{courseId}`
- Parámetros de la solicitud:
  - `userId` (cadena): El ID del usuario.
  - `courseId` (cadena): El ID del curso a actualizar.
  - `newCourse` (objeto): Objeto con los nuevos datos del curso.
- Encabezados:
  - `Authorization`: Token de autenticación del usuario.
- Respuesta exitosa:
  - Código de estado: `200`
  - Cuerpo de respuesta: Mensaje de éxito al actualizar el curso.

**DeleteCourse**

- Método: `DELETE`
- URL: `http://localhost:3000/courses/user/{userId}/courses/{courseId}`
- Parámetros de la solicitud:
  - `userId` (cadena): El ID del usuario.
  - `courseId` (cadena): El ID del curso a eliminar.
- Encabezados:
  - `Authorization`: Token de autenticación del usuario.
- Respuesta exitosa:
  - Código de estado: `200`
  - Cuerpo de respuesta: Mensaje de éxito al eliminar el curso.

## Friend Service - RELACIONES DE AMISTAD

**GetAllFriends**

- Método: `GET`
- URL: `http://localhost:3000/friends/user/{userId}`
- Parámetros de la solicitud:
  - `userId` (cadena): El ID del usuario.
- Encabezados:
  - `Authorization`: Token de autenticación del usuario.
- Respuesta exitosa:
  - Código de estado: `200`
  - Cuerpo de respuesta: Objeto con los amigos del usuario y su último login registrado.

**GetAllNonFriends**

- Método: `GET`
- URL: `http://localhost:3000/friends/user/{userId}/nonfriends`
- Parámetros de la solicitud:
  - `userId` (cadena): El ID del usuario.
- Encabezados:
  - `Authorization`: Token de autenticación del usuario.
- Respuesta exitosa:
  - Código de estado: `200`
  - Cuerpo de respuesta: Objeto con los no amigos del usuario y su último login registrado.

**GetFriendshipRequests**

- Método: `GET`
- URL: `http://localhost:3000/friends/pending-requests/{userId}`
- Parámetros de la solicitud:
  - `userId` (cadena): El ID del usuario.
- Encabezados:
  - `Authorization`: Token de autenticación del usuario.
- Respuesta exitosa:
  - Código de estado: `200`
  - Cuerpo de respuesta: Objeto con las solicitudes de amistad del usuario y su último login registrado.

**GetFriendshipStatus**

- Método: `GET`
- URL: `http://localhost:3000/friends/status/{userId}/{otherUserId}`
- Parámetros de la solicitud:
  - `userId` (cadena): El ID del usuario.
  - `otherUserId` (cadena): El ID del otro usuario.
- Encabezados:
  - `Authorization`: Token de autenticación del usuario.
- Respuesta exitosa:
  - Código de estado: `200`
  - Cuerpo de respuesta: Objeto con el estado de amistad entre los usuarios.

**SendFriendshipRequest**

- Método: `POST`
- URL: `http://localhost:3000/friends/send-request`
- Parámetros de la solicitud:
  - `sender_id` (cadena): El ID del usuario que envía la solicitud.
  - `receiver_id` (cadena): El ID del usuario que recibe la solicitud.
- Encabezados:
  - `Authorization`: Token de autenticación del usuario.
- Respuesta exitosa:
  - Código de estado: `200`
  - Cuerpo de respuesta: Mensaje de éxito al solicitar la amistad.

**CancelFriendshipRequest**

- Método: `DELETE`
- URL: `http://localhost:3000/friends/cancel-request`
- Parámetros de la solicitud:
  - `sender_id` (cadena): El ID del usuario que envió la solicitud.
  - `receiver_id` (cadena): El ID del usuario que recibió la solicitud.
- Encabezados:
  - `Authorization`: Token de autenticación del usuario.
- Respuesta exitosa:
  - Código de estado: `200`
  - Cuerpo de respuesta: Mensaje de éxito al cancelar la solicitud de amistad.

**AcceptFriendshipRequest**

- Método: `PUT`
- URL: `http://localhost:3000/friends/accept-request`
- Parámetros de la solicitud:
  - `sender_id` (cadena): El ID del usuario que envió la solicitud.
  - `receiver_id` (cadena): El ID del usuario que recibió la solicitud.
- Encabezados:
  - `Authorization`: Token de autenticación del usuario.
- Respuesta exitosa:
  - Código de estado: `200`
  - Cuerpo de respuesta: Mensaje de éxito al aceptar la solicitud de amistad.

**RejectFriendshipRequest**

- Método: `PUT`
- URL: `http://localhost:3000/friends/reject-request`
- Parámetros de la solicitud:
  - `sender_id` (cadena): El ID del usuario que envió la solicitud.
  - `receiver_id` (cadena): El ID del usuario que recibió la solicitud.
- Encabezados:
  - `Authorization`: Token de autenticación del usuario.
- Respuesta exitosa:
  - Código de estado: `200`
  - Cuerpo de respuesta: Mensaje de éxito al rechazar la solicitud de amistad.

**DeleteFriendship**

- Método: `DELETE`
- URL: `http://localhost:3000/friends/delete`
- Parámetros de la solicitud:
  - `user_id` (cadena): El ID del usuario.
  - `friend_id` (cadena): El ID del amigo a eliminar.
- Encabezados:
  - `Authorization`: Token de autenticación del usuario.
- Respuesta exitosa:
  - Código de estado: `200`
  - Cuerpo de respuesta: Mensaje de éxito al eliminar al amigo.

## Post Service - PUBLICACIONES

**GetAllPosts**

- Método: `GET`
- URL: `http://localhost:3000/posts`
- Parámetros de la solicitud: Ninguno.
- Respuesta exitosa:
  - Código de estado: `200`
  - Cuerpo de respuesta: Objeto con todos los posts y tiempo desde que se posteó.

**GetUserAndFriendsPosts**

- Método: `GET`
- URL: `http://localhost:3000/posts/private/{userId}`
- Parámetros de la solicitud: 
  -  `user_id` (cadena): El ID del usuario.
- Respuesta exitosa:
  - Código de estado: `200`
  - Cuerpo de respuesta: Objeto con todos los posts relacionados con usuario y sus amigos, además de los datos de los usuarios.

**SearchPostsByNickname**

- Método: `GET`
- URL: `http://localhost:3000/posts/private/search/{nickname}`
- Parámetros de la solicitud:
  - `nickname` (cadena): El nombre de usuario para buscar los posts relacionados.
- Encabezados:
  - `Authorization`: Token de autenticación del usuario.
- Respuesta exitosa:
  - Código de estado: `200`
  - Cuerpo de respuesta: Objeto con los posts relacionados al nombre de usuario.

**CreatePost**

- Método: `POST`
- URL: `http://localhost:3000/posts/new-post`
- Parámetros de la solicitud:
  - `user_id` (cadena): El ID del usuario que crea el post.
  - `text` (cadena): El contenido del post.
- Encabezados:
  - `Authorization`: Token de autenticación del usuario.
- Respuesta exitosa:
  - Código de estado: `200`
  - Cuerpo de respuesta: Objeto con los datos del post creado, incluyendo su post_id y el tiempo que pasa desde su publicación.


**DeletePost**

- Método: `DELETE`
- URL: `http://localhost:3000/posts/delete-post/{postId}`
- Parámetros de la solicitud:
  - `postId` (cadena): El ID del post a eliminar.
- Encabezados:
  - `Authorization`: Token de autenticación del usuario.
- Respuesta exitosa:
  - Código de estado: `200`
  - Cuerpo de respuesta: Mensaje de éxito al eliminar el post.



## Querys Service - CONSULTAS AL ADMINISTRADOR

- **Obtener todas las consultas**
  - Método: GET
  - URL: `http://localhost:3000/querys`
  - Parámetros de consulta:
    - `userId` (opcional): ID del usuario para filtrar las consultas por usuario.
  - Cabeceras:
    - Authorization: Token de autenticación del usuario.
  - Respuesta exitosa:
    - Código: 200 (OK)
    - Cuerpo: Array de objetos que representan las consultas.

- **Agregar una consulta**
  - Método: POST
  - URL:` http://localhost:3000/querys/create/:userId`
  - Parámetros de URL:
    - `userId`: ID del usuario al que pertenece la consulta.
  - Cuerpo:
    - newQuery: Objeto que contiene los datos de la nueva consulta.
  - Cabeceras:
    - Authorization: Token de autenticación del usuario.
  - Respuesta exitosa:
    - Código: 201 (CREATED)
    - Cuerpo: Objeto que representa la consulta agregada.

- **Agregar una respuesta a una consulta**
  - Método: PUT
  - URL: `http://localhost:3000/querys/respond/query/:queryId`
  - Parámetros de URL:
    - `queryId`: ID de la consulta a la que se agrega la respuesta.
  - Cuerpo:
    - `adminResponse`: Texto de la respuesta del administrador
    - `adminId`: ID del administrador que responde a la consulta
  - Cabeceras:
    - Authorization: Token de autenticación del usuario administrador.
  - Respuesta exitosa:
    - Código: 200 (OK)
    - Cuerpo: Objeto que representa la consulta con la respuesta agregada.


## User Service - GESTION DE USUARIOS

- **Obtener todos los usuarios**
  - Método: GET
  - URL: `http://localhost:3000/users`
  - Respuesta exitosa:
    - Código: 200 (OK)
    - Cuerpo: Array de objetos que representan los usuarios.

- **Obtener un usuario por ID**
  - Método: GET
  - URL: `http://localhost:3000/users/user/:userId`
  - Parámetros de URL:
    - `userId`: ID del usuario que se desea obtener.
  - Respuesta exitosa:
    - Código: 200 (OK)
    - Cuerpo: Objeto que representa el usuario solicitado, mas su último login.

- **Obtener un usuario por nickname**
  - Método: GET
  - URL: `http://localhost:3000/users/user/nickname/:nickname`
  - Parámetros de URL:
    - `nickname`: Nickname del usuario que se desea obtener.
  - Respuesta exitosa:
    - Código: 200 (OK)
    - Cuerpo: Objeto que representa el usuario solicitado.

- **Comprueba si un nickname o un email existen el la base de datos a excepción de los del usuario que consulta**
  - Método: GET
  - URL: `http://localhost:3000/users/check/:userId`
  - Parámetros de URL:
    - `userId`: ID del usuario que se desea verificar
  - Parámetros de consulta:
    - `nickname`: Nickname del usuario a verificar en bd.
    - `email`: Email del usuario a verificar en bd.
  - Respuesta exitosa:
    - Código: 200 (OK)
    - Cuerpo: Objeto que indica si el usuario ha sido verificado o no.

- **Actualizar los datos de un usuario**
  - Método: PATCH
  - URL: `http://localhost:3000/users/change-data/:userId`
  - Parámetros de URL:
    - `userId`: ID del usuario que se desea actualizar.
  - Cuerpo: 
    - `userData`: Objeto que contiene los datos que el usuario desea actualizar.
  - Cabeceras:
    - Authorization: Token de autenticación del usuario.
  - Respuesta exitosa:
    - Código: 200 (OK)
    - Cuerpo: Objeto que representa el usuario actualizado.

- **Eliminar un usuario**
  - Método: DELETE
  - URL: `http://localhost:3000/users/delete/:userId`
  - Parámetros de URL:
    - `userId`: ID del usuario que se desea eliminar.
  - Cabeceras:
    - Authorization: Token de autenticación del usuario.
  - Respuesta exitosa:
    - Código: 200 (OK)
    - Cuerpo: Mensaje de éxito en el eliminado del usuario.


## Feedbacks Service - Feedbacks a un usuario

- **Obtener los feedbacks de un usuario o todos los feedbacks**
- Método: GET
  - URL: `http://localhost:3000/feedbacks/:userid`
  - Parámetros de URL:
    - `userId`(opcional): ID del usuario del que se desea obtener los feedbacks realizados por otros usuarios.
  - Cabeceras:
    - Authorization: Token de autenticación del usuario.
  - Respuesta exitosa:
    - Código: 200 (OK)
    - Cuerpo: Array de objetos con los feedbacks y los datos de sus autores.

- **Crear un nuevo feedback**
- Método: POST
  - URL: `http://localhost:3000/feedbacks/create`
  - Cuerpo de URL:
    - `feedback_sender`: Autor del feedback
    - `feedback_receiver`: Usuario que recibe el feedback
    - `content`: Contenido del feedback.
  - Cabeceras:
    - Authorization: Token de autenticación del usuario.
  - Respuesta exitosa:
    - Código: 200 (OK)
    - Cuerpo: Objeto json con el feedback_id creado.