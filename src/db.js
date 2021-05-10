const mysql = require("mysql");
const { DB_NAME } = require("./constants");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: DB_NAME,
});

module.exports = db;
