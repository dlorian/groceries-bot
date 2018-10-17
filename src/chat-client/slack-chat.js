module.exports = class SlackChat {

    recipient(recipient) {
        this.recipient = recipient;
        return this;
    }

    message(message) {
        this.message = message;
        return this;
    }

    send() {
        console.log(`Send ${this.message} to ${this.recipient}`);
    }
}
