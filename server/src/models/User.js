// create your User model here

//import the sequalize instance 
const sequalize = require("../db/config");
//import the DataTypes 
const { DataTypes } = require("sequelize");

// use the define method to create the model 
const User = sequalize.define("user", {
    username: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

// export the class
module.exports = User;