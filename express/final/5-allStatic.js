

const express = require('express');
const path = require('path')

const app = express();

//setup static and middleware
app.use(express.static('./express/navbarApp/public'))



app.all('*', (req, res) => { 
    res.status(404).send(`<h1> Resource not found</h1>`)
 })

app.listen(5000, () => {
    console.log('server is listening on port 5000...');
})