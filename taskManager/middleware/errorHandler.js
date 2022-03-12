const {CustomAPIError} = require('../errors/customError')
const errorHandlerMiddleWare = (err,req,res,next) => {
    console.log(err);
    err instanceof CustomAPIError ? res.status(err.statusCode).json({ msg: err.message }) : res.status(err.status).json({ msg: err.message })
}

module.exports = errorHandlerMiddleWare