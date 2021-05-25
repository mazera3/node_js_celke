const express = require("express");
const app = express();
const Handlebars = require("express-handlebars");
var bodyParser = require('body-parser');
const Pagamento = require('./models/Pagamento');
const Colaborador = require('./models/Colaborador');
const moment = require('moment');

app.engine('handlebars', Handlebars({
   defaultLayout: 'main',
   helpers: {
      formatDate: (date) => {
         return moment(date).format('DD/MM/YYYY')
      }
   }
}))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({
   extended: false
}))
app.use(bodyParser.json())

//rotas
app.get('/', function (req, res) {
   res.render('home')
});

app.get('/pago', function (req, res) {
   Pagamento.findAll({
      order: [
         ['id', 'ASC']
      ]
   }).then(function (pagamentos) {
      res.render('pago', {
         pagamentos: pagamentos.map(pagamento => pagamento.toJSON())
      });
   });
});
//
app.get('/index', function (req, res) {
   Colaborador.findAll().then(function (colaboradores) {
      res.render('index', {
         colaboradores: colaboradores.map(colaborador => colaborador.toJSON())
      });
   });
});
//
app.get('/cad-pagamento', function (req, res) {
   res.render('cad-pagamento')
});
// add-pagamento
app.post('/add-pagamento', function (req, res) {
   // res.send('Nome: ' + req.body.nome + '<br/>Valor: ' + req.body.valor)
   Pagamento.create({
      nome: req.body.nome,
      valor: req.body.valor,
   }).then(function () {
      // res.send('Pagamento Cadastrado com Sucesso!');
      res.redirect('/pago')
   }).catch(function (erro) {
      res.send('Erro: Pagamento não cadastrado' + erro)
   })
});
// add-colaborador
app.post('/add-colaborador', function (req, res) {
   // res.send('Nome: ' + req.body.nome + '<br/>Valor: ' + req.body.valor)
   Colaborador.create({
      nome: req.body.nome,
      valor: req.body.valor,
   }).then(function () {
      // res.send('Pagamento Cadastrado com Sucesso!');
      res.redirect('/index')
   }).catch(function (erro) {
      res.send('Erro: colaborador não cadastrado' + erro)
   })
});
//

app.get('/del-pagamento/:id', function (req, res) {
   Pagamento.destroy({
      where: {
         'id': req.params.id
      }
   }).then(function(){
      res.redirect('/pago')
      //res.send('Item excluído com sucesso!')
   }).catch(function(erro){
      res.send('Erro: não foi excluído' + erro)
   })
});


/*
const port = 8081;
app.listen(port, () => {
   console.log(`App rodando na porta http://localhost:${port}`)
});
*/
var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log('Umbler listening on port %s', port);
});