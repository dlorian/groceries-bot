const bot = require('./command.js');

module.exports = {
    handle: (input) => bot.parse(input)
}