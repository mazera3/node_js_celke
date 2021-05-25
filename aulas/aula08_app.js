//const express = require("express");
//const app = express();
const port = 8081;

// conexão com db MySql
const mysql = require("mysql2");
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'mazera',
  password: 'mazera',
  database: 'nodejs'
});

conn.connect(function(err){
if(err) console.error('Erro de conexão:' + err.stack); return;
});

conn.query("INSERT INTO users(nome, email) VALUES ('Teste','teste@nodejs.com.br')",
function(err,result){
    if(!err){
        console.log('Usuario cadastrado!');
    }else{
        console.log('Erro ao cadastrar usuário!')
    }
});