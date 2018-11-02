const RestService = require('./src/rest-service.js');

const GroceryBot = require('./src/grocery-bot');

const groceryBot = new GroceryBot(new RestService('localhost', 3000, 'grocery'));

groceryBot.handle( process.argv.slice(2).join(' '));