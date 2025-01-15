const express = require('express')
const router = express.Router()
const {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost,
} = require('../controllers/post.controller')

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
