(async function () {
    const readline = require('readline');

    var N;
    const rl = readline.createInterface({ //initializing the console input
        input: process.stdin,
        output: process.stdout
    });

    await new Promise((resolve, reject) => { //waiting for the input N (heigth of the staircase)
        rl.question('Enter the height of the staircase: ', (ans) => {
            N = ans;
            resolve();
        })
    })

    for (let i = N; i > 0; i--) {
        char = "#";
        output = char.padStart(i);
        output += N - i > 0 ? char.padEnd(N - i, '#') : '';
        console.log(output);
    }
    rl.close(); //closing the console input stream
})();