// import dependencies (mysql, inqurer,inqurer)
var mysql = require("mysql");
var inquirer = require("inquirer");
const cTable = require('console.table');

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Password",
    database: "management_db",
  });

  connection.connect((err) => {
    if (err) {
      console.log("Unable to connect to data source. Good bye.");
    } else {
      mainMenu();
    }
  });
// User main menu function with choice questions
  function mainMenu() {
    inquirer
      .prompt({
        name: "action",
        type: "list",
        message: "What would you like to do?",
        choices: [
          "Add a new department",
          "Add a new role",
          "Add an employee",
          "View all departments",
          "View all roles",
          "View all employees",
          "Update an employee's role",
          "Exit",
        ],
      })
// switch board for user input
      .then((answer) => {
        switch (answer.action) {
          case "Add a new department":
            addNewDepartment();
            break;
        case "Add a new role":
            addNewRole();
            break;
        case "Add an employee":
            addEmployee();
            break;
        case "View all departments":
            viewDepartments();
            break;
        case "View all roles":
            viewAllRoles();
            break;
        case "View all employees":
            viewAllEmployees();
            break;
        case "Update an employee's role":
            updateEmployee();
            break;
        case "Exit":
            connection.end();
            break;
        }
      });

    }

//Add a new department
function addNewDepartment() {
    inquirer
      .prompt({
        name: "department",
        type: "input",
        message: "What is the department name?",
      })
      .then(function (answer) {
        const query = `INSERT INTO departments(depName) VALUES (?)`;
        connection.query(query, answer.department, function (err, res) {
          if (err) {
            throw err;
          }
          console.log("Department was added successfully");
// go back to the menu  
          mainMenu();
        });
      });
    };

//Add a new role
function addNewRole() {
    const query = "SELECT * FROM departments";
    connection.query(query, function (err, res) {
        if (err) {
            console.log("ERROR occurred" + err);
            connection.end();
        } else {
            const answers = inquirer.prompt([
                {
                    type: "input",
                    message: "What role would you like to add?",
                    name: "role"
                },
                {
                    type: "input",
                    message: "What salary would you like the role to have?",
                    name: "salary"
                },
                {
                    type: "input",
                    message: "What is the department id?",
                    name: "deptId"
                }
            ]).then(answers => {

                const query = "INSERT INTO role SET title=?, salary=?, deptId=?";

                connection.query(query, [answers.role, answers.salary, answers.deptId], function (err, res) {
                    if (err) {
                        console.log("ERROR occurred" + err);
                        connection.end();
                    } else {
                        console.log("SUCCESS!!!! New role has been added");
                    }
                    mainMenu();
                });
            });
        }
    });
}
// Add new Employee
function addEmployee() {
    const query = "SELECT * FROM employee";
    connection.query(query, function (err, res) {
        if (err) {
            console.log("ERROR occurred" + err);
            connection.end();
        } else {
            const answers = inquirer.prompt([
                {
                    type: "input",
                    message: "What is the employee's first name?",
                    name: "firstName"
                },
                {
                    type: "input",
                    message: "What is the employee's last name?",
                    name: "lastName"
                },
                {
                    type: "input",
                    message: "What is the role id?",
                    name: "roleId"
                },
                {
                    type: "input",
                    message: "What is the managers id?",
                    name: "manager_id"
                }
            ]).then(answers => {

                const query = "INSERT INTO employee SET firstName=?, lastName=?, roleId=?,manager_id=?";

                connection.query(query, [answers.firstName, answers.lastName, answers.roleId, answers.manager_id], function (err, res) {
                    if (err) {
                        console.log("ERROR occurred" + err);
                        connection.end();
                    } else {
                        console.log("SUCCESS!!!! New employee has been added");
                    }
                    mainMenu();
                });
            });
        }
    });
}
  function viewDepartments() {
    const query = "SELECT * FROM departments";
    connection.query(query, function (err, res) {
      if (err) {
        throw err;
      }
      console.table(res);
      mainMenu();
    });
  };
  function viewAllRoles() {
    const query = "SELECT * FROM role";
    connection.query(query, function (err, res) {
      if (err) {
        throw err;
      }
      console.table(res);
      mainMenu();
    });
  };


  function viewDepartments() {
    const query = "SELECT * FROM departments";
    connection.query(query, function (err, res) {
      if (err) {
        throw err;
      }
      console.table(res);
      mainMenu();
    });
  };
  function viewAllRoles() {
    const query = "SELECT * FROM role";
    connection.query(query, function (err, res) {
      if (err) {
        throw err;
      }
      console.table(res);
      mainMenu();
    });
  };

  function viewAllEmployees() {
    const query = "SELECT * FROM employee";
    connection.query(query, function (err, res) {
      if (err) {
        throw err;
      }
      console.table(res);
      mainMenu();
    });
  };