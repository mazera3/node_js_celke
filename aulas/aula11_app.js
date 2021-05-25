const { Sequelize, DataTypes } = require('sequelize');
// credencias DB
const HOST = 'localhost';
const USERNAME = 'mazera';
const PASSWORD = 'mazera';
const DATABASE = 'nodejs';

const sequelize = new Sequelize(DATABASE, USERNAME, PASSWORD, {
    host: HOST,
    dialect: 'mysql'
});

sequelize.authenticate().then(function () {
    console.log('Conectado com Sucesso!');
}).catch(function (err) {
    console.log('Erro: Conexão Recusada!:' + err);
});

const Pagamento = sequelize.define('pagamentos', {
    // Model attributes are defined here
    nome: {
      type: DataTypes.STRING,
      allowNull: true
    },
    valor: {
      type: DataTypes.DOUBLE
    }
  });

  //Pagamento.sync({alter: true});

  Pagamento.create({
      nome: "Energia",
      valor: 220
  })