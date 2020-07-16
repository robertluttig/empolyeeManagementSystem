-- Departments
INSERT INTO departments (depName) VALUES ("Sales");

INSERT INTO departments (depName) VALUES ("Human Resource");

INSERT INTO departments (depName) VALUES ("Engineering");


-- Role
INSERT INTO role (title, salary, deptId)
VALUES ("Salesperson", 80000, 1);

INSERT INTO role (title, salary, deptId)
VALUES ("Engineer", 100000,3);

INSERT INTO role (title, salary, deptId)
VALUES ("HR Specialist", 60000,2);

INSERT INTO role (title, salary, deptId)
VALUES ("Lead Endineer", 150000,3);


-- Employee
INSERT INTO employee (firstName, lastName, roleId,manager_id)
VALUES ("John", "Doe", 3, 1);

INSERT INTO employee (firstName, lastName, roleId,manager_id)
VALUES ("Joe", "Rogan", 1, 2);

INSERT INTO employee (firstName, lastName, roleId,manager_id)
VALUES ("Pit", "Jupp", 2, 1);

INSERT INTO employee (firstName, lastName, roleId,manager_id)
VALUES ("Hansi", "Hintermeier", 2, 1);
