const express = require('express');
const tasks = require('./routes/task')
const connectDB = require('./db/connect')
const notFound = require('./middleware/notFound')
const errorHandlerMiddleWare = require('./middleware/errorHandler')

require('dotenv').config()

const app = express();

//middleware
app.use(express.json())
app.use(express.static('./public'))

//routes


app.use('/api/v1/tasks', tasks)

app.use(notFound)
app.use(errorHandlerMiddleWare)

const port = process.env.PORT || 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening port ${port}...`))
    } catch (error) {
        console.error(error);
    }
}

start()