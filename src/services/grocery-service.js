const dao = require('./../dao').init('groceries');

const Grocery = require('../models/grocery.js');

const _createGrocery = (data) => new Grocery(data);

const findAll = async function () {
    const groceries = await dao.findAll();
    return groceries.map(el => _createGrocery(el));
};

const findById = async function (id) {
    return dao.findById(id);
};

const add = async function (data) {
    const grocery = _createGrocery(data);
    return dao.persist(grocery);
};

const deleteById = async function (id) {
    return dao.deleteById(id);
};

module.exports = { findAll, findById, add, deleteById };