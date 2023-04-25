-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 25-04-2023 a las 12:35:38
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bd_equipo3`
--
CREATE DATABASE IF NOT EXISTS `bd_equipo3` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `bd_equipo3`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `friends`
--

CREATE TABLE `friends` (
  `friendship_id` bigint(20) NOT NULL,
  `user1_id` bigint(20) NOT NULL,
  `user2_id` bigint(20) NOT NULL,
  `status` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `friends`
--

INSERT INTO `friends` (`friendship_id`, `user1_id`, `user2_id`, `status`) VALUES
(1, 1, 3, 1),
(2, 1, 5, 1),
(3, 3, 6, 1),
(4, 3, 1, 1),
(5, 5, 1, 1),
(6, 5, 3, 1),
(7, 3, 5, 1),
(8, 6, 3, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `posts`
--

CREATE TABLE `posts` (
  `post_Id` bigint(20) NOT NULL,
  `text` varchar(256) NOT NULL,
  `image` varchar(100) NOT NULL,
  `post_date` datetime NOT NULL DEFAULT current_timestamp(),
  `like_number` int(11) NOT NULL,
  `user_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `posts`
--

INSERT INTO `posts` (`post_Id`, `text`, `image`, `post_date`, `like_number`, `user_id`) VALUES
(1, '¡Hola a todos! ¡Estoy emocionado de unirme a esta red social y conectarme con gente interesante!', '', '2022-04-03 17:02:38', 16, 1),
(2, '¿Alguien sabe dónde puedo encontrar los mejores tacos en la ciudad? ¡Estoy buscando recomendaciones!', '', '2022-08-17 11:02:38', 54, 1),
(5, '¡Acabo de publicar mi nuevo blog en la red social! Espero que lo disfruten tanto como yo disfruté escribiéndolo.', '', '2023-01-04 10:05:47', 5, 7),
(7, '¿Alguien más está emocionado por el próximo concierto de su banda favorita? ¡Solo quedan unos días!', '', '2022-06-22 22:08:21', 27, 3),
(8, '¡Feliz cumpleaños a mi amigo más cercano! ¡Espero que tengas un día increíble!', '', '2023-04-14 09:08:21', 35, 6),
(9, '¿Alguien más está trabajando en un proyecto interesante? ¡Me encantaría saber más sobre lo que estás haciendo!', '', '2023-02-13 17:11:01', 321, 5),
(10, '¡No puedo creer que finalmente me gradué de la universidad! ¡Estoy tan emocionado por lo que viene a continuación!', '', '2022-09-20 17:11:49', 204, 7),
(11, '¿Alguien más ha estado leyendo algún buen libro últimamente? ¡Estoy buscando nuevas recomendaciones de lectura!', '', '2023-04-11 17:11:01', 2, 6),
(12, '¡Estoy tan agradecido por mi familia y amigos! ¡No sé qué haría sin ellos!', '', '2022-12-24 23:21:01', 150, 3),
(13, '¿Alguien más está planeando unas vacaciones divertidas? ¡Me encantaría saber a dónde van!', '', '2023-03-05 17:15:01', 54, 5),
(14, '¡Solo quería decir hola a todos mis seguidores y desearles un maravilloso día!', '', '2023-02-18 09:15:01', 3, 7),
(15, '¿Alguien más está aprendiendo un nuevo idioma? ¡Comparte tus consejos para aprender más rápido!', '', '2022-11-01 17:16:51', 94, 6),
(16, '¡Acabo de descubrir mi nueva canción favorita! ¿Cuál es la tuya?', '', '2022-10-03 17:16:51', 450, 5),
(17, '¿Alguien más está experimentando con nuevas recetas de cocina? ¡Comparte tus favoritas!', '', '2022-08-10 12:16:51', 127, 3),
(18, '¡No puedo esperar para ir al festival de música este fin de semana! ¿Quién más va?', '', '2022-09-13 17:16:51', 79, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `user_id` bigint(20) NOT NULL,
  `name` varchar(20) NOT NULL,
  `firstname` varchar(20) NOT NULL,
  `nickname` varchar(10) NOT NULL,
  `birthdate` date NOT NULL,
  `avatar` varchar(150) NOT NULL,
  `password` varchar(20) NOT NULL,
  `email` varchar(20) NOT NULL,
  `ocupation` varchar(100) NOT NULL,
  `location` varchar(50) NOT NULL,
  `grade` varchar(150) NOT NULL,
  `linkedin` varchar(25) NOT NULL,
  `language` varchar(50) NOT NULL,
  `hobbie` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`user_id`, `name`, `firstname`, `nickname`, `birthdate`, `avatar`, `password`, `email`, `ocupation`, `location`, `grade`, `linkedin`, `language`, `hobbie`) VALUES
(1, 'Silvia', 'Pescador', 'SP', '1986-10-08', '', 'Grupo3!!', 'pescador@grupo3.com', 'Software Engineer', 'Madrid', 'Master of Science in Computer Science (MSCS) de la Universidad de Stanford', 'pescador@linkedin.com', 'Italiano', 'Tocar la guitarra'),
(3, 'Sandra', 'Suarez', 'SS', '1983-12-16', '', 'Grupo3!!', 'suarez@grupo3.com', 'Marketing Manager', 'Barcelona', 'JavaScript para Marketers', 'suarez@linkedin.com', 'Ingles', 'Cantar (Voz principal de un grupo de Rock)'),
(5, 'Jose', 'Melian', 'JM', '1973-07-12', '', 'Grupo3!!', 'melian@grupo3.com', 'Sales Director', 'Madrid', 'Salesforce development', 'melian@linkedin.com', 'Ingles', 'Juegos de Estrategia'),
(6, 'Aurea', 'Perez', 'AP', '1980-01-09', '', 'Grupo3!!', 'perez@grupo3.com', 'HR Manager', 'Valencia', 'HR Analytics: Using Machine Learning to Drive Better Talent Decisions', 'perez@linkedin.com', 'Aleman', 'Leer / Inteligencia Emocional'),
(7, 'Ricardo', 'Sanchez', 'RS', '1993-05-20', '', 'Grupo89!!', 'sanchez@grupo89.com', 'Web developer', 'León', 'Intro to Game Development', 'sanchez@linkedin.com', 'Frances', 'Gaming');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `friends`
--
ALTER TABLE `friends`
  ADD PRIMARY KEY (`friendship_id`),
  ADD KEY `user2_id` (`user2_id`),
  ADD KEY `user1_id` (`user1_id`) USING BTREE;

--
-- Indices de la tabla `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`post_Id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`),
  ADD KEY `user_id` (`user_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `friends`
--
ALTER TABLE `friends`
  MODIFY `friendship_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `posts`
--
ALTER TABLE `posts`
  MODIFY `post_Id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `user_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `friends`
--
ALTER TABLE `friends`
  ADD CONSTRAINT `friends_ibfk_1` FOREIGN KEY (`user1_id`) REFERENCES `users` (`user_id`),
  ADD CONSTRAINT `friends_ibfk_2` FOREIGN KEY (`user2_id`) REFERENCES `users` (`user_id`);

--
-- Filtros para la tabla `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `posts_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
