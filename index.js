require('dotenv').config();

const port = process.env.PORT || 3000;

const express = require('express');
const bodyParser = require('body-parser');

const log = require('./log.js');
const bot = require('./bot');

const groceryService = require('./services/grocery-service.js');
const app = express();

// You must use a body parser for JSON before mounting the adapter
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/groceries', async (req, res) => {
    let text = req.body.text;

    await groceryService.add({
        name: "Test Grocery 1",
        amount: 2
    });

    await groceryService.add({
        name: "Test Grocery 2",
        amount: 2
    });

    const allGrcoeries = await groceryService.findAll();
    log.info('All grocceries {}', allGrcoeries);

    bot.handle('foo');

   bot.handle('list bla');

    //bot.handle('add Cola 2');

//    bot.handle('help');

    res.send("Hello world");
});

app.post('/groceries', (req, res) => {
    const input = req.body.text;
});

const server = app.listen(port, () => {
    log.info('Express server listening on port %d', port);
});