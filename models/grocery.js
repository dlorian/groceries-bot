
module.exports = class Grocery {
    constructor(name, amount) {
        this.name = name;
        this.amount = amount;
    }

    toString() {
        return `Grocery[${this.name}, ${this.amount}`;
    }
}