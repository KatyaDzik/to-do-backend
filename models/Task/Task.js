const {Schema, model}=require("mongoose") //экспортируем {Schema, model} из пакета  монгус


//Создадим схему в которой будет храниться информация о полях сущности
const Task = new Schema({
    title:{type:String, required: true, unique: false },
    //tasks: [{type: ObjectId,ref: ""}]
})

module.exports = model('Task', Task)