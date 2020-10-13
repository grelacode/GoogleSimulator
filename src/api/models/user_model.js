const bcrypt = require("bcrypt");

module.exports = function(sequelize, DataTypes) {
    const User = sequelize.define('users', {
        userId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            field: 'user_id'
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'email'
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'password'
        },
    }, {
        freezeTableName: true,
        instanceMethods: {
            async generateHash(password) {
                return await bcrypt.hash(password, bcrypt.genSaltSync(8));
            },
            async validPassword(password) {
                return await bcrypt.compare(password, this.password);
            }
        }
    });

    return User;
}
