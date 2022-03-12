const {readFile, writeFile} = require('fs').promises;

// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)


// getText('./content/first.txt','utf-8')
// .then((result) =>  console.log(result))
// .catch((err) => console.log(error))

const start = async() => {
    try {
        const first =  await readFile('./content/first.txt','utf-8')
        const second =  await readFile('./content/second.txt','utf-8')
        await writeFile('./content/resultMindGrenade.txt',` I love this shit! : ${first} ${second}`)
        console.log(first,second);
    } catch (error) {
        console.log(error);
    }
    
}

start()

// const getText = (path) => {
//     return new Promise((resolve,reject) => { 
//         readFile(path, 'utf-8', (err,data) => {
//             if (err) {
//                 reject(err)
//                 return
//             } else {
//                 resolve(data);
//             }
        
        
        
//         })
//      })
// }