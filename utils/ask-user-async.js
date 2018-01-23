const readline = require('readline');

const rl = readline.createInterface(process.stdin, process.stdout);

function prompt(question, callback) {
  rl.setPrompt(question + ': ');
  rl.prompt();
  rl.on('line', function(answer){
    console.log('---- readline finished ---- ');
    callback(answer);
    rl.close();
  })
}

module.exports = prompt;