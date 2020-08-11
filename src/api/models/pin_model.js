'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const Pin = sequelize.define('Pin', {
    pin: {
      type: DataTypes.STRING,
    },
    userId: {
      type: DataTypes.INTEGER
    },
    startAt: {
        type: DataTypes.DATE
    },
    endAt: {
        type: DataTypes.DATE
    }
  });

module.exports = Pin;