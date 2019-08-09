CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  userID INT NOT NULL,
  message VARCHAR(200) NOT NULL,
  roomname VARCHAR(20) NOT NULL
);

/* Create other tables and define schemas for them here! */

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(20) NOT NULL
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

