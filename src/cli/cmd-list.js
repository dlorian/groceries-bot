const program = require("commander");

const groceryService = require("../services/grocery-service");

const exec = async () => {
  program.parse(process.argv);
  return await groceryService.findAll();
};

exec()
  .then(groceries => {
    console.log(`Found ${groceries.length} groceries`);
    groceries.forEach(grocery => console.log(`-> ${grocery}`))
  })
  .catch(err => console.error(`Error while listing groceries`, err));
