import express from 'express'
import userController from '../controllers/user.controller.js'

const route = express.Router()

route.get('/', userController.getAll)

route.get('/:id', userController.getId)

route.post('/', userController.post)

route.patch('/:id',userController.patch)

export default route