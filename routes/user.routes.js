import express from 'express'
import { changeAvatar, getAuthors, loginController, profile, profileUpdate, registerController } from '../controller/user.controller.js'


const router = express.Router()

// routes
router.post('/register', registerController)
router.post('/login', loginController)
router.get('/:id', profile)
router.patch('/edit-user/:id', profileUpdate)
router.patch('/change-avatar', changeAvatar)
router.patch('/', getAuthors)

export default router
 