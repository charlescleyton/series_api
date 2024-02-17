const Sequelize = require('sequelize');
const db = require('../config/db');

const Series = db.define('series', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    ano: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    image_url: {
        type: Sequelize.STRING,
        allowNull: false
    },
    trailer_url: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = Series;
