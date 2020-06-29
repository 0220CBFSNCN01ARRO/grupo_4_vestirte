-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jun 29, 2020 at 08:56 PM
-- Server version: 5.7.24
-- PHP Version: 7.2.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `vestirte`
--

-- --------------------------------------------------------

--
-- Table structure for table `carrito`
--

CREATE TABLE `carrito` (
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `productos`
--

CREATE TABLE `productos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(20) NOT NULL,
  `descripcion` varchar(1000) NOT NULL,
  `precio` int(11) NOT NULL,
  `descuento` int(11) NOT NULL,
  `imagen` varchar(50) NOT NULL,
  `categoria` varchar(20) NOT NULL,
  `envio` int(11) DEFAULT NULL,
  `stock` int(11) NOT NULL,
  `costoenvio` int(11) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `productos`
--

INSERT INTO `productos` (`id`, `nombre`, `descripcion`, `precio`, `descuento`, `imagen`, `categoria`, `envio`, `stock`, `costoenvio`) VALUES
(1, 'Campera Marron', 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas  las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.', 1234, 30, 'img-campera-marron.jpg', 'destacado', 33, 1, 1),
(2, 'Canguro Blanco', 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas  las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.', 1000, 30, 'img-canguro-blanco.jpg', 'destacado', 10, 3, 1),
(3, 'Ropa de Marca', 'Lorem Ipsum', 1122, 14, 'product_31.jpg', 'oferta', 30, 25, 1),
(4, 'Pantalon Chino', 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas  las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.', 600, 50, 'img-pantalon-chino.jpg', 'destacado', 200, 3, 1),
(5, 'Remera Negra', 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas  las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.', 610, 50, 'img-remera-negra.jpg', 'destacado', 1200, 3, 1),
(7, 'Remera Fila', '- Toda la prenda se arma en Overlock de 4 hilos reforzando costuras de seguridad.  - Cuello de reeb fino al tono  - Tirillera de hombro a hombro con hilos de Algodón  - Tapacostura 2AG Fino con hilos de algodón en mangas y cintura.  Producto ideal para Impresion en: Serigrafia, DTG, Tranfers, Bordado , y Vinilo.', 1200, 0, 'imagen-1591119007761.jfif', 'remera', NULL, 100, 1),
(8, 'Remera puma', '- Toda la prenda se arma en Overlock de 4 hilos reforzando costuras de seguridad.  - Cuello de reeb fino al tono  - Tirillera de hombro a hombro con hilos de Algodón  - Tapacostura 2AG Fino con hilos de algodón en mangas y cintura.  Producto ideal para Impresion en: Serigrafia, DTG, Tranfers, Bordado , y Vinilo.', 1300, 0, 'imagen-1591119060110.jfif', 'remera', NULL, 100, 1),
(9, 'Remera Fila', '- Toda la prenda se arma en Overlock de 4 hilos reforzando costuras de seguridad.  - Cuello de reeb fino al tono  - Tirillera de hombro a hombro con hilos de Algodón  - Tapacostura 2AG Fino con hilos de algodón en mangas y cintura.  Producto ideal para Impresion en: Serigrafia, DTG, Tranfers, Bordado , y Vinilo.', 670, 0, 'imagen-1591119137670.jfif', 'remera', NULL, 100, 1);

-- --------------------------------------------------------

--
-- Table structure for table `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(20) NOT NULL,
  `apellido` varchar(20) NOT NULL,
  `email` varchar(100) NOT NULL,
  `categoria` varchar(20) NOT NULL,
  `password` varchar(100) NOT NULL,
  `image` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `apellido`, `email`, `categoria`, `password`, `image`) VALUES
(1, 'Iasi', 'Salomon', 'iasisalomon@gmail.com', 'user', '$2b$10$YsSGY452HCyQ.xDpgTimYecYpOFmZt8xwTrJ.hupdI6062s8q2gOS', 'image-1591477395530.png'),
(2, 'marcela', 'valenti', 'marcelavalenti@gmail.com', 'user', '$2b$10$YsSGY452HCyQ.xDpgTimYecYpOFmZt8xwTrJ.hupdI6062s8q2gOS', 'image-1592079426437.png'),
(3, 'hola', 'perro', 'holaperro@gmail.com', 'user', '$2b$10$YsSGY452HCyQ.xDpgTimYecYpOFmZt8xwTrJ.hupdI6062s8q2gOS', 'image-1592079710969.jpg'),
(4, 'pablo', 'cane', 'pablocane92@gmail.com', 'user', '$2b$10$lRYeoF987lPcHDJVvQ/HqOOp6/TgMbuU./txedhmBknnhAuCptN6K', 'image-1592082229999.jpg'),
(5, 'ricardo', 'ricardo', 'ricardo@gmail.com', 'user', '$2b$10$cd90hQgkPjqTsPzDa0hX9eN77grG4qxq/dKyE9wsxvf8pDG5p5Tbe', 'image-1592085120690.jpg'),
(6, 'nuevo', 'ultimo', 'nuevo@ultimo.com', 'user', '$2b$10$xTbQHfRhGK7KcRaMvlRl.u5KAPdqIzfeEYGEGmrjN8UrMXd8op.wu', 'image-1592087075274.jpg'),
(7, 'hola', 'hola', 'hola@gmail.com', 'user', '$2b$10$/P3wlGnoDJuCybhYPb5Bqe1J3E7zSsvB1srzEkvFiRv4CjmleKiyy', 'image-1592094796360.jpg'),
(8, 'victor', 'ortiz', 'ortiz.victor.w@gmail.com', 'admin', '$2b$10$znenFEHPvxyZBxo62ESVO.AVPC3QQjFULuoC2YJJitpxjbwu/ffeW', 'image-1592226304801.jpg'),
(9, '1', '2', '2@gmail.com', 'user', '$2b$10$aZBgGSL6L7e/keg0eEY7OOgc5rb9VnD5e0DIUcaUVHOARJQhjrvoW', 'image-1592248635888.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `usuario_producto`
--

CREATE TABLE `usuario_producto` (
  `id` int(11) NOT NULL,
  `usuarioId` int(11) NOT NULL,
  `productoId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `usuario_producto`
--

INSERT INTO `usuario_producto` (`id`, `usuarioId`, `productoId`) VALUES
(1, 2, 2),
(2, 3, 2),
(3, 1, 1),
(4, 2, 5);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `carrito`
--
ALTER TABLE `carrito`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `usuario_producto`
--
ALTER TABLE `usuario_producto`
  ADD PRIMARY KEY (`id`),
  ADD KEY `usuarioId` (`usuarioId`),
  ADD KEY `productoId` (`productoId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `carrito`
--
ALTER TABLE `carrito`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `usuario_producto`
--
ALTER TABLE `usuario_producto`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `usuario_producto`
--
ALTER TABLE `usuario_producto`
  ADD CONSTRAINT `usuario_producto_ibfk_1` FOREIGN KEY (`productoId`) REFERENCES `productos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `usuario_producto_ibfk_2` FOREIGN KEY (`usuarioId`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
