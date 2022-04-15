const Router = require('express');
const router = new Router()
const InprogController = require('../controllers/InprogController')

router.post('/new', InprogController.createInprogresTask)
router.post('', InprogController.addInprogresTaskFromCompleted)
router.post('/rem', InprogController.addInprogresTaskFromRemoved)
router.get('', InprogController.getTasks)

module.exports=router