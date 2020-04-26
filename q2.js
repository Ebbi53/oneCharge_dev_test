(async function () {
    const readline = require('readline');

    var List;
    const rl = readline.createInterface({ //initializing the console input
        input: process.stdin,
        output: process.stdout
    });

    await new Promise((resolve, reject) => { //waiting for the input List
        rl.question('Enter the List: ', (ans) => {
            List = ans;
            resolve();
        })
    })

    List = JSON.parse(List); //parsing the input

    index = (List.length + 1) % 2 == 0 ? (List.length + 1) / 2 - 1 : List.length / 2; //getting index of the middle element

    output = `Node ${List[index]} from this list (Serialization: [${List.slice(index).join()}])`; // generating the output

    console.log(output);

    rl.close(); //closing the console input stream
})();