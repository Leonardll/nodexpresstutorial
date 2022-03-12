const { readFile } = require('fs');

console.log('started a first task');
//check file path
readFile('./content/first.txt', 'utf-8', (err,result) => { 
    if (err) {
        console.log(err)
        return;
    }
    console.log(result)
    console.log('first task complete');
 })

 console.log('starting new task');