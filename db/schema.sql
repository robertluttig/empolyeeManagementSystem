drop database if exists management_db;
create database management_db;
use management_db;

CREATE TABLE departments (
    id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE role (
    id INT AUTO_INCREMENT NOT NULL,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL,
    deptId INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (deptId) 
		REFERENCES departments(id)
);

CREATE TABLE employee (
    id INT AUTO_INCREMENT NOT NULL,
    firstName VARCHAR(50) NOT NULL,
    lastName VARCHAR(50) NOT NULL,
    roleId INT NOT NULL,
    manager_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (roleId)
        REFERENCES role (id)
);