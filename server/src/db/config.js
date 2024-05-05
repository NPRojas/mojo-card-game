// add your database connection here
//import the Sequelize class
const Sequelize = require("sequelize");

// create instance of the class
const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "./mojo-database.sqlite"
});