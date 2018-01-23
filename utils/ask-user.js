const readline = require('readline');

const rl = readline.createInterface(process.stdin, process.stdout);


function prompt(questions) {
  var curr = 0;
  var answers = [];
  return new Promise(function(resolve, reject) {
      rl.setPrompt(questions[curr] + ' ' );
      rl.prompt();
      rl.on('line', function (answer){
        answers.push(answer);
        curr += 1;
        
        if (curr === questions.length){
          rl.close();
          resolve(answers);
        } else {
          rl.setPrompt(questions[curr] + ' ' );
          rl.prompt();
        }
      });
  })
}
module.exports = prompt;
/*

readline-async works right, but fucks up accented characters


const readlineSync = require('./readline-sync.js');


function prompt(question) {
  return readlineSync.question(question, {encoding: 'utf8'});
}

module.exports = prompt;
*/

/*

// Trying to use promises and generators to make readline synchronous (NOT WORKING yet)

const readline = require('readline');

const rl = readline.createInterface(process.stdin, process.stdout);

function prompt (question) {
  rl.setPrompt(question + ': ');
  rl.prompt();

  const answerPromise = function () {
    return new Promise( function (resolve, reject) {
        rl.on('line', function (answer) {
          rl.close();
          if (answer) {
            resolve(answer);
          } else {
            reject('empty answer');
          }
        });
      }
    );
  };

  return gen(function *() {
    const value = yield answerPromise();
  });
  
}


function gen(generator) {
  const iterator = generator();
 
  function iterate(iteration) {
    if (iteration.done) {
      return iteration.value;
    }
    const promise = iteration.value;
    return promise.then( x => iterate(iterator.next()) );
  }

  return iterate( iterator.next() );
}

module.exports = prompt;

*/