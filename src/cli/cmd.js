const program = require('commander');

const log = require('../../log.js');
const pkg = require('../../package.json');

const userService = require('../services/user-service.js');
const groceryService = require('../services/grocery-service.js');

program
    .version(pkg.version)
    .description('CLI for Gracy')
    .command('list', 'Lists all groceries')
    .command('add <grocery> [amount]', 'Adds a grocery to the list [with amount]')
    .command('chat <recipient> <message>', 'Sends a message to the recipient')
    .command('register <user>', 'Registers a user within the Gracy')

const exec = () => {
    return new Promise((resolve, reject) => {
        const result = program.parse(process.argv);
        resolve(result);
    });
};


exec();

module.exports = { exec };
