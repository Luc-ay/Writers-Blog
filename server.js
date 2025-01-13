import express from 'express'
// import dotenv from 'dotenv'
import mongoose from 'mongoose'
import authRoutes from './routes/auth.routes.js'
import userRoutes from './routes/user.routes.js'

// dotenv.config()
const app = express()

app.use(express.json())

// Routes
app.use('/auth', authRoutes)
app.use('/user', userRoutes)

const PORT = 5000

app.listen(PORT, async () => {
  console.log(`Server is running on port: ${PORT}`)
})
