require('dotenv').config();

const port = process.env.PORT || 3000;

const express = require('express');
const bodyParser = require('body-parser');

const log = require('./log.js');
const routes = require('./routes.js');

const slackChat = require('./src/chat-client').createSlackClient();
const GroceryService = require('./src/services/grocery-service.js');

const GroceryBot = require('./src/grocery-bot');
const groceryBot = new GroceryBot(groceryService, slackChat);