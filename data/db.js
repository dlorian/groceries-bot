const Sequelize = require('sequelize');

const dbHost = process.env.DB_HOST;
const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER
const dbPass = process.env.DB_PASSWORD;

// const sequelize = new Sequelize(dbName, dbUser, dbPass, {
//     host: dbHost,
//     dialect: 'mysql',
//     port: 3306
// });

const sequelize = new Sequelize('mysql://gracy:gracyspw@localhost:3306/groceries');

sequelize
 .authenticate()
 .then(() => {
   console.log('Connection has been established successfully.');
 })
 .catch(err => {
   console.error('Unable to connect to the database:', err);
   throw new Error(err);
 });