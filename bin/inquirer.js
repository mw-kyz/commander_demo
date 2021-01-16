console.log('命令行已启动')
const program = require('commander')
const inquirer  = require('inquirer')

program.version('0.0.1', '-v, --version', 'output the current version');

program
  .option('--type <type...>','What do you like to drink? We have black-tea, green-tea, flower-tea, milk-tea and juice')
  .option('-n, --number <number...>', 'How much do you need?')
  .option('-s, --size <size...>', 'Select size: large, medium and small')
  .option('-S, --sugar <sugar...>', 'Select sugar content: less, normal and more')
  .action(function (list) {

  })

inquirer.prompt([ {
  type: 'checkbox', 
  name: 'type', 
  message: 'What do you like to drink?', 
  choices: ['black-tea', 'green-tea', 'milk-tea'], 
  default: ['black-tea']
}, {
  type: 'input', 
  name: 'number', 
  message: 'How much do you need?', 
  default: '1'
}, { 
  type: 'checkbox', 
  name: 'size', 
  message: 'Select size: large, medium and small', 
  choices: ['large', 'medium','small'],
  default: ['medium']
}, { 
  type: 'checkbox', 
  name: 'sugar', 
  message: 'Select sugar content: less, normal and more', 
  choices: ['less', 'normal','more'],
  default: ['normal'] 
}]).then((answers) => { 
  const type = answers.type,
      number = answers.number.split(' '),
      size = answers.size,
      sugar = answers.sugar;

  console.log('\nYour have ordered: \n');
  if(type && type.length > 0) {
    type.forEach((value, index) => {
      console.log(`${ number[index] } ${ size[index] } cups of ${ value } with ${ sugar[index] } sugar\n`)
    })
  }
})

program.parse(process.argv)