
(async function() {
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,   
        output: process.stdout 
    });  

    function prompt(message) {
        return new Promise((resolve, reject) => {
            rl.question(message, (answer) => {
                resolve(answer);
            });
        }); 
    }  

    var answer = await prompt("What do you have to say? ");
    console.log("\nYou answered: \n" + answer);
    rl.close(); 
})();

