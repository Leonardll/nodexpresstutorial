const express = require('express')

const router = express.Router()



router.post('/', (req, res) => {
    const {name} = req.body
    name ? res.status(200).send(`Welcome ${name}`) : res.status(401).send('Please provide valide credential')
    res.send('POST')
})

module.exports = router