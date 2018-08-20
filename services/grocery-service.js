const dao = require('./../dao');

const findAll = async function(){
    return await dao.findAll();
};

const findById = async function(id) {
    return await dao.findById(id);
};

const add = async function(data) {
    return await dao.add(data);
};

const deleteById = async function(id) {
    return await dao.deleteById(id);
};

module.exports = {findAll, findById, add, deleteById};