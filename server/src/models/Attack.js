// create your User model here

//import the sequalize instance 
const sequalize = require("../db/config");
//import the DataTypes 
const { DataTypes } = require("sequelize");

// use the define method to create the model 
const Attack = sequalize.define("attack", {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    mojoCost: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    staminaCost: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

// export the class
module.exports = Attack;