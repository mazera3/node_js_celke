const db = require('./db');

const Pagamento = db.sequelize.define('pagamentos', {
    nome: {
      type: db.DataTypes.STRING,
      allowNull: true
    },
    valor: {
      type: db.DataTypes.DOUBLE
    }
  });

  //Pagamento.sync({alter: true});
  // Pagamento.sync({force: true});

  module.exports = Pagamento;