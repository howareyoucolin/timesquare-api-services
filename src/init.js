const mysql = require("mysql");
const { DB_NAME, DB_TABLE } = require("./constants");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
});

const initDatabaseSchema = async () => {
  try {
    await db.query(`CREATE DATABASE IF NOT EXISTS ${DB_NAME}`);
    await db.query(`use ${DB_NAME}`);
    await db.query(`CREATE TABLE IF NOT EXISTS \`${DB_TABLE}\` (
        \`id\` int(11) NOT NULL AUTO_INCREMENT,
        \`title\` varchar(50) NOT NULL,
        \`description\` varchar(200) NOT NULL,
        \`category\` int(11) NOT NULL,
        \`code\` text NOT NULL,
        \'image_url\' varchar(200) NOT NULL DEFAULT '',
        PRIMARY KEY (id)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8;`);

    console.log(
      `Successfully created database ${DB_NAME} and table ${DB_TABLE}!`
    );
  } catch (err) {
    console.log(err.message);
  }
  return;
};

initDatabaseSchema().then((data) => {
  db.end();
});
