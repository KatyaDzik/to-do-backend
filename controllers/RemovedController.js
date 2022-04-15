//для непосредственной работы с запросами и ответами
const Task = require("../models/Task/Task")
const InProgressList = require('../models/InProgressList/InProgressList')
const RemovedList= require('../models/RemovedList/RemovedList')

class RemovedController{

    async addRemovedTask(req, res){
        try {
            //получаем айди таски, которую нужно удалить из прогресса и добавить в комплитед
            const {taskId}=req.body
            const task = await Task.findOne({_id: taskId});

            //получаем задачи, которые удалены
            const Removedid = '6259080e7c0bd224b8f06621';
            const removedList=await RemovedList.findOne({_id: Removedid})

            //получаем задачи, которые в прогрессе
            const id = '62540d33f714ed2fae8c5fc7';
            const inProglist=await InProgressList.findOne({_id: id})
            const deltask = inProglist.tasks.indexOf(taskId);

            removedList.tasks.push(task)
            inProglist.tasks.splice(deltask,1)

            await removedList.save();
            await inProglist.save();
            return res.json(removedList)

        } catch (e){
            console.log(e)
            return res.status(400).json(e)
        }
    }

    async getRemovTasks(req, res){
        try{
            const Removedid = '6259080e7c0bd224b8f06621';
            return res.json(await RemovedList.findOne({_id: Removedid}))
        }catch (e){
            console.log(e)
            return res.status(500).json({message: "Can not get tasks"})
        }
    }

    async deleteRemovedTask(req, res){
        try {
            //получаем айди таски, которую нужно удалить из прогресса и добавить в комплитед
            const {taskId}=req.body
            const task = await Task.findOne({_id: taskId});

            //получаем задачи, которые удалены
            const Removedid = '6259080e7c0bd224b8f06621';
            const removedList=await RemovedList.findOne({_id: Removedid})

            const deltask = removedList.tasks.indexOf(taskId);
            removedList.tasks.splice(deltask,1)

            await removedList.save();
           // await task.remove()
            return res.json(removedList)

        } catch (e){
            console.log(e)
            return res.status(400).json(e)
        }
    }

}

module.exports = new RemovedController()