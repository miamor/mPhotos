-- phpMyAdmin SQL Dump
-- version 4.8.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: May 17, 2019 at 07:55 AM
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

--
-- Dumping data for table `albums`
--

INSERT INTO `albums` (`id`, `user_identifier`, `title`, `description`, `path`, `sysstamp`, `public`, `visible`, `downloadable`, `password`, `import_id`) VALUES
(15544334644858, '$2a$10$RoTu4GtNVExfS579graxTO0G.dnoW7UaPNirxYchTVYSnlW336k3u', 'Hello~', '', NULL, 1554433464, 1, 1, 0, '$2a$10$ZX8sz1UKbWV4Yh6PZP.tX.vTC23D6WICtxFEYY8IQSn1VGDof93Oi', 0),
(15552259847684, '$2a$10$RoTu4GtNVExfS579graxTOHaxw7m24KGJzMtjXVItxA.Q6Pi1mxiK', 'Untitled', '', NULL, 1555225984, 0, 1, 0, NULL, 0);

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

--
-- Dumping data for table `log`
--

INSERT INTO `log` (`id`, `time`, `type`, `function`, `line`, `text`) VALUES
(1, 1554433045, 'error', 'Lychee\\Modules\\Database::createTables', 180, 'Table \'lychee.lychee_settings\' doesn\'t exist'),
(2, 1554433045, 'error', 'Lychee\\Modules\\Database::createTables', 225, 'Table \'lychee.lychee_albums\' doesn\'t exist'),
(3, 1554433045, 'error', 'Lychee\\Modules\\Database::createTables', 248, 'Table \'lychee.lychee_photos\' doesn\'t exist'),
(4, 1554433117, 'notice', 'Lychee\\Modules\\Photo::add', 219, 'Skipped adjustment of photo (pexels-photo-808704)'),
(5, 1554712956, 'notice', 'Lychee\\Modules\\Session::login', 81, 'User (admin) has logged in from 127.0.0.1'),
(6, 1554949920, 'notice', 'Lychee\\Modules\\Photo::add', 219, 'Skipped adjustment of photo (598199)'),
(7, 1554949921, 'notice', 'Lychee\\Modules\\Photo::add', 219, 'Skipped adjustment of photo (hd-black-wallpaper-1920x1080-wallpaper)'),
(8, 1554949922, 'notice', 'Lychee\\Modules\\Photo::add', 219, 'Skipped adjustment of photo (s1)'),
(9, 1554949922, 'notice', 'Lychee\\Modules\\Photo::add', 219, 'Skipped adjustment of photo (topic)'),
(10, 1554949922, 'notice', 'Lychee\\Modules\\Photo::add', 219, 'Skipped adjustment of photo (Space Ship Comet Neon Illustration Desktop Wallpaper)'),
(11, 1554967478, 'error', 'Lychee\\Modules\\Photo::addToSlideshow', 50, 'Table \'lychee.lyche_presentation\' doesn\'t exist'),
(12, 1554967499, 'error', 'Lychee\\Modules\\Photo::addToSlideshow', 50, 'Table \'lychee.lyche_presentation\' doesn\'t exist'),
(13, 1554967764, 'error', 'Lychee\\Modules\\Photo::addToSlideshow', 51, 'Table \'lychee.lyche_presentation\' doesn\'t exist'),
(14, 1554967883, 'error', 'Lychee\\Modules\\Photo::addToSlideshow', 51, 'Table \'lychee.lyche_presentation\' doesn\'t exist'),
(15, 1554969944, 'error', 'Lychee\\Modules\\Photo::get', 739, 'Could not find specified photo'),
(16, 1554969946, 'error', 'Lychee\\Modules\\Photo::get', 739, 'Could not find specified photo'),
(17, 1554969985, 'error', 'Lychee\\Modules\\Photo::get', 739, 'Could not find specified photo'),
(18, 1554970072, 'error', 'Lychee\\Modules\\Photo::get', 739, 'Could not find specified photo'),
(19, 1554970109, 'error', 'Lychee\\Modules\\Photo::get', 739, 'Could not find specified photo'),
(20, 1554970358, 'notice', 'Lychee\\Modules\\Session::login', 81, 'User (admin) has logged in from 127.0.0.1'),
(21, 1554971912, 'error', 'Lychee\\Modules\\Album::setPosition_slideshow', 466, 'You have an error in your SQL syntax; check the manual that corresponds to your MariaDB server version for the right syntax to use near \'THEN 12 END WHERE id IN (15549679742394,15549718412475,15549713245880,1554968012\' at line 1'),
(22, 1554971912, 'error', 'Lychee\\Modules\\Album::setPosition_slideshow', 466, 'You have an error in your SQL syntax; check the manual that corresponds to your MariaDB server version for the right syntax to use near \'THEN 12 END WHERE id IN (15549679742394,15549718412475,15549713245880,1554968012\' at line 1'),
(23, 1554971941, 'error', 'Lychee\\Modules\\Album::setPosition_slideshow', 466, 'You have an error in your SQL syntax; check the manual that corresponds to your MariaDB server version for the right syntax to use near \'THEN 13 END WHERE id IN (15549679742394,15549718412475,15549719121860,1554971324\' at line 1'),
(24, 1554971942, 'error', 'Lychee\\Modules\\Album::setPosition_slideshow', 466, 'You have an error in your SQL syntax; check the manual that corresponds to your MariaDB server version for the right syntax to use near \'THEN 13 END WHERE id IN (15549679742394,15549718412475,15549719121860,1554971324\' at line 1'),
(25, 1554972065, 'error', 'Lychee\\Modules\\Photo::get', 739, 'Could not find specified photo'),
(26, 1554972070, 'error', 'Lychee\\Modules\\Photo::get', 739, 'Could not find specified photo'),
(27, 1554972105, 'error', 'Lychee\\Modules\\Photo::get', 739, 'Could not find specified photo'),
(28, 1554972142, 'error', 'Lychee\\Modules\\Photo::get', 739, 'Could not find specified photo'),
(29, 1554972151, 'error', 'Lychee\\Modules\\Photo::get', 739, 'Could not find specified photo'),
(30, 1554972689, 'error', 'Lychee\\Modules\\Photo::get', 739, 'Could not find specified photo'),
(31, 1554973100, 'error', 'Lychee\\Modules\\Album::getSlides', 99, 'Unknown column \'f\' in \'on clause\''),
(32, 1554973103, 'error', 'Lychee\\Modules\\Album::getSlides', 99, 'Unknown column \'r\' in \'on clause\''),
(33, 1554973110, 'error', 'Lychee\\Modules\\Album::getSlides', 99, 'Unknown column \'r\' in \'on clause\''),
(34, 1554976584, 'error', 'Lychee\\Modules\\Slide::getSlide', 164, 'Could not find specified photo'),
(35, 1554976657, 'error', 'Lychee\\Modules\\Slide::getSlide', 164, 'Could not find specified photo'),
(36, 1554976673, 'error', 'Lychee\\Modules\\Slide::getSlide', 164, 'Could not find specified photo'),
(37, 1554976707, 'error', 'Lychee\\Modules\\Slide::getSlide', 164, 'Could not find specified photo'),
(38, 1554976754, 'error', 'Lychee\\Modules\\Slide::getSlide', 164, 'Could not find specified photo'),
(39, 1554976808, 'error', 'Lychee\\Modules\\Slide::getSlide', 164, 'Could not find specified photo'),
(40, 1554976871, 'error', 'Lychee\\Modules\\Slide::getSlide', 164, 'Could not find specified photo'),
(41, 1554977047, 'error', 'Lychee\\Modules\\Slide::getSlide', 155, 'Unknown column \'s_15549680125040\' in \'on clause\''),
(42, 1554977263, 'error', 'Lychee\\Modules\\Slide::getSlide', 155, 'Unknown column \'s_15549680125040\' in \'on clause\''),
(43, 1554977301, 'error', 'Lychee\\Modules\\Slide::getSlide', 155, 'Unknown column \'s_15549680125040\' in \'on clause\''),
(44, 1554998925, 'error', 'Lychee\\Modules\\Slide::getSlide', 155, 'Unknown column \'undefined\' in \'where clause\''),
(45, 1554999006, 'error', 'Lychee\\Modules\\Slide::getSlide', 155, 'Unknown column \'undefined\' in \'where clause\''),
(46, 1555000271, 'error', 'Lychee\\Modules\\Slide::getSlide', 156, 'Unknown column \'undefined\' in \'where clause\''),
(47, 1555000313, 'error', 'Lychee\\Modules\\Slide::getSlide', 156, 'Unknown column \'undefined\' in \'where clause\''),
(48, 1555000323, 'error', 'Lychee\\Modules\\Slide::getSlide', 156, 'Unknown column \'undefined\' in \'where clause\''),
(49, 1555000577, 'error', 'Lychee\\Modules\\Slide::getSlide', 156, 'Unknown column \'undefined\' in \'where clause\''),
(50, 1555000580, 'error', 'Lychee\\Modules\\Slide::getSlide', 156, 'Unknown column \'undefined\' in \'where clause\''),
(51, 1555000583, 'error', 'Lychee\\Modules\\Slide::getSlide', 156, 'Unknown column \'undefined\' in \'where clause\''),
(52, 1555000586, 'error', 'Lychee\\Modules\\Slide::getSlide', 156, 'Unknown column \'undefined\' in \'where clause\''),
(53, 1555000588, 'error', 'Lychee\\Modules\\Slide::getSlide', 156, 'Unknown column \'undefined\' in \'where clause\''),
(54, 1555000590, 'error', 'Lychee\\Modules\\Slide::getSlide', 156, 'Unknown column \'undefined\' in \'where clause\''),
(55, 1555000622, 'error', 'Lychee\\Modules\\Slide::getSlide', 156, 'Unknown column \'undefined\' in \'where clause\''),
(56, 1555000649, 'error', 'Lychee\\Modules\\Slide::getSlide', 156, 'Unknown column \'undefined\' in \'where clause\''),
(57, 1555001745, 'error', 'Lychee\\Modules\\Slide::getSlide', 156, 'Unknown column \'undefined\' in \'where clause\''),
(58, 1555001827, 'error', 'Lychee\\Modules\\Slide::getSlide', 156, 'Unknown column \'undefined\' in \'where clause\''),
(59, 1555003659, 'error', 'Lychee\\Modules\\Slide::getSlide', 156, 'Unknown column \'undefined\' in \'where clause\''),
(60, 1555003660, 'error', 'Lychee\\Modules\\Slide::getSlide', 156, 'Unknown column \'undefined\' in \'where clause\''),
(61, 1555030770, 'notice', 'Lychee\\Modules\\Session::login', 81, 'User (admin) has logged in from 127.0.0.1'),
(62, 1555041484, 'error', 'Lychee\\Modules\\Slide::getSlides', 80, 'Unknown column \'s\' in \'where clause\''),
(63, 1555041488, 'error', 'Lychee\\Modules\\Slide::getSlides', 80, 'Unknown column \'f\' in \'where clause\''),
(64, 1555041501, 'error', 'Lychee\\Modules\\Slide::setPosition', 177, 'You have an error in your SQL syntax; check the manual that corresponds to your MariaDB server version for the right syntax to use near \'THEN 0 END WHERE id IN ()\' at line 1'),
(65, 1555050767, 'error', 'Lychee\\Modules\\Slide::getSlides', 80, 'Unknown column \'s\' in \'where clause\''),
(66, 1555050823, 'error', 'Lychee\\Modules\\Slide::getSlides', 80, 'Unknown column \'s\' in \'where clause\''),
(67, 1555050828, 'error', 'Lychee\\Modules\\Slide::getSlides', 80, 'Unknown column \'f\' in \'where clause\''),
(68, 1555050843, 'error', 'Lychee\\Modules\\Slide::getSlides', 80, 'Unknown column \'r\' in \'where clause\''),
(69, 1555050942, 'error', 'Lychee\\Modules\\Slide::getSlides', 80, 'Unknown column \'s\' in \'where clause\''),
(70, 1555050953, 'error', 'Lychee\\Modules\\Slide::getSlides', 80, 'Unknown column \'s\' in \'where clause\''),
(71, 1555050958, 'error', 'Lychee\\Modules\\Slide::getSlides', 80, 'Unknown column \'f\' in \'where clause\''),
(72, 1555050980, 'error', 'Lychee\\Modules\\Slide::setPosition', 177, 'You have an error in your SQL syntax; check the manual that corresponds to your MariaDB server version for the right syntax to use near \'THEN 0 END WHERE id IN ()\' at line 1'),
(73, 1555054878, 'notice', 'PhotosManager\\Modules\\Session::login', 81, 'User (admin) has logged in from 127.0.0.1'),
(74, 1555054881, 'error', 'PhotosManager\\Modules\\Slide::getSlides', 81, 'Unknown column \'s\' in \'where clause\''),
(75, 1555055798, 'notice', 'PhotosManager\\Modules\\Session::login', 81, 'User (admin) has logged in from 127.0.0.1'),
(76, 1555056719, 'error', 'PhotosManager\\Modules\\Slide::getSlides', 81, 'Unknown column \'s\' in \'where clause\''),
(77, 1555056785, 'error', 'PhotosManager\\Modules\\Slide::getSlides', 81, 'Unknown column \'s\' in \'where clause\''),
(78, 1555056798, 'error', 'PhotosManager\\Modules\\Slide::getSlides', 81, 'Unknown column \'s\' in \'where clause\''),
(79, 1555056815, 'notice', 'PhotosManager\\Modules\\Session::login', 81, 'User (admin) has logged in from 127.0.0.1'),
(80, 1555056819, 'error', 'PhotosManager\\Modules\\Slide::getSlides', 81, 'Unknown column \'s\' in \'where clause\''),
(81, 1555056823, 'error', 'PhotosManager\\Modules\\Slide::getSlides', 81, 'Unknown column \'f\' in \'where clause\''),
(82, 1555056830, 'error', 'PhotosManager\\Modules\\Slide::getSlides', 81, 'Unknown column \'r\' in \'where clause\''),
(83, 1555156794, 'error', 'PhotosManager\\Modules\\Slide::getSlide', 200, 'Unknown column \'s_15550339903321\' in \'where clause\''),
(84, 1555156835, 'error', 'PhotosManager\\Modules\\Slide::getSlide', 200, 'Unknown column \'s_15550339903321\' in \'where clause\''),
(85, 1555158378, 'error', 'PhotosManager\\Modules\\Slide::getSlides', 81, 'Unknown column \'s\' in \'where clause\''),
(86, 1555158391, 'notice', 'PhotosManager\\Modules\\Session::login', 81, 'User (admin) has logged in from 127.0.0.1'),
(87, 1555160634, 'error', 'PhotosManager\\Modules\\Slide::getSlides', 81, 'Unknown column \'s\' in \'where clause\''),
(88, 1555160653, 'error', 'PhotosManager\\Modules\\Slide::getSlides', 81, 'Unknown column \'s\' in \'where clause\''),
(89, 1555160662, 'error', 'PhotosManager\\Modules\\Slide::getSlides', 81, 'Unknown column \'s\' in \'where clause\''),
(90, 1555160951, 'error', 'PhotosManager\\Modules\\Slide::getSlides', 81, 'Unknown column \'s\' in \'where clause\''),
(91, 1555160962, 'notice', 'PhotosManager\\Modules\\Session::login', 81, 'User (admin) has logged in from 127.0.0.1'),
(92, 1555161729, 'error', 'PhotosManager\\Modules\\Slide::getSlides', 81, 'Unknown column \'s\' in \'where clause\''),
(93, 1555170931, 'error', 'PhotosManager\\Modules\\Slide::getSlide', 209, 'Could not find specified photo'),
(94, 1555171154, 'error', 'PhotosManager\\Modules\\Slide::getSlide', 200, 'You have an error in your SQL syntax; check the manual that corresponds to your MariaDB server version for the right syntax to use near \'\\[object%20Object\\] LIMIT 1\' at line 1'),
(95, 1555171177, 'error', 'PhotosManager\\Modules\\Slide::getSlide', 200, 'Unknown column \'undefined\' in \'where clause\''),
(96, 1555171194, 'error', 'PhotosManager\\Modules\\Slide::getSlide', 200, 'Unknown column \'undefined\' in \'where clause\''),
(97, 1555171213, 'error', 'PhotosManager\\Modules\\Slide::getSlide', 200, 'Unknown column \'undefined\' in \'where clause\''),
(98, 1555171306, 'error', 'PhotosManager\\Modules\\Slide::getSlide', 209, 'Could not find specified photo'),
(99, 1555221212, 'error', 'PhotosManager\\Modules\\Slide::getSlides', 81, 'Unknown column \'s\' in \'where clause\''),
(100, 1555222793, 'notice', 'PhotosManager\\Modules\\Session::login', 81, 'User (admin) has logged in from 127.0.0.1'),
(101, 1555224572, 'error', 'PhotosManager\\Modules\\Slide::getSlides', 81, 'Unknown column \'s\' in \'where clause\''),
(102, 1555225104, 'error', 'PhotosManager\\Modules\\Slide::getSlides', 81, 'Unknown column \'s\' in \'where clause\''),
(103, 1555225148, 'notice', 'PhotosManager\\Modules\\Session::login', 81, 'User (admin) has logged in from 127.0.0.1'),
(104, 1555225200, 'error', 'PhotosManager\\Modules\\Slide::getSlide', 209, 'Could not find specified photo'),
(105, 1555225205, 'error', 'PhotosManager\\Modules\\Slide::getSlide', 209, 'Could not find specified photo'),
(106, 1556951220, 'notice', 'PhotosManager\\Modules\\Session::login', 81, 'User (admin) has logged in from 127.0.0.1'),
(107, 1556954127, 'error', 'PhotosManager\\Modules\\Album::addFolder', 39, 'You have an error in your SQL syntax; check the manual that corresponds to your MariaDB server version for the right syntax to use near \'(id, title, album_id) VALUES (\'15569541271134\', \'Folder 1\', \'15544334644858\')\' at line 1'),
(108, 1556954172, 'error', 'PhotosManager\\Modules\\Album::addFolder', 39, 'You have an error in your SQL syntax; check the manual that corresponds to your MariaDB server version for the right syntax to use near \'(id, title, album_id) VALUES (\'15569541729206\', \'Folder 1\', \'15544334644858\')\' at line 1'),
(109, 1556954290, 'error', 'PhotosManager\\Modules\\Album::addFolder', 39, 'You have an error in your SQL syntax; check the manual that corresponds to your MariaDB server version for the right syntax to use near \'(id, title, album_id) VALUES (\'15569542909656\', \'Folder 1\', \'15544334644858\')\' at line 1'),
(110, 1556954314, 'error', 'PhotosManager\\Modules\\Album::addFolder', 39, 'You have an error in your SQL syntax; check the manual that corresponds to your MariaDB server version for the right syntax to use near \'(id, title, album_id) VALUES (\'15569543140579\', \'Untitled\', \'15544334644858\')\' at line 1'),
(111, 1556954378, 'error', 'PhotosManager\\Modules\\Album::addFolder', 39, 'You have an error in your SQL syntax; check the manual that corresponds to your MariaDB server version for the right syntax to use near \'(id, title, album_id) VALUES (\'15569543782376\', \'Untitled\', \'15544334644858\')\' at line 1'),
(112, 1556954389, 'error', 'PhotosManager\\Modules\\Album::addFolder', 39, 'You have an error in your SQL syntax; check the manual that corresponds to your MariaDB server version for the right syntax to use near \'(id, title, album_id) VALUES (\'15569543898430\', \'Untitled\', \'15544334644858\')\' at line 1'),
(113, 1556954521, 'error', 'PhotosManager\\Modules\\Album::addFolder', 39, 'You have an error in your SQL syntax; check the manual that corresponds to your MariaDB server version for the right syntax to use near \'(id, title, album_id) VALUES (\'15569545217459\', \'Untitled\', \'15544334644858\')\' at line 1'),
(114, 1556954529, 'error', 'PhotosManager\\Modules\\Album::addFolder', 39, 'You have an error in your SQL syntax; check the manual that corresponds to your MariaDB server version for the right syntax to use near \'(id, title, album_id) VALUES (\'15569545292024\', \'Untitled\', \'15544334644858\')\' at line 1'),
(115, 1556954562, 'error', 'PhotosManager\\Modules\\Album::addFolder', 39, 'You have an error in your SQL syntax; check the manual that corresponds to your MariaDB server version for the right syntax to use near \'(id, title, album_id) VALUES (\'15569545627198\', \'Untitled\', \'15544334644858\')\' at line 1'),
(116, 1556954590, 'error', 'PhotosManager\\Modules\\Album::addFolder', 39, 'You have an error in your SQL syntax; check the manual that corresponds to your MariaDB server version for the right syntax to use near \'(id, title, album_id) VALUES (\'15569545906475\', \'Untitled\', \'15544334644858\')\' at line 1'),
(117, 1556954675, 'error', 'PhotosManager\\Modules\\Album::addFolder', 40, 'You have an error in your SQL syntax; check the manual that corresponds to your MariaDB server version for the right syntax to use near \'(id, title, album_id) VALUES (\'15569546753793\', \'Folder 1\', \'15544334644858\')\' at line 1'),
(118, 1556954692, 'error', 'PhotosManager\\Modules\\Album::addFolder', 40, 'You have an error in your SQL syntax; check the manual that corresponds to your MariaDB server version for the right syntax to use near \'(id, title, album_id) VALUES (\'15569546923974\', \'Folder 1\', \'15544334644858\')\' at line 1'),
(119, 1556954745, 'error', 'PhotosManager\\Modules\\Album::addFolder', 40, 'You have an error in your SQL syntax; check the manual that corresponds to your MariaDB server version for the right syntax to use near \'(id, title, album_id) VALUES (\'15569547455397\', \'Folder 1\', \'15544334644858\')\' at line 1'),
(120, 1556954759, 'error', 'PhotosManager\\Modules\\Album::addFolder', 39, 'You have an error in your SQL syntax; check the manual that corresponds to your MariaDB server version for the right syntax to use near \'(id, title, album_id) VALUES (\'15569547597337\', \'Folder 1\', \'15544334644858\')\' at line 1'),
(121, 1556954784, 'error', 'PhotosManager\\Modules\\Album::addFolder', 39, 'You have an error in your SQL syntax; check the manual that corresponds to your MariaDB server version for the right syntax to use near \'(id, title, album_id) VALUES (\'15569547845880\', \'Folder 1\', \'15544334644858\')\' at line 1'),
(122, 1556954808, 'error', 'PhotosManager\\Modules\\Album::addFolder', 39, 'You have an error in your SQL syntax; check the manual that corresponds to your MariaDB server version for the right syntax to use near \'(id, title, album_id) VALUES (\'15569548087651\', \'Untitled\', \'15544334644858\')\' at line 1'),
(123, 1556955107, 'error', 'PhotosManager\\Modules\\Album::addFolder', 39, 'You have an error in your SQL syntax; check the manual that corresponds to your MariaDB server version for the right syntax to use near \'(id, title, album_id) VALUES (\'15569551074800\', \'Untitled\', \'15544334644858\')\' at line 1'),
(124, 1556955124, 'error', 'PhotosManager\\Modules\\Album::addFolder', 40, 'You have an error in your SQL syntax; check the manual that corresponds to your MariaDB server version for the right syntax to use near \'(id, title, album_id) VALUES (\'15569551242907\', \'tr\', \'15544334644858\')\' at line 1'),
(125, 1556955153, 'error', 'PhotosManager\\Modules\\Album::addFolder', 40, 'You have an error in your SQL syntax; check the manual that corresponds to your MariaDB server version for the right syntax to use near \'(id, title, album_id) VALUES (\'15569551537797\', \'Untitled\', \'15544334644858\')\' at line 1'),
(126, 1556955762, 'error', 'PhotosManager\\Modules\\Album::addFolder', 39, 'You have an error in your SQL syntax; check the manual that corresponds to your MariaDB server version for the right syntax to use near \'(id, title, album_id) VALUES (\'15569557621877\', \'Untitled\', \'15544334644858\')\' at line 1'),
(127, 1556955781, 'error', 'PhotosManager\\Modules\\Album::addFolder', 39, 'You have an error in your SQL syntax; check the manual that corresponds to your MariaDB server version for the right syntax to use near \'(id, title, album_id) VALUES (\'15569557812382\', \'Untitled\', \'15544334644858\')\' at line 1'),
(128, 1556977878, 'notice', 'PhotosManager\\Modules\\Session::login', 81, 'User (admin) has logged in from 127.0.0.1'),
(129, 1556993095, 'notice', 'PhotosManager\\Modules\\Session::login', 81, 'User (admin) has logged in from 127.0.0.1'),
(130, 1556993287, 'error', 'PhotosManager\\Modules\\Photo::add', 65, 'An upload-folder is missing or not readable and writable'),
(131, 1556993414, 'error', 'PhotosManager\\Modules\\Photo::add', 65, 'An upload-folder is missing or not readable and writable'),
(132, 1556993473, 'error', 'PhotosManager\\Modules\\Photo::add', 70, 'An upload-folder is missing or not readable and writable'),
(133, 1556993528, 'error', 'PhotosManager\\Modules\\Photo::add', 71, 'An upload-folder is missing or not readable and writable'),
(134, 1556993576, 'error', 'PhotosManager\\Modules\\Photo::add', 71, 'An upload-folder is missing or not readable and writable'),
(135, 1556993597, 'error', 'PhotosManager\\Modules\\Photo::add', 71, 'An upload-folder is missing or not readable and writable'),
(136, 1557018744, 'error', 'PhotosManager\\Modules\\Albums::getSmartAlbums', 109, 'Unknown column \'album_id\' in \'field list\''),
(137, 1557019398, 'error', 'PhotosManager\\Modules\\Slide::getSlides', 87, 'Unknown column \'f\' in \'where clause\''),
(138, 1557019398, 'error', 'PhotosManager\\Modules\\Album::getFolders', 66, 'Unknown column \'f\' in \'where clause\''),
(139, 1557019501, 'error', 'PhotosManager\\Modules\\Slide::getSlides', 87, 'Unknown column \'f\' in \'where clause\''),
(140, 1557019534, 'error', 'PhotosManager\\Modules\\Slide::getSlides', 87, 'Unknown column \'f\' in \'where clause\''),
(141, 1557023637, 'error', 'PhotosManager\\Modules\\Photo::add', 101, 'An upload-folder is missing or not readable and writable'),
(142, 1557024397, 'error', 'PhotosManager\\Modules\\Slide::getSlides', 87, 'Unknown column \'f\' in \'where clause\''),
(143, 1557024424, 'error', 'PhotosManager\\Modules\\Slide::getSlides', 87, 'Unknown column \'f\' in \'where clause\''),
(144, 1557024450, 'error', 'PhotosManager\\Modules\\Slide::getSlides', 87, 'Unknown column \'f\' in \'where clause\''),
(145, 1557024469, 'error', 'PhotosManager\\Modules\\Slide::getSlides', 87, 'Unknown column \'f\' in \'where clause\''),
(146, 1557024471, 'error', 'PhotosManager\\Modules\\Slide::getSlides', 87, 'Unknown column \'r\' in \'where clause\''),
(147, 1557024506, 'error', 'PhotosManager\\Modules\\Slide::getSlides', 87, 'Unknown column \'r\' in \'where clause\''),
(148, 1557147044, 'error', 'PhotosManager\\Modules\\Session::login', 108, 'User (admin) has tried to log in from 127.0.0.1'),
(149, 1557147190, 'notice', 'PhotosManager\\Modules\\Session::login', 94, 'User (admin) has logged in from 127.0.0.1'),
(150, 1557148503, 'error', 'PhotosManager\\Modules\\Slide::getSlides', 86, 'Unknown column \'s\' in \'where clause\''),
(151, 1557148528, 'error', 'PhotosManager\\Modules\\Slide::getSlides', 86, 'Unknown column \'s\' in \'where clause\''),
(152, 1557148630, 'error', 'PhotosManager\\Modules\\Slide::getSlides', 86, 'Unknown column \'s\' in \'where clause\''),
(153, 1557148665, 'error', 'PhotosManager\\Modules\\Slide::getSlides', 86, 'Unknown column \'s\' in \'where clause\''),
(154, 1557148671, 'error', 'PhotosManager\\Modules\\Slide::getSlides', 86, 'Unknown column \'s\' in \'where clause\''),
(155, 1557148775, 'error', 'PhotosManager\\Modules\\Slide::getSlides', 86, 'Unknown column \'s\' in \'where clause\''),
(156, 1557148782, 'error', 'PhotosManager\\Modules\\Slide::getSlides', 86, 'Unknown column \'s\' in \'where clause\''),
(157, 1557148974, 'error', 'PhotosManager\\Modules\\Slide::getSlides', 86, 'Unknown column \'s\' in \'where clause\''),
(158, 1557149143, 'error', 'PhotosManager\\Modules\\Albums::getSmartAlbums', 190, 'You have an error in your SQL syntax; check the manual that corresponds to your MariaDB server version for the right syntax to use near \'BY id DESC\' at line 1'),
(159, 1557149148, 'error', 'PhotosManager\\Modules\\Albums::getSmartAlbums', 190, 'You have an error in your SQL syntax; check the manual that corresponds to your MariaDB server version for the right syntax to use near \'BY id DESC\' at line 1'),
(160, 1557149356, 'error', 'PhotosManager\\Modules\\Slide::getSlides', 86, 'Unknown column \'s\' in \'where clause\''),
(161, 1557149434, 'notice', 'PhotosManager\\Modules\\Session::login', 96, 'User (tutu) has logged in from 127.0.0.1'),
(162, 1557149821, 'notice', 'PhotosManager\\Modules\\Session::login', 96, 'User (tutu) has logged in from 127.0.0.1'),
(163, 1557152397, 'error', 'PhotosManager\\Modules\\Album::getIdentifier', 591, 'Could not find specified album'),
(164, 1557152397, 'error', 'PhotosManager\\Modules\\Album::getPublic', 631, 'Could not find specified album'),
(165, 1557152446, 'error', 'PhotosManager\\Modules\\Album::getIdentifier', 591, 'Could not find specified album'),
(166, 1557152446, 'error', 'PhotosManager\\Modules\\Album::getPublic', 631, 'Could not find specified album'),
(167, 1557152477, 'error', 'PhotosManager\\Modules\\Album::getIdentifier', 591, 'Could not find specified album'),
(168, 1557152477, 'error', 'PhotosManager\\Modules\\Album::getPublic', 631, 'Could not find specified album'),
(169, 1557155058, 'notice', 'PhotosManager\\Modules\\Session::login', 96, 'User (tutu) has logged in from 127.0.0.1'),
(170, 1557155155, 'notice', 'PhotosManager\\Modules\\Session::login', 96, 'User (tutu) has logged in from 127.0.0.1'),
(171, 1557155194, 'notice', 'PhotosManager\\Modules\\Session::login', 96, 'User (tutu) has logged in from 127.0.0.1'),
(172, 1557155238, 'notice', 'PhotosManager\\Modules\\Session::login', 96, 'User (tutu) has logged in from 127.0.0.1'),
(173, 1558058093, 'error', 'PhotosManager\\Modules\\Slide::getSlides', 86, 'Unknown column \'s\' in \'where clause\''),
(174, 1558058098, 'notice', 'PhotosManager\\Modules\\Session::login', 96, 'User (admin) has logged in from 127.0.0.1'),
(175, 1558060309, 'error', 'PhotosManager\\Modules\\Album::getArchive', 492, 'Unknown column \'album\' in \'where clause\''),
(176, 1558060413, 'error', 'PhotosManager\\Modules\\Album::getArchive', 492, 'Unknown column \'album\' in \'where clause\''),
(177, 1558060480, 'error', 'PhotosManager\\Modules\\Album::getArchive', 492, 'Unknown column \'album\' in \'where clause\''),
(178, 1558060480, 'error', 'PhotosManager\\Modules\\Album::getArchive', 503, 'Unknown column \'album\' in \'where clause\''),
(179, 1558061609, 'notice', 'PhotosManager\\Modules\\Session::login', 96, 'User (admin) has logged in from 127.0.0.1'),
(180, 1558064862, 'error', 'PhotosManager\\Modules\\Album::import', 227, 'Could not move file to uploads'),
(181, 1558064902, 'error', 'PhotosManager\\Modules\\Album::import', 228, 'Could not move file to uploads'),
(182, 1558065359, 'error', 'PhotosManager\\Modules\\Album::import', 247, 'Table \'photos_manager.PHOTOS_MANAGER_TABLE_PHOTOS\' doesn\'t exist'),
(183, 1558068898, 'error', 'PhotosManager\\Modules\\Album::import', 254, 'Table \'photos_manager.PHOTOS_MANAGER_TABLE_ALBUMS\' doesn\'t exist'),
(184, 1558068953, 'error', 'PhotosManager\\Modules\\Album::import', 255, 'Table \'photos_manager.PHOTOS_MANAGER_TABLE_ALBUMS\' doesn\'t exist'),
(185, 1558069146, 'error', 'PhotosManager\\Modules\\Album::import', 254, 'Table \'photos_manager.PHOTOS_MANAGER_TABLE_ALBUMS\' doesn\'t exist'),
(186, 1558069626, 'error', 'PhotosManager\\Modules\\Album::add', 391, 'Column count doesn\'t match value count at row 1'),
(187, 1558069661, 'error', 'PhotosManager\\Modules\\Album::add', 391, 'Column count doesn\'t match value count at row 1'),
(188, 1558069718, 'error', 'PhotosManager\\Modules\\Album::import', 270, 'Duplicate entry \'15580697187124\' for key \'PRIMARY\''),
(189, 1558070249, 'error', 'PhotosManager\\Modules\\Album::import', 270, 'Duplicate entry \'15580702497579\' for key \'PRIMARY\''),
(190, 1558070763, 'error', 'PhotosManager\\Modules\\Album::import', 349, 'Unknown column \'album_id\' in \'where clause\''),
(191, 1558071298, 'error', 'PhotosManager\\Modules\\Album::import', 272, 'Duplicate entry \'15580712980533\' for key \'PRIMARY\''),
(192, 1558071425, 'error', 'PhotosManager\\Modules\\Album::import', 272, 'Duplicate entry \'15580714251131\' for key \'PRIMARY\''),
(193, 1558071547, 'error', 'PhotosManager\\Modules\\Album::import', 272, 'Duplicate entry \'15580715479602\' for key \'PRIMARY\''),
(194, 1558071585, 'error', 'PhotosManager\\Modules\\Album::import', 272, 'Duplicate entry \'15580715857248\' for key \'PRIMARY\''),
(195, 1558071722, 'error', 'PhotosManager\\Modules\\Album::import', 272, 'Duplicate entry \'15580717228818\' for key \'PRIMARY\''),
(196, 1558071722, 'error', 'PhotosManager\\Modules\\Album::import', 280, 'Unknown column \'album_id\' in \'where clause\''),
(197, 1558071760, 'error', 'PhotosManager\\Modules\\Album::import', 272, 'Duplicate entry \'15580717604666\' for key \'PRIMARY\''),
(198, 1558071998, 'error', 'PhotosManager\\Modules\\Album::import', 272, 'Duplicate entry \'15580719987829\' for key \'PRIMARY\''),
(199, 1558072050, 'error', 'PhotosManager\\Modules\\Album::import', 273, 'Duplicate entry \'15580720508579\' for key \'PRIMARY\''),
(200, 1558072203, 'error', 'PhotosManager\\Modules\\Album::getIdentifier', 964, 'Could not find specified album'),
(201, 1558072203, 'error', 'PhotosManager\\Modules\\Album::getPublic', 1004, 'Could not find specified album');

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

