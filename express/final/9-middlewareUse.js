const express = require('express');

const app = express();

const logger = require('./logger')
const authorize = require('./authorize')

//req => middleware => res

// 1. use vs route
// 2. options - our own / express / 3rd party

//app.use([logger,authorize])
app.use(express.static('./public'))


app.get('/', (req,res) => {
    res.send(`<h1>Home </h1>`)
})

 app.get('/about', (req,res) => { 
    //console.log('user hit the about page');
    res.send(`<h1>About</h1>`)
 })
 app.get('/api/items',[logger,authorize], (req,res) => { 
    console.log(req.user);
    res.send(`<h1>Items</h1>`)
 })
 app.get('/api/products', (req,res) => { 
    //console.log('user hit the about page');
    res.send(`<h1>About</h1>`)
 })

app.listen(5000, () => {
    console.log('server is listening on port 5000...');
})