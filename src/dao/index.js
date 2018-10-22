const DBStub = require("./db-stub");
const dbSql = null;//require("./db-mysql");

const useDbStub = process.env.USE_DB_STUB;

const createDBClient = (collection) => {
    if(useDbStub) {
        return new DBStub(collection);
    } 
    return dbSql;
};

module.exports = {
    init: (collection) => createDBClient(collection)
};