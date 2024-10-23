const express= require('express')
const route = express.Router()
const userControl= require('../Controllers/userController')
const connction = require('../Configurations/db')

connction()

route.post('/register', userControl.registerUser)
route.get('/getallusers',userControl.getAllUsers)
route.delete('/:id',userControl.deleteUser)
route.patch('/update/:id',userControl.updateUser)
route.get('/users/:id',userControl.getUserById)
module.exports = route