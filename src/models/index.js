const
fs = require('fs'),
Sequelize = require('sequelize');

// create Sequelize instance
// const sequelize = new Sequelize('readr', 'readr', 'readr', {
// 	host: '192.168.1.59',
// 	port: 3306,
// 	dialect: 'mariadb',
// 	dialectOptions: { decimalNumbers: true }
// });

const sequelize = new Sequelize('readr', 'readr', 'readr', {
	host: 'localhost',
	port: 3306,
	dialect: 'mysql',
	dialectOptions: { decimalNumbers: true }
});

sequelize
.authenticate()
.then(() => {
    console.log('Connection has been established successfully.');
}) 
.catch(err => {
    console.error('Unable to connect to the database:', err);
});

// this object will contain the model objects
// each key being the model's name
const db = {};

// read the files of the current directory
fs.readdirSync(__dirname)
.filter((filename) => filename !== 'index.js') // avoid this file
.forEach((filename) => {
	const model = require('./' + filename)(sequelize); // get the model definition
	db[model.name] = model; // add the entry in the db object
});

// go through each entry of the db object
Object.keys(db).forEach((modelName) => {
	// call the "associate" function on the model object
	// and pass it the db object (so that it can have access to other models)
	db[modelName].associate(db);
});

// sync the DB
sequelize.sync();

// expose the db object
module.exports = db;