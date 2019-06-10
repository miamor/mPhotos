-- phpMyAdmin SQL Dump
-- version 4.8.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jun 10, 2019 at 04:00 AM
-- Server version: 10.1.31-MariaDB
-- PHP Version: 7.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `photos_manager`
--

-- --------------------------------------------------------

--
-- Table structure for table `albums`
--

CREATE TABLE `albums` (
  `id` bigint(14) UNSIGNED NOT NULL,
  `user_identifier` varchar(255) NOT NULL,
  `title` varchar(100) NOT NULL DEFAULT '',
  `description` varchar(1000) DEFAULT '',
  `path` varchar(1000) DEFAULT NULL,
  `sysstamp` int(11) NOT NULL,
  `public` tinyint(1) NOT NULL DEFAULT '0',
  `visible` tinyint(1) NOT NULL DEFAULT '1',
  `downloadable` tinyint(1) NOT NULL DEFAULT '0',
  `password` varchar(100) DEFAULT NULL,
  `import_id` bigint(14) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `log`
--

CREATE TABLE `log` (
  `id` int(11) NOT NULL,
  `time` int(11) NOT NULL,
  `type` varchar(11) NOT NULL,
  `function` varchar(100) NOT NULL,
  `line` int(11) NOT NULL,
  `text` text
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `photos`
--

CREATE TABLE `photos` (
  `id` bigint(14) UNSIGNED NOT NULL,
  `title` varchar(100) NOT NULL DEFAULT '',
  `user_identifier` varchar(255) NOT NULL,
  `description` varchar(1000) DEFAULT '',
  `url` varchar(100) NOT NULL,
  `tags` varchar(1000) NOT NULL DEFAULT '',
  `public` tinyint(1) NOT NULL,
  `type` varchar(10) NOT NULL,
  `width` int(11) NOT NULL,
  `height` int(11) NOT NULL,
  `size` varchar(20) NOT NULL,
  `iso` varchar(15) NOT NULL,
  `aperture` varchar(20) NOT NULL,
  `make` varchar(50) NOT NULL,
  `model` varchar(50) NOT NULL,
  `shutter` varchar(30) NOT NULL,
  `focal` varchar(20) NOT NULL,
  `takestamp` int(11) DEFAULT NULL,
  `star` tinyint(1) NOT NULL,
  `thumbUrl` char(37) NOT NULL,
  `album` bigint(14) UNSIGNED NOT NULL,
  `checksum` char(40) DEFAULT NULL,
  `medium` tinyint(1) NOT NULL DEFAULT '0',
  `position` tinyint(1) NOT NULL DEFAULT '0',
  `import_id` bigint(14) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `presentation`
--

CREATE TABLE `presentation` (
  `id` bigint(14) NOT NULL,
  `album_id` bigint(14) NOT NULL,
  `photo_id` bigint(14) NOT NULL,
  `folder_id` bigint(14) DEFAULT NULL,
  `position` tinyint(1) NOT NULL DEFAULT '0',
  `note` longtext CHARACTER SET utf8
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `presentation_folder`
--

CREATE TABLE `presentation_folder` (
  `id` bigint(14) NOT NULL,
  `album_id` bigint(14) NOT NULL,
  `title` varchar(100) CHARACTER SET utf8 NOT NULL,
  `parent_folder` bigint(14) DEFAULT NULL,
  `position` tinyint(1) NOT NULL DEFAULT '0',
  `note` longtext CHARACTER SET utf8,
  `import_id` bigint(14) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `settings`
--

CREATE TABLE `settings` (
  `key` varchar(50) NOT NULL DEFAULT '',
  `value` varchar(200) DEFAULT ''
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `settings`
--

INSERT INTO `settings` (`key`, `value`) VALUES
('version', '030102'),
('username', '$2a$10$RoTu4GtNVExfS579graxTO0G.dnoW7UaPNirxYchTVYSnlW336k3u'),
('password', '$2a$10$ieatnUCnN0PKN9jcOLQvDex4r83z13dACBeD3RM.QYjHkBOSg7aoi'),
('checkForUpdates', '1'),
('sortingPhotos', 'ORDER BY id DESC'),
('sortingAlbums', 'ORDER BY id DESC'),
('imagick', '1'),
('dropboxKey', ''),
('identifier', 'baf2cdcfb96a63c56981974ee212422c'),
('skipDuplicates', '0'),
('plugins', '');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(14) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`) VALUES
(1, '$2a$10$RoTu4GtNVExfS579graxTO0G.dnoW7UaPNirxYchTVYSnlW336k3u', '$2a$10$ieatnUCnN0PKN9jcOLQvDex4r83z13dACBeD3RM.QYjHkBOSg7aoi'),
(2, '$2a$10$RoTu4GtNVExfS579graxTOHaxw7m24KGJzMtjXVItxA.Q6Pi1mxiK', '$2a$10$ieatnUCnN0PKN9jcOLQvDegQ7/4SBZvU03sqMjN5l0VxLRcVntgze');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `albums`
--
ALTER TABLE `albums`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `log`
--
ALTER TABLE `log`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `photos`
--
ALTER TABLE `photos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Index_album` (`album`),
  ADD KEY `Index_star` (`star`);

--
-- Indexes for table `presentation`
--
ALTER TABLE `presentation`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `presentation_folder`
--
ALTER TABLE `presentation_folder`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `log`
--
ALTER TABLE `log`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `photos`
--
ALTER TABLE `photos`
  MODIFY `id` bigint(14) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `presentation`
--
ALTER TABLE `presentation`
  MODIFY `id` bigint(14) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `presentation_folder`
--
ALTER TABLE `presentation_folder`
  MODIFY `id` bigint(14) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(14) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