--
-- Dumping data for table `photos`
--

INSERT INTO `photos` (`id`, `title`, `user_identifier`, `description`, `url`, `tags`, `public`, `type`, `width`, `height`, `size`, `iso`, `aperture`, `make`, `model`, `shutter`, `focal`, `takestamp`, `star`, `thumbUrl`, `album`, `checksum`, `medium`, `position`, `import_id`) VALUES
(15544331158042, 'adam-wilson-391594', '$2a$10$RoTu4GtNVExfS579graxTO0G.dnoW7UaPNirxYchTVYSnlW336k3u', '', '492507e094fb39e5aa762767128d9310.jpg', '', 0, 'image/jpeg', 6000, 4000, '4.5 MB', '', '', '', '', '', '', 0, 1, '492507e094fb39e5aa762767128d9310.jpeg', 0, '7386f22a263a8f6d0b1eecb8bb0c218ef04422a9', 0, 2, 0),
(15544331164050, 'david-marcu-114194', '$2a$10$RoTu4GtNVExfS579graxTO0G.dnoW7UaPNirxYchTVYSnlW336k3u', '', '441107a878c67a27f944d4910e777361.jpg', '', 0, 'image/jpeg', 3506, 2329, '1.1 MB', '', '', '', '', '', '', 0, 0, '441107a878c67a27f944d4910e777361.jpeg', 0, '600a64b574ae279a1784c1c28ca70acb6d3c2e30', 0, 1, 0),
(15544331176097, 'pexels-photo-808704', '', '', '5e60539ed1abf1a013958fe87afbf9d9.jpeg', '', 1, 'image/jpeg', 3154, 1775, '2.9 MB', '80', 'f/2.2', 'HUAWEI', 'EVA-L09', '10000000/1000000000 s', '4.5 mm', 1515228027, 0, '5e60539ed1abf1a013958fe87afbf9d9.jpeg', 0, 'd2666a9f4124e5a02c1f4218269c3b60355ab5b0', 0, 0, 0),
(15549499195246, '3ABD77831', '$2a$10$RoTu4GtNVExfS579graxTO0G.dnoW7UaPNirxYchTVYSnlW336k3u', '', '61b6794fcff61fa3a897c22ffe49be48.jpg', '', 0, 'image/jpeg', 1440, 900, '87.7 KB', '', '', '', '', '', '', 0, 0, '61b6794fcff61fa3a897c22ffe49be48.jpeg', 15544334644858, '3c3c2d9c8e6f6f8ed9353c94cbd39dcd7700b3fe', 0, 28, 0),
(15544334815092, '3dnd6e94j4wy', '$2a$10$RoTu4GtNVExfS579graxTO0G.dnoW7UaPNirxYchTVYSnlW336k3u', '', 'e84039d3c8768e0d51093cda2499daed.jpg', '', 0, 'image/jpeg', 951, 1255, '168.9 KB', '', '', '', '', '', '', 0, 0, 'e84039d3c8768e0d51093cda2499daed.jpeg', 15544334644858, '7a75f3c6061bf9ec3c8ad00540d9f796db7d0363', 0, 31, 0),
(15544335369555, 'planets', '$2a$10$RoTu4GtNVExfS579graxTO0G.dnoW7UaPNirxYchTVYSnlW336k3u', '', '21624287b8e389bf0e24923cc1ea5cd4.jpg', '', 0, 'image/jpeg', 2560, 1600, '35.7 KB', '', '', '', '', '', '', 0, 0, '21624287b8e389bf0e24923cc1ea5cd4.jpeg', 15544334644858, '1c79612e0698cb25506bebb47b11fb074a3c2cf3', 0, 30, 0),
(15549481270158, '25181709_868755343305643_747348745_n', '$2a$10$RoTu4GtNVExfS579graxTO0G.dnoW7UaPNirxYchTVYSnlW336k3u', '', '377f377ef3193e17ca3cc5b97d1dfae2.jpg', '', 0, 'image/jpeg', 480, 480, '27.4 KB', '', '', '', '', '', '', 0, 0, '377f377ef3193e17ca3cc5b97d1dfae2.jpeg', 15544334644858, '845076e9ee86c14a5f95ba57875beccca1513b14', 0, 29, 0),
(15549499198715, '3LfKwNH', '$2a$10$RoTu4GtNVExfS579graxTO0G.dnoW7UaPNirxYchTVYSnlW336k3u', '', 'ca5a0e5c50a8dbfce81f6326f354e1f5.jpg', '', 0, 'image/jpeg', 1680, 1050, '158.3 KB', '', '', '', '', '', '', 0, 0, 'ca5a0e5c50a8dbfce81f6326f354e1f5.jpeg', 15544334644858, 'f9f526e43d5bdcf7301121a26d953730b8af9715', 0, 27, 0),
(15549499200341, '8d1f20f7ebf8e5a73c410a3df54f272d', '$2a$10$RoTu4GtNVExfS579graxTO0G.dnoW7UaPNirxYchTVYSnlW336k3u', '', '96c6afb7976c9542e9a5172d7ce0567e.jpg', '', 0, 'image/jpeg', 2560, 1440, '91.2 KB', '', '', '', '', '', '', 0, 0, '96c6afb7976c9542e9a5172d7ce0567e.jpeg', 15544334644858, '1238fa47d3cf3d5b1b599957dd783b44887a716f', 0, 26, 0),
(15549499202047, '82-1024x576', '$2a$10$RoTu4GtNVExfS579graxTO0G.dnoW7UaPNirxYchTVYSnlW336k3u', '', 'bf5c7fb459d47fc58dfb02468dbe6fd6.jpg', '', 0, 'image/jpeg', 1024, 576, '6.4 KB', '', '', '', '', '', '', 0, 0, 'bf5c7fb459d47fc58dfb02468dbe6fd6.jpeg', 15544334644858, '98f525bebaa1c1873ad030ca127ae1ed2534f583', 0, 25, 0),
(15549499202742, '288267', '$2a$10$RoTu4GtNVExfS579graxTO0G.dnoW7UaPNirxYchTVYSnlW336k3u', '', '77e03dfdc42459b707d13ef285e70801.png', '', 0, 'image/png', 2560, 1600, '30 KB', '', '', '', '', '', '', 0, 0, '77e03dfdc42459b707d13ef285e70801.jpeg', 15544334644858, 'ced0a23819a5489e3c58a75dd31cb15ee29f5d87', 0, 24, 0),
(15549499204871, '598199', '$2a$10$RoTu4GtNVExfS579graxTO0G.dnoW7UaPNirxYchTVYSnlW336k3u', '', '058b335bbbfd8afbb159b9fc0ade8cc8.jpg', '', 0, 'image/jpeg', 2560, 1440, '81.9 KB', '', '', '', '', '', '', 0, 0, '058b335bbbfd8afbb159b9fc0ade8cc8.jpeg', 15544334644858, 'aa075518fb534ac7e7d809c652520de64fa6a2ee', 0, 32, 0),
(15549499207804, '24197212_862472633933914_1241900732_o', '$2a$10$RoTu4GtNVExfS579graxTO0G.dnoW7UaPNirxYchTVYSnlW336k3u', '', 'f203a694eb38a9d28935b5f6680c740a.jpg', '', 0, 'image/jpeg', 719, 1280, '143.3 KB', '', '', '', '', '', '', 0, 0, 'f203a694eb38a9d28935b5f6680c740a.jpeg', 15544334644858, '4b6fe4f1feb7704cd78361ef196c7578d5d43d5f', 0, 23, 0),
(15549499208878, 'dai-gia-gatsby1', '$2a$10$RoTu4GtNVExfS579graxTO0G.dnoW7UaPNirxYchTVYSnlW336k3u', '', '53ffb516fda073a6fbd3666ba46ef008.jpg', '', 0, 'image/jpeg', 960, 640, '75 KB', '', '', '', '', '', '', 0, 0, '53ffb516fda073a6fbd3666ba46ef008.jpeg', 15544334644858, 'a2c3279c7131db4b5f9d8d6522ad9fc04c091e54', 0, 22, 0),
(15549499209806, '25114704_868493963331781_1598322348_n', '$2a$10$RoTu4GtNVExfS579graxTO0G.dnoW7UaPNirxYchTVYSnlW336k3u', '', '4d959f1e815f3459b8e65b88909b286a.jpg', '', 0, 'image/jpeg', 736, 794, '56.3 KB', '', '', '', '', '', '', 0, 0, '4d959f1e815f3459b8e65b88909b286a.jpeg', 15544334644858, 'ccace022d2b033f2da736d1ab01efa14923eda4e', 0, 21, 0),
(15549499210802, 'dai-gia-gatsby', '$2a$10$RoTu4GtNVExfS579graxTO0G.dnoW7UaPNirxYchTVYSnlW336k3u', '', 'e2dc5680471f5baa066ba6c5df7cd08c.jpg', '', 0, 'image/jpeg', 800, 600, '148.3 KB', '', '', '', '', '', '', 0, 0, 'e2dc5680471f5baa066ba6c5df7cd08c.jpeg', 15544334644858, 'c27e0e1335893e64181e0c7e6dbac2d199fd8235', 0, 20, 0),
(15549499211877, 'famous_quotes_wallpapers_29', '$2a$10$RoTu4GtNVExfS579graxTO0G.dnoW7UaPNirxYchTVYSnlW336k3u', '', 'a0206a024218f786e5aded4144a7eeb9.jpg', '', 0, 'image/jpeg', 600, 375, '12.1 KB', '', '', '', '', '', '', 0, 0, 'a0206a024218f786e5aded4144a7eeb9.jpeg', 15544334644858, 'f580faf76fe81389b61c215249feeefbef2a5a21', 0, 19, 0),
(15549499212541, '222779916_0a395635cc', '$2a$10$RoTu4GtNVExfS579graxTO0G.dnoW7UaPNirxYchTVYSnlW336k3u', '', '9c7795b67585ea9a389f3c906dfea3ab.png', '', 0, 'image/png', 2560, 1600, '16 KB', '', '', '', '', '', '', 0, 0, '9c7795b67585ea9a389f3c906dfea3ab.jpeg', 15544334644858, '335d417f3cb779d4a70668425bb1e41adf4e6547', 0, 18, 0),
(15549499214262, 'Great-Gatsby-wallpaper_03-620x350', '$2a$10$RoTu4GtNVExfS579graxTO0G.dnoW7UaPNirxYchTVYSnlW336k3u', '', '8c69aabd519399af13575343b088976b.jpg', '', 0, 'image/jpeg', 620, 350, '77.9 KB', '', '', '', '', '', '', 0, 0, '8c69aabd519399af13575343b088976b.jpeg', 15544334644858, '6c11556f8db3e16ef06ed3befc20efd6bcc9112c', 0, 17, 0),
(15549499214984, 'ice_cream_colorful_minimalist_sweet_66180_1920x1080', '$2a$10$RoTu4GtNVExfS579graxTO0G.dnoW7UaPNirxYchTVYSnlW336k3u', '', 'b38211363592ea3850e9696c887f65f0.jpg', '', 0, 'image/jpeg', 1920, 1080, '72.8 KB', '', '', '', '', '', '', 0, 0, 'b38211363592ea3850e9696c887f65f0.jpeg', 15544334644858, 'd27820c3240044f9c6b6f2400bfe848eaeaafdd3', 0, 16, 0),
(15549499216123, 'Earth-540x337', '$2a$10$RoTu4GtNVExfS579graxTO0G.dnoW7UaPNirxYchTVYSnlW336k3u', '', 'c4eb07095f09c0ebfb0237b5438aa722.png', '', 0, 'image/png', 540, 337, '53.6 KB', '', '', '', '', '', '', 0, 0, 'c4eb07095f09c0ebfb0237b5438aa722.jpeg', 15544334644858, '2ca232068513ae6d48e23ac3b04b8df3470c36d8', 0, 15, 0),
(15549499216760, 'iphone-x-minimal-dark-white-mockup-psd', '$2a$10$RoTu4GtNVExfS579graxTO0G.dnoW7UaPNirxYchTVYSnlW336k3u', '', '4cd574c14d7b7be1ab5cf609e290956d.jpg', '', 0, 'image/jpeg', 850, 573, '29.9 KB', '', '', '', '', '', '', 0, 0, '4cd574c14d7b7be1ab5cf609e290956d.jpeg', 15544334644858, 'b55633b7e165784926a05f8c8b689af65ee217a1', 0, 14, 0),
(15549499217519, 'minimalist_wallpaper_for_desktop_001', '$2a$10$RoTu4GtNVExfS579graxTO0G.dnoW7UaPNirxYchTVYSnlW336k3u', '', '3910bf66d74c27a976487cfb27de1fe2.jpg', '', 0, 'image/jpeg', 2560, 1600, '70.1 KB', '', '', '', '', '', '', 0, 0, '3910bf66d74c27a976487cfb27de1fe2.jpeg', 15544334644858, '377e34faaacfb34811cc7df48120fb13d2015f2a', 0, 13, 0),
(15549499219047, 'hd-black-wallpaper-1920x1080-wallpaper', '$2a$10$RoTu4GtNVExfS579graxTO0G.dnoW7UaPNirxYchTVYSnlW336k3u', '', '18acb2fa9bf872e47987ffc8fc3ad84e.jpg', '', 0, 'image/jpeg', 1920, 1080, '51.6 KB', '', '', '', '', '', '', 0, 0, '18acb2fa9bf872e47987ffc8fc3ad84e.jpeg', 15544334644858, 'b9b819dfb2b45d47bf36ec879549a0759f7965b9', 0, 10, 0),
(15549499220516, 'minimalism-wallpaper-minimalism-wallpaper-minimalist-wallpaper-iphone-6-minimalist-wallpaper-hd-mini', '$2a$10$RoTu4GtNVExfS579graxTO0G.dnoW7UaPNirxYchTVYSnlW336k3u', '', '6a1aaf12b0d225117efc5b2dc53c68d7.png', '', 0, 'image/png', 2560, 1600, '46.9 KB', '', '', '', '', '', '', 0, 0, '6a1aaf12b0d225117efc5b2dc53c68d7.jpeg', 15544334644858, '36681073c68c89cc05edb502d1b189e0482caab3', 0, 8, 0),
(15549499222024, 'planes-wallpapers-simple-colors-minimalistic-aircraft', '$2a$10$RoTu4GtNVExfS579graxTO0G.dnoW7UaPNirxYchTVYSnlW336k3u', '', 'bf4946ce000047ee7a6e60653bbf8e13.jpg', '', 0, 'image/jpeg', 2560, 1440, '95 KB', '', '', '', '', '', '', 0, 0, 'bf4946ce000047ee7a6e60653bbf8e13.jpeg', 15544334644858, '53858ed64588de3b79bc93e6796f9b09cf56fc01', 0, 0, 0),
(15549499223342, 'My_Favorite_Book_by_Matt_Lowden', '$2a$10$RoTu4GtNVExfS579graxTO0G.dnoW7UaPNirxYchTVYSnlW336k3u', '', '41df1aaa7fba6414ffe0d96c56a82620.jpg', '', 0, 'image/jpeg', 600, 383, '15.3 KB', '', '', '', '', '', '', 0, 0, '41df1aaa7fba6414ffe0d96c56a82620.jpeg', 15544334644858, '34854ac5dcd0144c36fc51e21350de4ff504a5ab', 0, 6, 0),
(15549499223795, 's1', '$2a$10$RoTu4GtNVExfS579graxTO0G.dnoW7UaPNirxYchTVYSnlW336k3u', '', '71dd3732c7d7b2aab6cac27feea1441b.jpg', '', 0, 'image/jpeg', 600, 375, '20.9 KB', '', '', '', '', '', '', 0, 0, '71dd3732c7d7b2aab6cac27feea1441b.jpeg', 15544334644858, 'e5812f9268b4f38f1f2f2eaef2fd513cf31af40e', 0, 5, 0),
(15549499224302, 'niU10Et~', '$2a$10$RoTu4GtNVExfS579graxTO0G.dnoW7UaPNirxYchTVYSnlW336k3u', '', 'ea8c83c3689c359b478657c7d9950786.jpg', '', 0, 'image/jpeg', 1920, 1200, '27.8 KB', '', '', '', '', '', '', 0, 0, 'ea8c83c3689c359b478657c7d9950786.jpeg', 15544334644858, 'f26526dfb9ee771d2de6ece83b77a36f761f162f', 0, 7, 0),
(15549499225199, 's2', '$2a$10$RoTu4GtNVExfS579graxTO0G.dnoW7UaPNirxYchTVYSnlW336k3u', 'image description', '2a2ea62d8b6969ece49ec289eb4558f2.jpg', '', 0, 'image/jpeg', 1131, 707, '33.1 KB', '', '', '', '', '', '', 0, 0, '2a2ea62d8b6969ece49ec289eb4558f2.jpeg', 15544334644858, 'c36cfa4368020fff90fb758b565b586ea5fa541b', 0, 4, 0),
(15549499226137, 'topic~', '$2a$10$RoTu4GtNVExfS579graxTO0G.dnoW7UaPNirxYchTVYSnlW336k3u', 'crap~', '70416f7ab77396b048e079ad4a4c373b.jpg', '', 0, 'image/jpeg', 326, 285, '19.3 KB', '', '', '', '', '', '', 0, 0, '70416f7ab77396b048e079ad4a4c373b.jpeg', 15544334644858, '4ba12c54728f44ce4d9f65f50756357c5331bf8c', 0, 2, 0),
(15549499226620, 'Space Ship Comet Neon Illustration Desktop Wallpaper', '$2a$10$RoTu4GtNVExfS579graxTO0G.dnoW7UaPNirxYchTVYSnlW336k3u', '', '67b545363bec364999640822aa9f9a6b.jpg', '', 0, 'image/jpeg', 2880, 1800, '1.1 MB', '', '', '', '', '', '', 0, 0, '67b545363bec364999640822aa9f9a6b.jpeg', 15544334644858, 'e932d1526fe80b1326f0554c299d38c9973ce93e', 0, 3, 0),
(15549499229540, 's3', '$2a$10$RoTu4GtNVExfS579graxTO0G.dnoW7UaPNirxYchTVYSnlW336k3u', '', 'af91c65a1854a9ea7c0fdebf8680dbc1.jpg', '', 0, 'image/jpeg', 2560, 1600, '79.4 KB', '', '', '', '', '', '', 0, 0, 'af91c65a1854a9ea7c0fdebf8680dbc1.jpeg', 15544334644858, 'f7ad4687386a0b76619972fda99749b60fa28fc0', 0, 11, 0),
(15549499230781, 'World~', '$2a$10$RoTu4GtNVExfS579graxTO0G.dnoW7UaPNirxYchTVYSnlW336k3u', 'trfd', '78c02923dfd6896a6a27d6d45accd902.jpg', '', 0, 'image/jpeg', 1920, 1080, '95.9 KB', '', '', '', '', '', '', 0, 0, '78c02923dfd6896a6a27d6d45accd902.jpeg', 15544334644858, '721a936fc244fb24fe79ba63ade0f0d146b49631', 0, 12, 0),
(15549499231858, 'solar-system-minimalism-q1', '$2a$10$RoTu4GtNVExfS579graxTO0G.dnoW7UaPNirxYchTVYSnlW336k3u', '', 'a313bb6317878993ede5e206f9ff3ea6.jpg', '', 0, 'image/jpeg', 3450, 2065, '141.4 KB', '', '', '', '', '', '', 0, 0, 'a313bb6317878993ede5e206f9ff3ea6.jpeg', 15544334644858, '2118d2716dbb05d4b14ec4074c9cbd715b487056', 0, 9, 0),
(15552259939893, '82-1024x576', '$2a$10$RoTu4GtNVExfS579graxTOHaxw7m24KGJzMtjXVItxA.Q6Pi1mxiK', '', 'bf5c7fb459d47fc58dfb02468dbe6fd6.jpg', '', 0, 'image/jpeg', 1024, 576, '6.4 KB', '', '', '', '', '', '', 0, 0, 'bf5c7fb459d47fc58dfb02468dbe6fd6.jpeg', 15552259847684, '98f525bebaa1c1873ad030ca127ae1ed2534f583', 0, 0, 0),
(15552259940866, '288267', '$2a$10$RoTu4GtNVExfS579graxTOHaxw7m24KGJzMtjXVItxA.Q6Pi1mxiK', '', '77e03dfdc42459b707d13ef285e70801.png', '', 0, 'image/png', 2560, 1600, '30 KB', '', '', '', '', '', '', 0, 0, '77e03dfdc42459b707d13ef285e70801.jpeg', 15552259847684, 'ced0a23819a5489e3c58a75dd31cb15ee29f5d87', 0, 0, 0),
(15552259941227, '598199', '$2a$10$RoTu4GtNVExfS579graxTOHaxw7m24KGJzMtjXVItxA.Q6Pi1mxiK', '', '058b335bbbfd8afbb159b9fc0ade8cc8.jpg', '', 0, 'image/jpeg', 2560, 1440, '81.9 KB', '', '', '', '', '', '', 0, 0, '058b335bbbfd8afbb159b9fc0ade8cc8.jpeg', 15552259847684, 'aa075518fb534ac7e7d809c652520de64fa6a2ee', 0, 0, 0),
(15552259941841, '24197212_862472633933914_1241900732_o', '$2a$10$RoTu4GtNVExfS579graxTOHaxw7m24KGJzMtjXVItxA.Q6Pi1mxiK', '', 'f203a694eb38a9d28935b5f6680c740a.jpg', '', 0, 'image/jpeg', 719, 1280, '143.3 KB', '', '', '', '', '', '', 0, 0, 'f203a694eb38a9d28935b5f6680c740a.jpeg', 15552259847684, '4b6fe4f1feb7704cd78361ef196c7578d5d43d5f', 0, 0, 0),
(15552259942425, '25114704_868493963331781_1598322348_n', '$2a$10$RoTu4GtNVExfS579graxTOHaxw7m24KGJzMtjXVItxA.Q6Pi1mxiK', '', '4d959f1e815f3459b8e65b88909b286a.jpg', '', 0, 'image/jpeg', 736, 794, '56.3 KB', '', '', '', '', '', '', 0, 0, '4d959f1e815f3459b8e65b88909b286a.jpeg', 15552259847684, 'ccace022d2b033f2da736d1ab01efa14923eda4e', 0, 0, 0),
(15552259942757, '25181709_868755343305643_747348745_n', '$2a$10$RoTu4GtNVExfS579graxTOHaxw7m24KGJzMtjXVItxA.Q6Pi1mxiK', '', '377f377ef3193e17ca3cc5b97d1dfae2.jpg', '', 0, 'image/jpeg', 480, 480, '27.4 KB', '', '', '', '', '', '', 0, 0, '377f377ef3193e17ca3cc5b97d1dfae2.jpeg', 15552259847684, '845076e9ee86c14a5f95ba57875beccca1513b14', 0, 0, 0),
(15552259943756, '222779916_0a395635cc', '$2a$10$RoTu4GtNVExfS579graxTOHaxw7m24KGJzMtjXVItxA.Q6Pi1mxiK', '', '9c7795b67585ea9a389f3c906dfea3ab.png', '', 0, 'image/png', 2560, 1600, '16 KB', '', '', '', '', '', '', 0, 0, '9c7795b67585ea9a389f3c906dfea3ab.jpeg', 15552259847684, '335d417f3cb779d4a70668425bb1e41adf4e6547', 0, 0, 0),
(15552259944555, 'dai-gia-gatsby', '$2a$10$RoTu4GtNVExfS579graxTOHaxw7m24KGJzMtjXVItxA.Q6Pi1mxiK', '', 'e2dc5680471f5baa066ba6c5df7cd08c.jpg', '', 0, 'image/jpeg', 800, 600, '148.3 KB', '', '', '', '', '', '', 0, 0, 'e2dc5680471f5baa066ba6c5df7cd08c.jpeg', 15552259847684, 'c27e0e1335893e64181e0c7e6dbac2d199fd8235', 0, 0, 0),
(15552259945011, 'dai-gia-gatsby1', '$2a$10$RoTu4GtNVExfS579graxTOHaxw7m24KGJzMtjXVItxA.Q6Pi1mxiK', '', '53ffb516fda073a6fbd3666ba46ef008.jpg', '', 0, 'image/jpeg', 960, 640, '75 KB', '', '', '', '', '', '', 0, 0, '53ffb516fda073a6fbd3666ba46ef008.jpeg', 15552259847684, 'a2c3279c7131db4b5f9d8d6522ad9fc04c091e54', 0, 0, 0),
(15552259945486, 'Earth-540x337', '$2a$10$RoTu4GtNVExfS579graxTOHaxw7m24KGJzMtjXVItxA.Q6Pi1mxiK', '', 'c4eb07095f09c0ebfb0237b5438aa722.png', '', 0, 'image/png', 540, 337, '53.6 KB', '', '', '', '', '', '', 0, 0, 'c4eb07095f09c0ebfb0237b5438aa722.jpeg', 15552259847684, '2ca232068513ae6d48e23ac3b04b8df3470c36d8', 0, 0, 0),
(15552259946646, 'famous_quotes_wallpapers_29', '$2a$10$RoTu4GtNVExfS579graxTOHaxw7m24KGJzMtjXVItxA.Q6Pi1mxiK', '', 'a0206a024218f786e5aded4144a7eeb9.jpg', '', 0, 'image/jpeg', 600, 375, '12.1 KB', '', '', '', '', '', '', 0, 0, 'a0206a024218f786e5aded4144a7eeb9.jpeg', 15552259847684, 'f580faf76fe81389b61c215249feeefbef2a5a21', 0, 0, 0),
(15569936258338, 'Screenshot from 2019-05-03 16-24-36', '$2a$10$RoTu4GtNVExfS579graxTO0G.dnoW7UaPNirxYchTVYSnlW336k3u', '', '8607fa1251cdcc2a51eefdf1b0a9e604.png', '', 0, 'image/png', 1920, 1080, '740.6 KB', '', '', '', '', '', '', 0, 0, '8607fa1251cdcc2a51eefdf1b0a9e604.jpeg', 15544334644858, '19836b041898fe57a0144bb67b42fb2a31783f9d', 0, 1, 0),
(15570237386597, 'Screenshot from 2019-05-04 13-48-21', '$2a$10$RoTu4GtNVExfS579graxTO0G.dnoW7UaPNirxYchTVYSnlW336k3u', '', 'f9fcfbc1d982b73152f00332728588c9.png', '', 0, 'image/png', 1004, 469, '157.2 KB', '', '', '', '', '', '', 0, 0, 'f9fcfbc1d982b73152f00332728588c9.jpeg', 15544334644858, '4ea8012df464626316507d38bd03449282e1212c', 0, 0, 0);

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

