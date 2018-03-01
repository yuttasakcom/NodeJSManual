const exec = require("child_process").exec;

exec("ls", (err, stdout) => {
  if (err) return err;

  console.log(stdout);
});
