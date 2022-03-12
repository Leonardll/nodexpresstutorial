const express = require('express');
const app = express()
const router = express.Router()

const {getAlltask, createTask, getTask,updateTask,deleteTask} = require('../controllers/getAllTasks')
app.use(express.json())

router.route('/').get(getAlltask).post(createTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)

 module.exports = router

