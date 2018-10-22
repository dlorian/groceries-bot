const program = require("commander");

const groceryService = require("../services/grocery-service");

program.option("-a, --amount", "Required amount, default 1");

const exec = async () => {
  program.parse(process.argv);

  const args = {
    name: program.args[0],
    amount: program.amount || 1
  };

  if (!args.name) {
    throw new Error("No name defined.");
  }

  return await groceryService.add(args);
};

exec()
  .then(grocery => console.log(`Successfully added ${grocery}`))
  .catch(err => console.error(`Error while adding grocery`, err));
