CREATE DATABASE chat;

USE chat;

-- CREATE TABLE messages (
--    Describe your table here.
-- );

-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'Main'
--
-- ---

DROP TABLE IF EXISTS `Main`;

CREATE TABLE `Main` (
  `userID` INTEGER(6) NOT NULL,
  `roomID` INTEGER(4) NOT NULL,
  `messageID` INTEGER(10) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`messageID`)
);

-- ---
-- Table 'Messages'
--
-- ---

DROP TABLE IF EXISTS `Messages`;

CREATE TABLE `Messages` (
  `messageID` INTEGER(10) NOT NULL AUTO_INCREMENT,
  `content` VARCHAR(136) NOT NULL,
  `createTimeAt` TIMESTAMP NOT NULL,
  PRIMARY KEY (`messageID`)
);

-- ---
-- Table 'User'
--
-- ---

DROP TABLE IF EXISTS `User`;

CREATE TABLE `User` (
  `userID` INTEGER(6) NOT NULL AUTO_INCREMENT,
  `userName` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`userID`)
);

-- ---
-- Table 'Room'
--
-- ---

DROP TABLE IF EXISTS `Room`;

CREATE TABLE `Room` (
  `roomID` INTEGER(6) NOT NULL AUTO_INCREMENT,
  `roomName` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`roomID`)
);

-- ---
-- Foreign Keys
-- ---


-- ---
-- Table Properties
-- ---

-- ALTER TABLE `Main` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Messages` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `User` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `Main` (`userID`,`room`,`messageID`) VALUES
-- ('','','');
-- INSERT INTO `Messages` (`messageID`,`content`,`createTimeAt`) VALUES
-- ('','','');
-- INSERT INTO `User` (`userID`,`userName`) VALUES
-- ('','');


/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

