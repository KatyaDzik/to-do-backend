//для бизнес логики
const Task = require('../models/Task/Task')

const config=require('config')

class TaskService{
    createTask(task){
        return new Promise(((resolve, reject)=>{
            try {
                return resolve({message:"task was created"})
            }catch (e){
                return reject({message:"Task error"})
            }
        }))
    }
}
module.exports= new TaskService()