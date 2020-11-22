DROP DATABASE IF EXISTS reviewsMod;

CREATE DATABASE reviewsMod;

USE reviewsMod;

CREATE TABLE users (
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(40),
username VARCHAR(40),
address VARCHAR(100),
contributions INT,
votes INT,
avatar VARCHAR(100),
followers INT
);

CREATE TABLE listings (
  id INT AUTO_INCREMENT PRIMARY KEY,
  listing VARCHAR(100)
);

CREATE TABLE reviews (
id INT AUTO_INCREMENT PRIMARY KEY,
listing_id INT,
user_id INT,
title VARCHAR(100),
full_text VARCHAR(500),
date VARCHAR(70),
season VARCHAR(20),
travel_type VARCHAR(20),
language VARCHAR(20),
rating INT,
photo1 VARCHAR(50),
photo2 VARCHAR(50),
photo3 VARCHAR(50),
helpful VARCHAR(50),
FOREIGN KEY (user_id) REFERENCES users(id),
FOREIGN KEY (listing_id) REFERENCES listings(id)
);





-- mysql -u student1 < schema.sql -p