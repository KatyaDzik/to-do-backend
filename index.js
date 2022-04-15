//я так понимаю это мы установили зависимости
const express = require("express")
const mongoose = require("mongoose")
const config = require("config")
const cors = require('cors')
//из экспрресса созданим сам сервер
const app = express()
app.use(cors())
const PORT = process.env.PORT || config.get('serverPort')

const taskroute=require('./routes/task.route')
const inprogRouter = require('./routes/inprog')
const complRouter=require('./routes/completed')
const removRouter = require('./routes/removed')
const {route} = require("express/lib/router");
app.use(express.json())
app.use("/api/inprog/tasks", inprogRouter)
app.use("/api/task", taskroute)
app.use("/api/completed/tasks",complRouter )
app.use("/api/removed/tasks",removRouter )

//функция которая будет подключаться к базе данных и запускать сервер
const start = async ()=>{
    try{
        await mongoose.connect(config.get("dbUrl"))
        app.listen(PORT, ()=>{
            console.log('Server start '+ PORT)
        })
    } catch (error){
            console.log(error);
    }
}

start()