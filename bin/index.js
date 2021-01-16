#!/usr/bin/env node

const program = require("commander");

program.version("0.0.1", "-v, --version", "output the current version");

function collect(value, previous) {
  return previous.concat([value]);
}

program
  .option(
    "--type <type...>",
    "What do you like to drink? We have black-tea, green-tea, flower-tea, milk-tea and juice",
    ['black-tea']
  )
  .option("-n, --number <number...>", "How much do you need?", [1])
  .option("-s, --size <size...>", "Select size: large, medium and small", ['medium'])
  .option(
    "-S, --sugar <sugar...>",
    "Select sugar content: less, normal and more",
    ['normal']
  )

  .action(function (list) {
    const type = list.type,
      number = list.number,
      size = list.size,
      sugar = list.sugar;

    console.log("\nYour have ordered: \n");

    if(type && type.length > 0) {
      type.forEach((value, index) => {
        console.log(
          `${number[index]} ${size[index]} cups of ${value} with ${sugar[index]} sugar\n`
        );
      });
    }
  });

program.on("--help", () => {
  console.log("\nFor example:");
  console.log("order --type black-tea -n 3 -s medium -S less\n");
});

program.parse(process.argv);
