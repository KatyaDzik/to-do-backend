const Router = require('express');
const router = new Router()
const CompletedController = require('../controllers/CompletedController')

router.post('', CompletedController.addComplTask)
router.get('',  CompletedController.getComplTasks)

module.exports=router