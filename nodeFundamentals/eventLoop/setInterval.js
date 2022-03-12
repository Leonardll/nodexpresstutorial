const http = require('http')

const server = http.createServer((req,res) => { 
    console.log('request event')
    res.end('Hello World')
 })
setInterval(() => {
    console.log('hello world')
}, 2000);

console.log('i will run first');

