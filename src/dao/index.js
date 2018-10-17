const dbStub = require("./db-stub");
const dbSql = null;//require("./db-mysql");

const useDbStub = process.env.USE_DB_STUB;

const db = () => {
    return useDbStub ? dbStub : dbSql;
};

module.exports = {
    add: (data) =>  db().add(data),
    findAll: () =>  db().findAll(),
    findById: (id) =>  db().findById(id),
    deleteById: (id) =>  db().deleteById(id)
};
