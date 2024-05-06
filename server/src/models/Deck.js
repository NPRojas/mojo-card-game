const sequalize = require("../db/config");
const { DataTypes } = require("sequelize");

const Deck = sequalize.define("deck", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    xp: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
});

module.exports = Deck;