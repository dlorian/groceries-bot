const dao = require('./../dao');

const User = require('../models/user.js');

const findById = async function(id) {
    return dao.findById(id);
};

const create = async function(options) {
    const user = new User(options);
    return dao.persist(user);
};

module.exports = { findById, create };