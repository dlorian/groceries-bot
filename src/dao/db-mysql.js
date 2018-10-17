const Sequelize = require('sequelize');

const dbHost = process.env.DB_HOST;
const dbPort = process.env.DB_PORT;
const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER
const dbPass = process.env.DB_PASSWORD;

const sequelize = new Sequelize(dbName, dbUser, dbPass, {
  host: dbHost,
  dialect: 'mysql',
  port: dbPort
});


sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
    throw new Error(err);
  });

  const Grocery = sequelize.define('grocery', {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING
    },
    quantity: {
        type: Sequelize.INTEGER
    }
});

  Grocery.sync({force: true}).then(() => {
    // Table created
    return Grocery.create({
      name: 'Knife',
      quantity: 2
    });
  });

  Grocery.findAll().then(result => {
    console.log("Found this");  
    console.log(result)
  });

  const findAll = async () => {
    return Promise.reject(new Error('Not yet supported'));
};

const findById = async (id) => {
    return Promise.reject(new Error('Not yet supported'));
};

const add = async (grocery) => {
    return Promise.reject(new Error('Not yet supported'));
};

const deleteById = async (id) => {
    return Promise.reject(new Error('Not yet supported'));
};