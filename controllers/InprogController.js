//для непосредственной работы с запросами и ответами
const taskService = require('../services/taskService')
const Task = require("../models/Task/Task")
const InProgressList = require('../models/InProgressList/InProgressList')
const CompletedList = require("../models/CompletedList/CompletedList");
const RemovedList = require("../models/RemovedList/RemovedList");

class InprogController{

    async createInprogresTask(req, res){
        try {
            const {title}=req.body
            const task = new Task({title})

            var id = '62540d33f714ed2fae8c5fc7';
            const inProglist=await InProgressList.findOne({_id: id})

            await taskService.createTask(task)
            inProglist.tasks.push(task)
            await inProglist.save();
            await task.save()
            return res.json(task)
        } catch (e){
            console.log(e)
            return res.state(400).json(e)
        }
    }

    async addInprogresTaskFromCompleted(req, res){
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

            const deltask = completedList.tasks.indexOf(taskId);

            inProglist.tasks.push(task)
            completedList.tasks.splice(deltask,1)

            await completedList.save();
            await inProglist.save();
            return res.json(completedList)

        } catch (e){
            console.log(e)
            return res.status(400).json(e)
        }
    }

    async addInprogresTaskFromRemoved(req, res){
        try {
            //получаем айди таски, которую нужно удалить из прогресса и добавить в комплитед
            const {taskId}=req.body
            const task = await Task.findOne({_id: taskId});
            //получаем задачи, которые завершенные
            const Removedid = '6259080e7c0bd224b8f06621';
            const removedList=await RemovedList.findOne({_id: Removedid})

            //получаем задачи, которые в прогрессе
            const id = '62540d33f714ed2fae8c5fc7';
            const inProglist=await InProgressList.findOne({_id: id})

            const deltask = removedList.tasks.indexOf(taskId);

            inProglist.tasks.push(task)
            removedList.tasks.splice(deltask,1)

            await removedList.save();
            await inProglist.save();
            return res.json(removedList)

        } catch (e){
            console.log(e)
            return res.status(400).json(e)
        }
    }

    async getTasks(req, res){
        try{
            var id = '62540d33f714ed2fae8c5fc7';
            //const data=await InProgressList.findOne({_id: id})
            return res.json(await InProgressList.findOne({_id: id}))
        }catch (e){
            console.log(e)
            return res.status(500).json({message: "Can not get tasks"})
        }
    }

}

module.exports = new InprogController()