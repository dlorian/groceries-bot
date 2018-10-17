const dao = require('./../dao');

const User = require('../models/user.js');

const findById = async function(id) {
    return dao.findById(id);
};

const add = async function(data) {
    return dao.add(data);
};

module.exports = { findById, add };