import express from 'express'
const router = express.Router()
import {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost,
} from '../controller/post.controller.js'

// Create a new post
router.post('/', createPost)

// Get all posts
router.get('/', getAllPosts)

// Get a single post by ID
router.get('/:id', getPostById)

// Update a post by ID
router.put('/:id', updatePost)

// Delete a post by ID
router.delete('/:id', deletePost)

export default router
