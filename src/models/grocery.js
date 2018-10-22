
module.exports = class Grocery {
    constructor({ name, amount = 1, addedBy, addedAt }) {
        if(!name) {
            throw new Error('Name is required');
        }

        this.name = name;
        this.amount = amount;
        this.addedBy = addedBy;
        this.addedAt = addedAt || new Date().toISOString();
    }

    toString() {
        return `Grocery[${this.name}, ${this.amount}, ${this.addedBy}, ${this.addedAt}]`;
    }
}