CREATE DATABASE pern;

CREATE TABLE employee(
    _id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    salary INT,
    profilephoto TEXT
);