const dao = require('./../dao');

const Grocery = require('../models/grocery.js');

const findAll = async function(){
    return dao.findAll();
};

const findById = async function(id) {
    return dao.findById(id);
};

const add = async function(data) {
    return dao.add(data);
};

const deleteById = async function(id) {
    return dao.deleteById(id);
};

module.exports = {findAll, findById, add, deleteById};