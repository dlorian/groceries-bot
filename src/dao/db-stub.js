const log = require('../../log.js');
const data = [];

const findAll = () => {
    log.info('find all data');
    return Promise.resolve(data);
};

const findById = (id) => {
    log.info(`find data by id:{}`, id);
    return Promise.reject(new Error('Not yet supported'));
};

const persist = (item) => {
    log.info(`persisting data:{}`, item);
    data.push(item);
    return Promise.resolve(item);
};

const deleteById = (id) => {
    log.info(`delete data with id:{}`, id);
    return Promise.reject(new Error('Not yet supported'));
};

module.exports = { findAll, findById, persist, deleteById };