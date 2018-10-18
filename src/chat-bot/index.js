
const log = require('../log.js');

const chatClient = require('../chat-client');

const bot = require('./command.js');

bot.showHelpOnEmpty(true);

bot.setSend((meta, message) => {
    log.info(message);
    chatClient.send(message);
});

bot.on('*', (parsed, metadata)=> {
    log.info('You used an unknown command. Please use one of these ' + bot.help());
    chatClient.send('You used an unknown command. Please use one of these ' + bot.help());
})

module.exports = {
    handle: (input) => {
        log.info(`Handling input: ${input}`);
        bot.parse(input);
    }
}