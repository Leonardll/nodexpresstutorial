const http = require('http');
const {readFileSync} = require('fs')

//get all files

const homePage = readFileSync('./navbarApp/index.html')
const homeStyles = readFileSync('./navbarApp/styles.css')
const homeImage = readFileSync('./navbarApp/logo.svg')
const homeLogic = readFileSync('./navbarApp/browserApp.js')
const server = http.createServer((request, res) => { 
   const url = request.url;
   console.log(url);
    if ( url === '/') {
        res.writeHead(200, {
            'content-type': 'text/html'
        });
        res.write(homePage);
        res.end();
    //about
    } else if (url === '/about'){
        res.writeHead(200, {
            'content-type' : 'text/html'
        });
        res.write(`<h1>about page</h1>`);
        res.end();
    } 
    //styles
    else if (url === '/styles.css'){
        res.writeHead(200, {
            'content-type' : 'text/css'
        });
        res.write(homeStyles);
        res.end();
    } 
    // image/logo
    else if (url === '/logo.svg'){
        res.writeHead(200, {
            'content-type' : 'image/svg+xml'
        });
        res.write(homeImage);
        res.end();
    } 
    else if (url === '/browserApp.js'){
        res.writeHead(200, {
            'content-type' : 'text/javascript'
        });
        res.write(homeLogic);
        res.end();
    } 
    else {
        res.writeHead(400, { 
            'content-type' : 'text/html'
        });
        res.write(`<h1>not found</h1>`);
        res.end();
    }

    
 })

 server.listen(5000)