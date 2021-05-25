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

module.exports = {
    sequelize: sequelize,
    DataTypes: DataTypes,
    Sequelize: Sequelize
}