--
-- Dumping data for table `presentation`
--

INSERT INTO `presentation` (`id`, `album_id`, `photo_id`, `folder_id`, `position`, `note`) VALUES
(15569968643206, 15544334644858, 15569936258338, 15569558561311, 0, NULL),
(15569970030939, 15544334644858, 15569936258338, 15569558437702, 0, NULL),
(15569970055605, 15544334644858, 15569936258338, 15569558437702, 0, NULL),
(15569973019508, 15544334644858, 15549499224302, 15569558561311, 0, NULL),
(15569973145083, 15544334644858, 15549499223342, 15569558437702, 0, NULL),
(15569975044185, 15544334644858, 15569936258338, 15569558437702, 0, NULL),
(15569975282091, 15544334644858, 15569936258338, 15569558437702, 0, NULL),
(15569977853496, 15544334644858, 15549499226137, 15569558437702, 0, NULL),
(15569978192160, 15544334644858, 15549499223342, 15569856288016, 0, NULL),
(15569978434662, 15544334644858, 15549499223342, 15569856288016, 0, NULL),
(15569989108522, 15544334644858, 15549499226620, 15569558437702, 0, NULL),
(15569991928141, 15544334644858, 15549499222024, 15549499222024, 0, NULL),
(15569992179935, 15544334644858, 15549499223342, 15549499223342, 0, NULL),
(15569992849977, 15544334644858, 15549499224302, 0, 0, NULL),
(15569992971138, 15544334644858, 15549499224302, 0, 0, NULL),
(15569994740467, 15544334644858, 15549499220516, 15569558561311, 0, NULL),
(15569995564152, 15544334644858, 15549499230781, 15569887486894, 0, NULL),
(15570006342964, 15544334644858, 15549499229540, 15569889519257, 0, NULL),
(15570013388356, 15544334644858, 15549499224302, 15570012867449, 0, NULL);

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

--
-- Dumping data for table `presentation_folder`
--

INSERT INTO `presentation_folder` (`id`, `album_id`, `title`, `parent_folder`, `position`, `note`, `import_id`) VALUES
(15569558437702, 15544334644858, 'Untitled', NULL, 0, NULL, NULL),
(15569558561311, 15544334644858, 'Folder 1', NULL, 0, NULL, NULL),
(15569856288016, 15544334644858, 'Folder 2', NULL, 0, NULL, NULL),
(15569887486894, 15544334644858, 'Folder 3', NULL, 0, NULL, NULL),
(15569889519257, 15544334644858, 'Child folder 1', 15569558561311, 0, NULL, NULL),
(15570012867449, 15544334644858, 'Child 2', 15569558561311, 0, NULL, NULL);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=202;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(14) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
