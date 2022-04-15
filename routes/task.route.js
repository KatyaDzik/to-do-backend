const Router = require('express');
const router = new Router()
const TaskController = require('../controllers/TaskControlller')

router.get('', TaskController.getTask)
module.exports=router