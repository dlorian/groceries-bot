const program = require('commander');

const chatClient = require('../chat-client');

program.parse(process.argv);

const args = {
  recipient: program.args[0],
  message: program.args[1]
};


if(!args.recipient) {
  console.log("No recipient defined");
  return;
}

if(!args.message) {
  console.log("No message defined");
  return;
}

chatClient
.createSlackClient()
.recipient(args.recipient)
.message(args.message)
.send();