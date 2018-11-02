const Chat = require('./slack-chat');
const MessageBuilder = require('./slack-message-builder');

module.exports = {
    createChatClient: () => new Chat(),
    createMessageBuilder: () => new MessageBuilder()
};