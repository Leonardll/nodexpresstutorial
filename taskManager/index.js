const express = require('express');
const tasks = require('./routes/task')
const connectDB = require('./db/connect')
require('dotenv').config()
const app = express();

//middleware
app.use(express.json())
app.use(express.static('./public'))

//routes


app.use('/api/v1/tasks', tasks)
 // get all tasks
//app.get('/api/v1/tasks',)
//create new task
//  app.post('/api/v1/tasks')
//  app.get('/api/v1/tasks/:id')
//  app.patch('/api/v1/tasks/:id')
//  app.delete('/api/v1/tasks?/:id')

const port = 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening port ${port}...`))
    } catch (error) {
        console.error(error);
    }
}

start()