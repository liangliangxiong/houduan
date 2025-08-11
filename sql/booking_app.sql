/*
 Navicat Premium Data Transfer

 Source Server         : mysql
 Source Server Type    : MySQL
 Source Server Version : 80404 (8.4.4)
 Source Host           : localhost:3306
 Source Schema         : booking_app

 Target Server Type    : MySQL
 Target Server Version : 80404 (8.4.4)
 File Encoding         : 65001

 Date: 11/08/2025 15:59:49
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for activity
-- ----------------------------
DROP TABLE IF EXISTS `activity`;
CREATE TABLE `activity` (
  `id` bigint NOT NULL AUTO_INCREMENT COMMENT '活动ID',
  `title` varchar(100) NOT NULL COMMENT '活动标题',
  `time` datetime NOT NULL COMMENT '活动时间',
  `location` varchar(200) NOT NULL COMMENT '活动地点',
  `quota` int NOT NULL COMMENT '总名额',
  `current_count` int DEFAULT '0' COMMENT '当前报名人数',
  `description` text COMMENT '活动介绍',
  `cover_image` varchar(255) DEFAULT NULL COMMENT '封面图片URL',
  `create_time` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='活动表';

-- ----------------------------
-- Records of activity
-- ----------------------------
BEGIN;
INSERT INTO `activity` (`id`, `title`, `time`, `location`, `quota`, `current_count`, `description`, `cover_image`, `create_time`, `update_time`) VALUES (1, '摄影爱好者户外采风', '2025-08-20 09:00:00', '北京奥林匹克森林公园', 20, 5, '适合各类摄影爱好者的户外活动，交流技巧，拍摄自然风光。', 'https://example.com/images/photo1.jpg', '2025-08-10 23:04:27', '2025-08-10 23:04:27');
INSERT INTO `activity` (`id`, `title`, `time`, `location`, `quota`, `current_count`, `description`, `cover_image`, `create_time`, `update_time`) VALUES (2, '编程沙龙：Node.js 实战', '2025-08-25 14:00:00', '上海张江高科创客空间', 30, 12, '面向初中级开发者的 Node.js 技术交流活动。', 'https://example.com/images/nodejs.jpg', '2025-08-10 23:04:27', '2025-08-10 23:04:27');
INSERT INTO `activity` (`id`, `title`, `time`, `location`, `quota`, `current_count`, `description`, `cover_image`, `create_time`, `update_time`) VALUES (3, '手工咖啡体验课', '2025-09-01 10:00:00', '广州天河区手工咖啡馆', 15, 8, '咖啡师带你学习咖啡拉花与手冲技巧。', 'https://example.com/images/coffee.jpg', '2025-08-10 23:04:27', '2025-08-10 23:04:27');
COMMIT;

-- ----------------------------
-- Table structure for registration
-- ----------------------------
DROP TABLE IF EXISTS `registration`;
CREATE TABLE `registration` (
  `id` bigint NOT NULL AUTO_INCREMENT COMMENT '报名ID',
  `activity_id` bigint NOT NULL COMMENT '活动ID',
  `name` varchar(50) NOT NULL COMMENT '报名人姓名',
  `phone` varchar(20) NOT NULL COMMENT '手机号',
  `remark` varchar(200) DEFAULT NULL COMMENT '备注',
  `status` enum('pending','approved','rejected') DEFAULT 'pending' COMMENT '报名状态',
  `create_time` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '报名时间',
  PRIMARY KEY (`id`),
  KEY `activity_id` (`activity_id`),
  CONSTRAINT `registration_ibfk_1` FOREIGN KEY (`activity_id`) REFERENCES `activity` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='报名表';

-- ----------------------------
-- Records of registration
-- ----------------------------
BEGIN;
INSERT INTO `registration` (`id`, `activity_id`, `name`, `phone`, `remark`, `status`, `create_time`) VALUES (1, 1, 'zhangsan', '13800000001', '喜欢风景拍摄', 'approved', '2025-08-10 23:04:34');
INSERT INTO `registration` (`id`, `activity_id`, `name`, `phone`, `remark`, `status`, `create_time`) VALUES (2, 1, '李四', '13800000002', '带单反相机', 'pending', '2025-08-10 23:04:34');
INSERT INTO `registration` (`id`, `activity_id`, `name`, `phone`, `remark`, `status`, `create_time`) VALUES (3, 2, '王五', '13800000003', '想学习Express框架', 'approved', '2025-08-10 23:04:34');
INSERT INTO `registration` (`id`, `activity_id`, `name`, `phone`, `remark`, `status`, `create_time`) VALUES (4, 3, '赵六', '13800000004', '第一次接触手冲咖啡', 'approved', '2025-08-10 23:04:34');
COMMIT;

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` bigint NOT NULL AUTO_INCREMENT COMMENT '用户ID',
  `username` varchar(50) NOT NULL COMMENT '用户名',
  `password` varchar(255) NOT NULL COMMENT '密码',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='用户表';

-- ----------------------------
-- Records of users
-- ----------------------------
BEGIN;
INSERT INTO `users` (`id`, `username`, `password`) VALUES (1, 'admin', 'admin123');
INSERT INTO `users` (`id`, `username`, `password`) VALUES (2, 'user001', 'user123');
INSERT INTO `users` (`id`, `username`, `password`) VALUES (3, 'user002', 'user123');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
