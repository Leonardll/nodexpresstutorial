const express = require('express');
const path = require('path');
const { resourceLimits } = require('worker_threads');
const { products } = require('./data')
const app = express();


app.get('/',(req,res) => { 
    res.send(`<h1>Home page</h1><a href="/api/products">products</a>`)
 })
//get all products
app.get('/api/products', (req,res) => { 
     const newProducts = products.map((product) => { 
         const {id, name, image} = product;
         return {id,name,image}
      })
     res.json(newProducts)
  })

// get 1 product  

app.get('/api/products/:productID',(req,res) => { 
    // console.log(req);
    // console.log(req.params);
    const { productID} = req.params;

    const singleProduct = products.find((product) => product.id === Number(productID))
    !singleProduct ?  res.status(404).send('product does not exist') : res.json(singleProduct)
 })

// get reviews

app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
    console.log(req.params)
    res.send('hello world')
})

app.get('/api/v1/query', (req, res) => { 
    const { search, limit } = req.query;
    let sortedProducts = [...products];

    if (search) {
        sortedProducts = sortedProducts.filter((product) => { 
            return product.name.startsWith(search)
         })
    }
    
    if(limit) {
        sortedProducts = sortedProducts.slice(0,Number(limit))
    }
    // sortedProducts.length < 1 ? res.status(200).send('no product match your description') : res.status(200).json(sortedProducts)
    sortedProducts.length < 1 ? res.status(200).json({success: true, data: []}) : res.status(200).json(sortedProducts)

    //res.send('hello world')
    
 })
 

app.all('*', (req, res) => { 
    res.status(400).send(`<h1> Resource not found</h1>`)
 })

app.listen(5000, () => {
    console.log('server is listening on port 5000...');
})