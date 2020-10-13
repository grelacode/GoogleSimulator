const Sequelize = require('sequelize');
const sequelize = new Sequelize(
    process.env.POSTGRES_DB,
    process.env.POSTGRES_USER,
    process.env.POSTGRES_PASSWORD,
    {
        host: process.env.DATABASE_HOST,
        port: process.env.DB_PORT,
        dialect: 'postgres',
        dialectOptions: {
            ssl: process.env.DB_SSL == "true"
        }
    });

module.exports = {
    sequelize: sequelize
}


