const Sequelize = require('sequelize');
const sequelize = new Sequelize(
    process.env.POSTGRES_DB || 'anywebdatabase',
    process.env.POSTGRES_USER || 'user',
    process.env.POSTGRES_PASSWORD || 'qwerty123',
    {
        host: process.env.DATABASE_HOST || 'localhost',
        port: process.env.DB_PORT || 5432,
        dialect: 'postgres',
        dialectOptions: {
            ssl: process.env.DB_SSL == "true"
        }
    });

module.exports = {
    sequelize: sequelize
}


//agregar parametros produccion//test