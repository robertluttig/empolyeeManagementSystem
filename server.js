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
  // List of constants for the different main menu action options
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