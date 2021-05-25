const db = require('./db');

const Colaborador = db.sequelize.define('colaboradores', {
    nome: {
      type: db.DataTypes.STRING,
      allowNull: true
    },
    valor: {
      type: db.DataTypes.DOUBLE
    }
  });

  //Colaborador.sync({alter: true});
  // Colaborador.sync({force: true});

  module.exports = Colaborador;