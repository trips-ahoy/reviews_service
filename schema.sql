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

CREATE TABLE reviews (
id INT AUTO_INCREMENT PRIMARY KEY,
user_id INT,
title VARCHAR(100),
full_text VARCHAR(500),
date VARCHAR(70),
season VARCHAR(20),
travel_type VARCHAR(20),
language VARCHAR(20),
rating INT,
photo VARCHAR(50),
helpful VARCHAR(50),
FOREIGN KEY (user_id) REFERENCES users(id)
);




-- mysql -u student < schema.sql -p