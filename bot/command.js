// Dependencies
const bot = require('bot-commander');

// Own dependencies
const log = require('../log.js');

const service = require('../services/grocery-service');

bot
    .command('list')
    .description('This list all know groceries')
    .action(async meta => {
        const groceries = await service.findAll();
        bot.send(meta, `That are all groceries I could find: ${groceries}`);
    });

bot
    .command('add <name> [amount]')
    .description('This will adds a new grocery to the list [with optional amount]')
    .action(async (meta, name, amount) => {
        await service.add({ name, amount });
        bot.send(meta, `You have called the add command with ${name} and ${amount}`);
    });

bot
    .command('help')
    .action(meta => {
        let message = bot.help() + '\n Show examples under the main help';
        bot.send(meta, message);
    });

module.exports = bot;