const Router = require('express');
const router = new Router()
const RemovedController = require('../controllers/RemovedController')

router.post('', RemovedController.addRemovedTask)
router.get('',  RemovedController.getRemovTasks)
router.delete('', RemovedController.deleteRemovedTask)

module.exports=router