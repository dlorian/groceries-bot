
const _formatMessage = message => message;

const _formatData = (data, dataFormatter) =>
  data.map(item => `=> ${dataFormatter(item)}\n`).join("");

module.exports = class SlackMessageBuilder {
  data(data, formatter) {
    this.data = data;
    this.formatter = formatter;
    return this;
  }

  message(message) {
    this.message = message;
    return this;
  }

  build() {
    return `${_formatMessage(this.message)}\n${_formatData(
      this.data,
      this.formatter
    )}`;
  }
};
