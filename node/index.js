const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const db = require('./database');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());

// Define a default route
app.get('/', (req, res) => {
  var sqlInsert = `INSERT INTO people(name) VALUES ('Marcelo Rocha')`;
  db.query(sqlInsert);

  var sqlSelect = `SELECT * FROM people ORDER BY id`;
  db.query(sqlSelect, (err, result, fields) => {
    res.render('index', { results: result });
  });
});

// Start the server
app.listen(port, () => {
  console.log('O servidor está rodando na porta ' + port);
});

