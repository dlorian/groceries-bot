const command = require('./command.js');

const chatClient = require('../chat').createChatClient();

module.exports = class GroceryBot {
    constructor(service) {
        this.bot = command.init(service);

        this.bot.showHelpOnEmpty(true);
        this.bot.setSend((meta, message) => this._send(message));
        this.bot.on('*', (parsed, metadata) => this._help());
    }

    _help() {
        this._send('You used an unknown command. Please use one of these ' + this.bot.help());
    }

    _send(message) {
        chatClient.message(message).recipient('fdorau').send();
    }

    handle(input) {
        this.bot.parse(input);
    }
};