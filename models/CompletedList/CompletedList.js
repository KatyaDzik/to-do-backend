const {Schema, model, ObjectId}=require("mongoose") //экспортируем {Schema, model} из пакета  монгус

//Создадим схему в которой будет храниться информация о полях сущности
const CompletedList = new Schema({
    tasks: [{type: ObjectId, ref: "Task"}]
})

module.exports = model('CompletedList', CompletedList)