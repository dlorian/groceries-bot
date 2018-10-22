require('dotenv').config();

const program = require('commander');

const pkg = require('../../package.json');

program
    .version(pkg.version)
    .description('CLI for Gracy')
    .command('list', 'Lists groceries')
    .command('add <grocery>', 'Add new grocery to the list')
    .command('register <username>', 'Register a user to the Gracy')
    .command('chat <recipient> <message>', 'Sends a message to the recipient')
    

const exec = () => {
    return new Promise((resolve, reject) => {
        const result = program.parse(process.argv);
        resolve(result);
    });
};

exec();