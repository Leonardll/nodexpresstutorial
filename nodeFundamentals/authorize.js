const authorize = (req,res,next) => {
    const {user} = req.query
    user === 'john' ? req.user = { name:'john',id:3} && next() : res.status(401).send('unauthenticated user')

    console.log('authorize')
    next()
}

module.exports = authorize