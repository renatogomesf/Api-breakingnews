import express from 'express'
import userController from '../controllers/user.controller.js'
import {validId, validUser} from '../middlewares/global.middlewares.js'

const route = express.Router()

route.get('/', userController.getAll)

route.get('/:id', validId, validUser, userController.getId)

route.post('/', userController.post)

route.patch('/:id', validId, validUser, userController.patch)

export default route