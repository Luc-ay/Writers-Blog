import express from 'express'
import { profile, profileUpdate } from '../controller/user.controller.js'
import { authorMiddleware } from '../middlewares/auth.middleware.js'
const router = express.Router()

// routes
router.get('/:id', authorMiddleware, profile)
router.patch('/:id', authorMiddleware, profileUpdate)

export default router
 