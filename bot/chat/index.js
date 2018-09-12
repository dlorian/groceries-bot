const useChatStub = process.env.USE_CHAT_STUB;

const chat = () => {
    return useChatStub ? dbStub : dbSql;
};

module.exports = { send: (message) => chat().send(message) }