CREATE DATABASE IF NOT EXISTS tasksdb;

USE taskdb;

CREATE TABLE IF NOT EXISTS tasks(
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    description TEXT,
    PRIMARY KEY(id)
)

INSERT INTO task(title, description) VALUES 
('task 1', 'some description'),
('task 2', 'some description 2');