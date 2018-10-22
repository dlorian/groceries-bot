const program = require("commander");

const userService = require("../services/user-service");

program
  .option("-f, --firstName", "Firstname of the user")
  .option("-l, --lastName", "Lastname of the user");

const exec = async () => {
  program.parse(process.argv);

  const args = {
    userName: program.args[0],
    firstName: program.firstName || "",
    lastName: program.lastName || ""
  };

  if (!args.userName) {
    throw new Error("No username defined.");
  }

  return await userService.create(args);
};

exec()
  .then(user => console.log(`${user} created`))
  .catch(err => console.error(`Error while registering user ${args.userName}`, err));
