const log = require('../../log.js');
const command = require('./command.js');
const chatClient = require('../chat-client');

module.exports = class GroceryBot {
    constructor(service, chat) {
        this.bot = command.init(service);
        this.chat = chat;

        this.bot.showHelpOnEmpty(true);
        this.bot.setSend((meta, message) => this._send(meta, message));
        this.bot.on('*', (parsed, metadata) => this._help());
    }

    _help() {
        log.info('You used an unknown command. Please use one of these ' + this.bot.help());
        this._send('You used an unknown command. Please use one of these ' + this.bot.help());
    }

    _send(meta, message) {
        log.info(message);
        this.chat.send(message);
    }

    handle(input) {
        console.log(`Handling input: ${input}`);
        this.bot.parse(input);
    }
};