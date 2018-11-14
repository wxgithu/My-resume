-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 2018-11-14 03:55:28
-- 服务器版本： 10.1.28-MariaDB
-- PHP Version: 5.6.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `xm`
--

-- --------------------------------------------------------

--
-- 表的结构 `xm_user`
--

CREATE TABLE `xm_user` (
  `uid` int(11) NOT NULL,
  `uname` varchar(32) DEFAULT NULL,
  `upwd` varchar(32) DEFAULT NULL,
  `email` varchar(64) DEFAULT NULL,
  `phone` varchar(16) DEFAULT NULL,
  `avatar` varchar(128) DEFAULT NULL,
  `user_name` varchar(32) DEFAULT NULL,
  `gender` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `xm_user`
--

INSERT INTO `xm_user` (`uid`, `uname`, `upwd`, `email`, `phone`, `avatar`, `user_name`, `gender`) VALUES
(1, 'dingding', '123456', 'ding@qq.com', '13501234567', 'img/avatar/default.png', '丁伟', 1),
(2, 'dangdang', '123456', 'dang@qq.com', '13501234568', 'img/avatar/default.png', '林当', 1),
(3, 'doudou', '123456', 'dou@qq.com', '13501234569', 'img/avatar/default.png', '窦志强', 1),
(4, 'yaya', '123456', 'ya@qq.com', '13501234560', 'img/avatar/default.png', '秦小雅', 0),
(5, '1111', '111111', '441977193@qq.com', '18357100796', NULL, NULL, NULL),
(6, 'ABCD', '123456', '123@qq.com', '13538894495', NULL, NULL, NULL),
(7, 'mohk', '123456', '11@qq.com', '13512312312', NULL, NULL, NULL),
(8, '121123', 'w13945128995', '491000888@qq.com', '13213389258', NULL, NULL, NULL),
(9, '555555', '5555555', '55555555@163.com', '13400000000', NULL, NULL, NULL),
(10, 'xuyong', '123456', '123456789@qq.com', '15525623622', NULL, NULL, NULL),
(11, 'admin', 'cxy930123', 'mail@xingyu1993.cn', '13580510164', NULL, NULL, NULL),
(12, 'siyongbo', '900427', '616188545@qq.com', '18447103998', NULL, NULL, NULL),
(13, 'qwerty', '123456', '1091256014@qq.com', '15617152367', NULL, NULL, NULL),
(14, 'dingziqiang', '456456', '996534706@qq.com', '15567502520', NULL, NULL, NULL),
(15, 'hdb2264068', 'huang123', '471062503@qq.com', '18898405759', NULL, NULL, NULL),
(16, 'wenhua', '654321', 'liwenhua@tedu.cn', '15012345678', NULL, NULL, NULL),
(17, '<img>', 'cxy930123', 'mail@xingyu1993.cn.1', '11111111111', NULL, NULL, NULL),
(18, '</body>', 'cxy930123', 'mail@xingyu1993.cn.2', '22222222222', NULL, NULL, NULL),
(19, '<img src=@>', 'cxy930123', 'mail@xingyu1993.cn.3', '33333333333', NULL, NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `xm_user`
--
ALTER TABLE `xm_user`
  ADD PRIMARY KEY (`uid`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `xm_user`
--
ALTER TABLE `xm_user`
  MODIFY `uid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
