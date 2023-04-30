# EJERCICIO INCREMENTAL EQUIPO 3
Este es el repositorio del equipo 3 del Bootcamp full-stack Ensenada | Tecla


👩🏻‍🚀¡¡Bienvenidos!!

👥 Componentes: 
  - Sandra Suárez 
  - Áurea Pérez 
  - Jose Antonio Melian  
  - Silvia Pescador 
  
Aquí se encuentra el código fuente del proyecto, así como información relevante sobre su desarrollo.

## Stack tecnológico 👩🏻‍💻

- HTML5
- CSS3
- BOOTSTRAP 5.3.0
- FONTAWESOME
- JAVASCRIPT ES6
- VISUAL STUDIO CODE
- GIT | GITHUB 

## Enlaces de recursos empleados
💻 Repositorio Github: [https://github.com/Ensenada-3-team/EJ_INCREMENTAL_equipo3]

📇 TRELLO: [https://trello.com/invite/b/gDDTA1zH/ATTIdf9e182cb087c7dfdb97d1ce8b2f692391618FB6/equipo-3]

📲 SLACK: Canal de Slack creado específicamente para el bootcamp.

- API: [https://dummyjson.com]
- BOOTSTRAP DOC: [https://getbootstrap.com/docs/5.2/getting-started/introduction/]
- GOOGLE MEET

## Consideraciones generales 👁‍🗨

-Directorio raíz:
  - vistas .html 
  - fichero .gitignore
  - fichero README.md
- 
- Se ha creado una carpeta específica para:
  - los ficheros .js
  - los ficheros .png
  - los ficheros .css
  - componentes: fragmentos de código que posteriormente serán reusables con empleo de módulos.

✅ Se puede visitar cualquier apartado de la web una vez se ingresa al LiveServer, navegando con los links.
❗ Para regresar al index, basta con clicar en el Logo de Tecla desde cualquier parte de la web.( en la navbar ).

## Uso de Git/GitHub 🌱
En este proyecto se hizo uso de: 

◻ Git y GitHub para el control de versiones y el trabajo colaborativo. Se trabajó en un repositorio privado, pero posteriormente se trasladó a una organización en GitHub.

◻ Coordinación del equipo se llevó a cabo en diferentes ramas, siguiendo la metodología de Git Flow. Se establecieron normas para la rama main, que requieren un pull request y al menos una revisión antes de mergear cualquier rama.

◻ Acceso directo para manipular directamente el contenido de main: Solo el componente más experimentado, siendo así que el resto de compañeros se descargaban en local los cambios. 

◻ Revisión y aprobación de la pull-request de otro compañero: al menos 3 componentes lo han realizado.

◻ Manejo de Git y GitHub: 
  - cliente GitHub Desktop como interfaz más amigable para el primer contacto de algunos componentes con Github 
  - la consola Git Bash  
  - Visual Studio Code 

◻ También se abordó la resolución de conflictos.

Hemos incorporado un fichero .gitignore con contenido a evitar en el repositorio público.


# METODOLOGÍA 
## Ejercicios incrementales 📋
Los ejercicios incrementales se resolvieron e integraron de manera inicial, y posteriormente se realizaron refactorizaciones para mejorar el código y su integración en la web.


## Navegación por la web 🚢

La web cuenta con diferentes vistas:
- Las que atendienden a las consignas de los ejercicios incrementales.
  - feed.html
  - login.html
  - registro.html
  - friends.html
  - roberto-friend.html 
  - user-profile.html
  - search-posts.html | Ejercicio incremental 19

- Vistas extra, que surgieron como solución a integrar algunos ejercicios incrementales que no tenían por el momento utilidad directa en la web.
  - config-account.html --> En este apartado desarrollamos el ejercicio incremental 17 (simular eliminación de cuenta)
  - funciones.html --> Aquí integramos los ejercicios incrementales y extras 11, 12, 13, 14, y 18 , resultado del ejercicio incremental 15, que pedía a cada componente mergear una rama con cada ejercicio con main. (Integramos un botón en user-profile.html que lleva a este apartado.)
  

Se trabajó en la usabilidad y navegabilidad para mejorar la experiencia del usuario.

## MEJORAS IMPLEMENTADAS Y SUGERIDAS DESDE LA ENTREGA I:

- **Responsividad general de la web:**  
  Aunque queda refactorización de algunos apartados se ha invertido en adaptar diseño y código a los distintos tamaños de pantalla. Para eso hemos hecho uso de Bootstrap , mediaQuerys, y clases de CSS personalizadas (tratando de usar la menor cantidad posible). 

  Se han empleado dos ficheros diferenciados, style.css, y responsive.css para mediaQuerys.

- **Mayor resaltamiento del color de fuente:** 
  
  Hemos cambiado el color a uno más claro, de forma que sea más amigable el diseño y la experiencia de usuario.

- **Navbar:**
  
  Hemos optado por dejar la navbar (provisionalmente) anclada al fondo, para generar coherencia con el footer, y darle mayor protagonismo a las tarjetas del contenido principal.

- **Diseño:** 
  
  Hemos cambiado los iconos genéricos por una unificación de iconos de bootstrap. 
  En cuanto a los colores, hemos agregado contrastes de tarjetas para darle más vida y aspecto divertido estilo cómic a la web. 

- **A raíz de la corrección en la presentación del viernes 31**:

  Refactorizamos el Incremental 19, usando exclusivamente los datos de la api para obtener los datos del usuario así como los de los posts. 
  
  para ello se han creado dos ficheros :
  
    - getDefaultPosts.js : que devuelve por defecto una agregación al DOM de cinco posts (random) inyectados con datos de usuario y posts de dos endpoits distintos. Para este  fichero concretamente se ha contemplado el uso de promesas para manejar la asincronía de las dos peticiones distintas. Siguiente implmementación : Agregar paginación
  - 
    - getPubApi.js : De uso para obtener por input el nombre de usuario (no alias), y devolver las publicaciones exclusivas de ese usuario. 


### Proyección a futuro 📈
Se espera incorporar nuevas funcionalidades a la web de manera incremental, aun siendo la consigna de mínimo producto viable para su desarrollo.

Entre otras:

- Reorganizar las funciones javascript  y componentes diferenciados para hacer el código más limpio, adecuarse a mejores prácticas y poder facilitar el re-uso.
- Agregar paginación o scroll infinito.
- Utilización de módulos importados y exportados para evitar duplicados.
- Agregar funcionalidad al login y al registro de forma que al intruducir los datos de usuario registrado la experiencia de navegación sea personalizada (registro a través de plataformas como Google)
- Posibilidad de compartir posts.
- Uso del localStorage para guardar información útil de uso de experiencia de usuario.
- Eliminar el contenido y diseño estático del apartado de friends.html y otras vistas por uno dinámico con consumo de api. 
- Implmentar nuestra propia base de datos.
- Permitir subida de contenido multimedia al post.
- Diseñar una mejor imagen de marca y logo.
- Navegabilidad por la web más realista y a nuevos apartados internos.



## ⚫ ¡MUCHAS GRACIAS POR LEER! ⚫