import express from 'express'
import userController from '../controllers/user.controller.js'
import middlewares from '../middlewares/global.middlewares.js'

const route = express.Router()

route.get('/', userController.getAll)

route.get('/:id', middlewares.validId, middlewares.validUser, userController.getId)

route.post('/', userController.post)

route.patch('/:id', middlewares.validId, middlewares.validUser, userController.patch)

export default route