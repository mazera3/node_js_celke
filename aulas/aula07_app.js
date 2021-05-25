const express = require("express");
const app = express();
const port = 8081;

// conexão com db MySql
const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'mazera',
  password: 'mazera',
  database: 'nodejs'
});

connection.connect(function (err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
});

connection.query('SELECT * FROM users', function (err, rows, fields) {
  if (!err){
  console.log('Resultado: ', rows);
}else{
  console.log("Erro ao realizar a consulta!");
}
});

app.listen(port, () => {
  console.log(`App rodando na porta http://localhost:${port}`)
});