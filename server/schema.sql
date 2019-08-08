CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  messageID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  username TEXT NOT NULL,
  FOREIGN KEY(messages.username) REFERENCES dogs(dogID),
  texts TEXT NOT NULL
);

/* Create other tables and define schemas for them here! */
CREATE TABLE dogs (
  dogID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  dogName TEXT NOT NULL,
  dogBreed TEXT NOT NULL,
  dogColor INT NOT NULL
  FOREIGN KEY(dogs.dogColor) REFERENCES colors(colorID)
);

CREATE TABLE colors (
  colorID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  color TEXT NOT NULL
);



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

