module.exports = class SlackChat {

    recipient(recipient) {
        this._recipient = recipient;
        return this;
    }

    message(message) {
        this._message = message;
        return this;
    }

    send() {
        console.log(`Send message '${this._message}' to recipient '${this._recipient}'`);
    }
}
