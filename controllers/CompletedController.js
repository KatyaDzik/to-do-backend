//для непосредственной работы с запросами и ответами
const taskService = require('../services/taskService')
const Task = require("../models/Task/Task")
const InProgressList = require('../models/InProgressList/InProgressList')
const CompletedList = require('../models/CompletedList/CompletedList')
const completedService = require('../services/CompletedService')
class CompletedController{

    async addComplTask(req, res){
        try {
            //получаем айди таски, которую нужно удалить из прогресса и добавить в комплитед
            const {taskId}=req.body
            const task = await Task.findOne({_id: taskId});

            //получаем задачи, которые завершенные
            const Completedid = '625891a12f82444b1216a147';
            const completedList=await CompletedList.findOne({_id: Completedid})

            //получаем задачи, которые в прогрессе
            const id = '62540d33f714ed2fae8c5fc7';
            const inProglist=await InProgressList.findOne({_id: id})
            const deltask = inProglist.tasks.indexOf(taskId);

            completedList.tasks.push(task)
            inProglist.tasks.splice(deltask,1)

            await completedList.save();
            await inProglist.save();
            return res.json(completedList)

        } catch (e){
            console.log(e)
            return res.status(400).json(e)
        }
    }

   async getComplTasks(req, res){
        try{
            const Completedid = '625891a12f82444b1216a147';
            return res.json(await CompletedList.findOne({_id: Completedid}))
        }catch (e){
            console.log(e)
            return res.status(500).json({message: "Can not get tasks"})
        }
    }

}

module.exports = new CompletedController()