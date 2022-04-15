//для бизнес логики
const Task = require('../models/CompletedList/CompletedList')

const config=require('config')

class CompletedService{
    createComplList(complList){
        return new Promise(((resolve, reject)=>{
            try {
                return resolve({message:"list was created"})
            }catch (e){
                return reject({message:"list error"})
            }
        }))
    }
}

module.exports= new CompletedService()