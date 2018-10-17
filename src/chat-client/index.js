const useChatStub = process.env.USE_CHAT_STUB;

const SlachChat = require('./slack-chat');

const createSlackClient = () => {
    return new SlachChat();
}

module.exports = { createSlackClient }