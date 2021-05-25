const express = require("express");
const app = express();
const port = 8081;
//  req (solicitação) e res (resposta) são objetos .
app.get('/', function(req, res) {
    res.send('Gerenciador Financeiro!')
  });

  app.get('/sobre-empresa', function(req, res) {
    res.send('Página Sobre Empresa!')
  });

  app.get('/blog', function(req, res) {
    res.send('Página do Blog!')
  });

  app.get('/contato', function(req, res) {
    res.send('Página de contato!')
  });

app.listen(port, () => {
    console.log(`App rodando na porta http://localhost:${port}`)
  })
  /*
  O aplicativo inicia um servidor e escuta a porta 8081 por conexões. 
  O aplicativo responde com “Gerenciador Financeiro!” à solicitações para a URL
  raiz (/) ou rota. Para todos os outros caminhos, ele irá responder com 
  um 404 Não Encontrado.
  */