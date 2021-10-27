-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 27, 2021 at 11:37 AM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 8.0.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `appifyfirstproject`
--

-- --------------------------------------------------------

--
-- Table structure for table `adonis_schema`
--

CREATE TABLE `adonis_schema` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL,
  `migration_time` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `adonis_schema`
--

INSERT INTO `adonis_schema` (`id`, `name`, `batch`, `migration_time`) VALUES
(2, 'database\\migrations\\1633595750592_users', 1, '2021-10-08 12:31:06'),
(3, 'database\\migrations\\1633762342927_posts', 2, '2021-10-09 07:02:37'),
(4, 'database\\migrations\\1633838825583_likes', 3, '2021-10-10 04:16:32'),
(5, 'database\\migrations\\1633846184520_comments', 4, '2021-10-10 06:41:13'),
(6, 'database\\migrations\\1633853320669_comment_replies', 5, '2021-10-10 08:29:13'),
(7, 'database\\migrations\\1634614049264_post_images', 6, '2021-10-19 03:39:06'),
(9, 'database\\migrations\\1635224420581_chats', 7, '2021-10-26 05:38:09');

-- --------------------------------------------------------

--
-- Table structure for table `chats`
--

CREATE TABLE `chats` (
  `id` int(10) UNSIGNED NOT NULL,
  `sender_id` int(10) UNSIGNED NOT NULL,
  `recever_id` int(10) UNSIGNED NOT NULL,
  `post_image` varchar(191) NOT NULL,
  `unique_id` varchar(191) NOT NULL,
  `chat_text` varchar(191) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `chats`
--

INSERT INTO `chats` (`id`, `sender_id`, `recever_id`, `post_image`, `unique_id`, `chat_text`, `created_at`, `updated_at`) VALUES
(2, 18, 19, '', '1819', 'Hi', '2021-10-26 05:41:04', '2021-10-26 05:41:04'),
(3, 19, 18, '', '1819', 'Hello', '2021-10-26 05:41:54', '2021-10-26 05:41:54'),
(4, 18, 19, '', '1819', 'hi', '2021-10-26 05:59:40', '2021-10-26 05:59:40'),
(5, 18, 19, '', '1819', 'no reply!!!', '2021-10-26 06:00:43', '2021-10-26 06:00:43'),
(6, 18, 19, '', '1819', 'yes please', '2021-10-26 07:39:21', '2021-10-26 07:39:22'),
(7, 18, 21, '', '1821', 'hi there', '2021-10-26 08:30:39', '2021-10-26 08:30:39'),
(8, 18, 20, '', '1820', 'hello bro', '2021-10-26 15:39:20', '2021-10-26 15:39:20'),
(9, 18, 20, '', '1820', 'hi\n', '2021-10-26 15:42:07', '2021-10-26 15:42:07'),
(10, 18, 19, '', '1819', 'hi\n', '2021-10-27 09:35:38', '2021-10-27 09:35:38'),
(11, 18, 19, '', '1819', 'ayy\n', '2021-10-27 09:35:45', '2021-10-27 09:35:45');

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `id` int(10) UNSIGNED NOT NULL,
  `comment_text` text NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `post_id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`id`, `comment_text`, `user_id`, `post_id`, `created_at`, `updated_at`) VALUES
(64, 'hi', 18, 52, '2021-10-20 09:13:54', '2021-10-20 09:13:54'),
(65, 'comment', 18, 55, '2021-10-26 11:20:03', '2021-10-26 11:20:03'),
(66, 'comment', 18, 54, '2021-10-26 11:20:30', '2021-10-26 11:20:30');

-- --------------------------------------------------------

--
-- Table structure for table `comment_replies`
--

CREATE TABLE `comment_replies` (
  `id` int(10) UNSIGNED NOT NULL,
  `reply_text` text NOT NULL,
  `comment_id` int(10) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `likes`
--

CREATE TABLE `likes` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `post_id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `likes`
--

INSERT INTO `likes` (`id`, `user_id`, `post_id`, `created_at`, `updated_at`) VALUES
(176, 19, 53, '2021-10-20 06:16:09', '2021-10-20 06:16:09'),
(177, 19, 52, '2021-10-20 06:16:14', '2021-10-20 06:16:14'),
(178, 19, 54, '2021-10-20 06:16:24', '2021-10-20 06:16:24'),
(179, 18, 53, '2021-10-20 06:17:15', '2021-10-20 06:17:15'),
(181, 18, 52, '2021-10-20 09:13:51', '2021-10-20 09:13:51');

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` int(10) UNSIGNED NOT NULL,
  `post_text` text DEFAULT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `post_text`, `user_id`, `created_at`, `updated_at`) VALUES
(52, '', 18, '2021-10-19 11:22:39', '2021-10-19 11:22:39'),
(53, 'Yes, I am.', 18, '2021-10-19 11:40:55', '2021-10-19 11:40:55'),
(54, 'Arjho Bhowmik', 19, '2021-10-20 06:15:49', '2021-10-20 06:15:49'),
(55, 'next', 18, '2021-10-20 08:27:59', '2021-10-20 08:27:59');

-- --------------------------------------------------------

--
-- Table structure for table `post_images`
--

CREATE TABLE `post_images` (
  `id` int(10) UNSIGNED NOT NULL,
  `post_id` int(10) UNSIGNED NOT NULL,
  `post_image` varchar(191) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `post_images`
--

INSERT INTO `post_images` (`id`, `post_id`, `post_image`, `created_at`, `updated_at`) VALUES
(48, 52, 'postImages/0.00017858365937994947.jpg', '2021-10-19 11:22:40', '2021-10-19 11:22:40'),
(49, 52, 'postImages/0.37049588952679047.jpg', '2021-10-19 11:22:40', '2021-10-19 11:22:40'),
(50, 52, 'postImages/0.475066081025606.jpg', '2021-10-19 11:22:40', '2021-10-19 11:22:40'),
(51, 52, 'postImages/0.7723819047702638.jpg', '2021-10-19 11:22:40', '2021-10-19 11:22:40'),
(52, 53, 'postImages/0.5103048994302668.jpg', '2021-10-19 11:40:56', '2021-10-19 11:40:56'),
(53, 54, 'postImages/0.38917149691724373.png', '2021-10-20 06:15:50', '2021-10-20 06:15:50'),
(54, 54, 'postImages/0.29085403192713355.png', '2021-10-20 06:15:50', '2021-10-20 06:15:50'),
(55, 54, 'postImages/0.5584448417597705.png', '2021-10-20 06:15:50', '2021-10-20 06:15:50'),
(56, 54, 'postImages/0.09958352924795255.png', '2021-10-20 06:15:50', '2021-10-20 06:15:50'),
(57, 55, 'postImages/0.9096921367174311.png', '2021-10-20 08:28:00', '2021-10-20 08:28:00'),
(58, 55, 'postImages/0.9126948638852288.png', '2021-10-20 08:28:00', '2021-10-20 08:28:00');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `email` varchar(191) NOT NULL,
  `password` varchar(191) NOT NULL,
  `first_name` varchar(191) NOT NULL,
  `last_name` varchar(191) NOT NULL,
  `user_name` varchar(191) NOT NULL,
  `profile_picture` varchar(191) DEFAULT NULL,
  `gender` varchar(10) DEFAULT NULL,
  `remember_me_token` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `first_name`, `last_name`, `user_name`, `profile_picture`, `gender`, `remember_me_token`, `created_at`, `updated_at`) VALUES
(18, 'biprobhowmik5@gmail.com', '$argon2id$v=19$t=3,m=4096,p=1$3I4avJa8zKVlKB5ybnYuOA$afYxOR6sXso7ZXGDcnFmr5ohpQylTd/IY5+5LwJtWl8', 'Bipro', 'Bhowmik', 'Joy0005', 'profilePictures/0.04403079766311202.jpg', 'Male', NULL, '2021-10-19 11:16:31', '2021-10-19 11:16:31'),
(19, 'a@g.c', '$argon2id$v=19$t=3,m=4096,p=1$xbVz9xEAKA23YrZVxmAGSQ$JtyNdqQVxXGdKNpb6rMRVwfPJxHxmMmZnsrhuC8Pub0', 'Arjho', 'The Boss', 'Boos0005', 'profilePictures/0.6360162068801825.jpg', 'Male', NULL, '2021-10-20 06:14:29', '2021-10-20 06:14:29'),
(20, 'ak5@gmail.com', '$argon2id$v=19$t=3,m=4096,p=1$0TOHa0eQuH1IeVtIiR82mw$kk2eiA9FQKS8ly58VDQVycnSoL6jmQ+1Weit5aMomV4', 'Al Amin', 'Kashem', 'AKH', 'profilePictures/0.18938318669282173.jpg', 'Male', NULL, '2021-10-20 09:46:13', '2021-10-20 09:46:13'),
(21, 'mr@gmail.com', '$argon2id$v=19$t=3,m=4096,p=1$6NcaFds3XXpjO1MoUDU4Kg$d/zIiG97kpwsRZdXsdAVqa9xWoFFsIMN48PXm4gurBc', 'Mahjabin', 'Ramisha', 'MR', 'profilePictures/0.5856301472255432.png', 'Female', NULL, '2021-10-20 09:47:05', '2021-10-20 09:47:05');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `adonis_schema`
--
ALTER TABLE `adonis_schema`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `chats`
--
ALTER TABLE `chats`
  ADD PRIMARY KEY (`id`),
  ADD KEY `chats_sender_id_foreign` (`sender_id`),
  ADD KEY `chats_recever_id_foreign` (`recever_id`);

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `comments_user_id_foreign` (`user_id`),
  ADD KEY `comments_post_id_foreign` (`post_id`);

--
-- Indexes for table `comment_replies`
--
ALTER TABLE `comment_replies`
  ADD PRIMARY KEY (`id`),
  ADD KEY `comment_replies_comment_id_foreign` (`comment_id`),
  ADD KEY `comment_replies_user_id_foreign` (`user_id`);

--
-- Indexes for table `likes`
--
ALTER TABLE `likes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `likes_user_id_foreign` (`user_id`),
  ADD KEY `likes_post_id_foreign` (`post_id`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `posts_user_id_foreign` (`user_id`);

--
-- Indexes for table `post_images`
--
ALTER TABLE `post_images`
  ADD PRIMARY KEY (`id`),
  ADD KEY `post_images_post_id_foreign` (`post_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `adonis_schema`
--
ALTER TABLE `adonis_schema`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `chats`
--
ALTER TABLE `chats`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=67;

--
-- AUTO_INCREMENT for table `comment_replies`
--
ALTER TABLE `comment_replies`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `likes`
--
ALTER TABLE `likes`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=182;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=56;

--
-- AUTO_INCREMENT for table `post_images`
--
ALTER TABLE `post_images`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=59;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `chats`
--
ALTER TABLE `chats`
  ADD CONSTRAINT `chats_recever_id_foreign` FOREIGN KEY (`recever_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `chats_sender_id_foreign` FOREIGN KEY (`sender_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `comments_post_id_foreign` FOREIGN KEY (`post_id`) REFERENCES `posts` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `comments_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `comment_replies`
--
ALTER TABLE `comment_replies`
  ADD CONSTRAINT `comment_replies_comment_id_foreign` FOREIGN KEY (`comment_id`) REFERENCES `comments` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `comment_replies_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `likes`
--
ALTER TABLE `likes`
  ADD CONSTRAINT `likes_post_id_foreign` FOREIGN KEY (`post_id`) REFERENCES `posts` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `likes_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `posts_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `post_images`
--
ALTER TABLE `post_images`
  ADD CONSTRAINT `post_images_post_id_foreign` FOREIGN KEY (`post_id`) REFERENCES `posts` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
