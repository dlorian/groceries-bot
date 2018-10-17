const log = require('../../log.js');
const data = [];

const findAll = async () => {
    log.info('find all data');
    return Promise.resolve(data);
};

const findById = async (id) => {
    log.info(`find data by id:{}`, id);
    return Promise.reject(new Error('Not yet supported'));
};

const add = async (item) => {
    log.info(`adding data:{}`, item);
    data.push(item);
    return Promise.resolve(item);
};

const deleteById = async (id) => {
    log.info(`delete data with id:{}`, id);
    return Promise.reject(new Error('Not yet supported'));
};

module.exports = { findAll, findById, add, deleteById };