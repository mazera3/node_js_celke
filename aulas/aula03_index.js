// Aula 03 - Node js
/* Referencias:
https://nodejs.org/dist/latest-v16.x/docs/api/synopsis.html
*/
var http = require("http");
http.createServer(function(req, res){
    //res.statusCode = 200;
    //res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Gerenciador Financeiro!</h1>\n');
  }).listen(8081);