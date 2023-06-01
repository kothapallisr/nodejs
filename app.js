const readline = require("readline");
console.log("SaiSarath");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Please enter your name: ", (name) => {
  console.log("You entered: " +name);
  rl.close(0);
})

rl.on("close", () => {
  console.log("Interface closed");
  process.exit(0);
})