const express = require('express')
const router = express.Router()
const userCtrl = require('../controllers/user.controllers')

router.get('/get-users', userCtrl.getUser)
router.post('/add-new-user',userCtrl.addUser)

router.put('/update-user/:id',userCtrl.updateUser)
router.delete('/delete-user/:id',userCtrl.deleteUser)


module.exports = router