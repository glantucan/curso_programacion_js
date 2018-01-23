const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,   
    output: process.stdout 
});  

function readLineAsync(message) {
    return new Promise((resolve, reject) => {
        rl.question(message, (answer) => {
            resolve(answer);
        });
    }); 
}  // Leverages Node.js' awesome async/await functionality 

async function demoSynchronousPrompt() {
    var promptInput = await readLineAsync("Give me some input >");
    console.log("Won't be executed until promptInput is received", promptInput);   
    rl.close(); 
}

demoSynchronousPrompt();
