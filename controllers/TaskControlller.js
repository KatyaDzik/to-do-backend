//для непосредственной работы с запросами и ответами
const taskService = require('../services/taskService')
const Task = require("../models/Task/Task")

class TaskController{

    async getTask(req, res){
        try{
            const task = await Task.find({_id: req.query.id})
            return res.json(task)
        }catch (e){
            console.log(e)
            return res.status(500).json({message: "Can not get task"})
        }
    }
}
module.exports = new TaskController()