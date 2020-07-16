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
    const VIEW_STUDENTS = "View Students";
    const UPDATE_STUDENT_CLASS = "Update student class";