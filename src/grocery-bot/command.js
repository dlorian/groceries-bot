const bot = require('bot-commander');

const init = (service) => {
    bot
        .command('list')
        .description('Lists all groceries')
        .action(async meta => {
            try {
                const response = await service.findAll();
                bot.send(meta, `That are all groceries I could find: ${response.body}`);
            } catch(err) {
                console.error(err);
            }
        });

    bot
        .command('get <id>')
        .description('Load a grocery by the given id')
        .action(async (meta, id) => {
            try {
                const response = await service.findById(id);
                bot.send(meta, `That are all groceries I could find: ${response.body}`);
            } catch(err) {
                console.error(err);
            }
        });

    bot
        .command('add <grocery> [amount]')
        .description('This will adds a grocery to the list [with amount]')
        .action(async (meta, name, amount) => {
            const response = await service.create({ name, amount });
            bot.send(meta, `You have called the add command with ${response.body.name} and ${response.body.amount}`);
        });

    bot
        .command('help')
        .action(meta => {
            let message = bot.help() + '\n Show examples under the main help';
            bot.send(meta, message);
        });

    return bot;
}


module.exports = { init };