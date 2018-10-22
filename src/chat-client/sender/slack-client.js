const { RTMClient } = require('@slack/client');

const rtm = new RTMClient(token);
rtm.start();

// The RTM client can send simple string messages
rtm.sendMessage('Hello there', conversationId)
    .then((res) => {
        // `res` contains information about the posted message
        console.log('Message sent: ', res.ts);
    })
    .catch(console.error);

