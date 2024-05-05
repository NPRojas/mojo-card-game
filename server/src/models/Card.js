const sequalize = require("../db/config");
const { DataTypes } = require("sequelize");

const Card = sequalize.define("card", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    mojo: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    stamina: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    imgURL: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Card;