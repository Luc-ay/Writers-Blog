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

export default router
