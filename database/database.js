const Sequelize = require('sequelize');
const connection = new Sequelize('guiadeperguntas','root','@Ax001325',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;