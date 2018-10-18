const dbStub = require("./db-stub");
const dbSql = null;//require("./db-mysql");

const useDbStub = process.env.USE_DB_STUB;

const db = () => {
    if(useDbStub) {
        console.log("Using DB stub");
        return dbStub;
    } 
    return dbSql;
};

module.exports = {
    persist: (data) =>  db().persist(data),
    findAll: () =>  db().findAll(),
    findById: (id) =>  db().findById(id),
    deleteById: (id) =>  db().deleteById(id)
};
