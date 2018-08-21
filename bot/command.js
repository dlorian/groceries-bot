// Dependencies
const bot = require('bot-commander');

// Own dependencies
const log = require('../log.js');

const service = require('../services/grocery-service');

bot
    .command('list')
    .alias('ls')
    .description('List all groceries')
    .action(async meta => {
        const groceries = await service.findAll();
        bot.send(meta, `That are all groceries I could find: ${groceries}`);
    });

bot
    .command('add <name> [amount]')
    .alias('a')
    .description('Adds a grocery to the list [optional amount]')
    .action(async (meta, name, amount) => {
        await service.add({ name, amount });
        bot.send(meta, `You have called the add command with ${name} and ${amount}`);
    });

bot
    .setSend((meta, message) => {
        log.info(message);
    });


module.exports = bot;