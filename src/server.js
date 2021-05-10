const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const db = require("./db");
const { DB_TABLE } = require("./constants");

app.use(bodyParser.json());

app.get("/templates", (req, res) => {
  db.query(`SELECT * FROM ${DB_TABLE}`, (err, result, fields) => {
    if (err) throw err;
    res.setHeader("Content-Type", "application/json");
    res.send(result);
  });
});

app.post("/templates", (req, res) => {
  const { title, description, category, code } = req.body;
  const sql = `INSERT INTO ${DB_TABLE} (title, description, category, code) VALUES ('${title}', '${description}', '${category}', '${code}');`;
  db.query(sql, function (err, result) {
    if (err) throw err;
    res.setHeader("Content-Type", "application/json");
    res.send(result);
  });
});

//Other endpoints:
// app.put("/templates/:id", ... );
// app.delete("/templates/:id", ... );

const port = 8080;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
