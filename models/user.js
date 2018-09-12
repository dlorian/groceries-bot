

module.exports = class User {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    toString() {
        return `User[${this.id}, ${this.name}]`;
    }
}