const program = require('commander');

const slackChat = require('../chat-client').createSlackClient();

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

slackChat
.recipient(args.recipient)
.message(args.message)
.send();