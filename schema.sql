CREATE DATABASE tripreviews;

\c tripreviews;

CREATE TABLE users (
id BIGSERIAL PRIMARY KEY,
name VARCHAR(40),
username VARCHAR(40),
address VARCHAR(100),
contributions INT,
votes INT,
avatar VARCHAR(100),
followers INT
);

CREATE TABLE listings (
  id BIGSERIAL PRIMARY KEY,
  listing VARCHAR(100)
);

CREATE TABLE reviews (
  id BIGSERIAL PRIMARY KEY,
  listing_id INT,
  user_id INT,
  title VARCHAR(150),
  full_text VARCHAR(500),
  date VARCHAR(70),
  season VARCHAR(20),
  travel_type VARCHAR(20),
  language VARCHAR(50),
  rating VARCHAR(10),
  photo1 VARCHAR(150),
  photo2 VARCHAR(150),
  photo3 VARCHAR(150),
  helpful_count INT,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (listing_id) REFERENCES listings(id)
);





-- mysql -u student1 < schema.sql -p