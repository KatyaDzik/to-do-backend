//для бизнес логики
const Task = require('../models/CompletedList/CompletedList')

const config=require('config')

class RemovedService{
    createRemvList(removList){
        return new Promise(((resolve, reject)=>{
            try {
                return resolve({message:"list was created"})
            }catch (e){
                return reject({message:"list error"})
            }
        }))
    }
}

module.exports= new RemovedService()