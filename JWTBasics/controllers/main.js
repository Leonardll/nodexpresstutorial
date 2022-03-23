//check username, password in post(login) request
//if exist create new JWT
// send back to front end

//set up authentication so only the request with JWT can access the dashboard
const jwt = require('jsonwebtoken')
const {BadRequestError} = require('../errors')

const login = async (req, res) => {
    const {username, password} = req.body
    if (!username || !password ) { throw new BadRequestError('please provide email and password')
}
// Just for demo, normally provided by DB!!
const id = new Date().getDate()

// try to keep payload small, better experience for user
const token = jwt.sign({id,username},process.env.JWT_Secret,{expiresIn:'30d'})
    console.log(username,password);
    res.status(200).json({msg:'user created',token})
    //mongoose
    //Joi
    // check in the controllers
    //res.send('Fake Login/Register/Signup Route')
}

const dashboard = async (req,res) => {

    console.log(req.user);

    const luckyNumber = Math.floor(Math.random()*100)
    
    res.status(200).json({
        msg:`Hello, ${req.user.username}`, 
        secret:`Here is your authorized data, your lucky number is ${luckyNumber} `
    })  
}

module.exports = {login, dashboard}