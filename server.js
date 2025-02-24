import express from 'express'
import dotenv from 'dotenv'
import connect from 'mongoose'
import cors from 'cors'
import userRoutes from './routes/user.routes.js'
import postRoutes from './routes/post.routes.js'
import {notFound, errorMiddleware} from './middlewares/error.middleware.js'

dotenv.config()
const app = express()

app.use(express.json())
app.use(express.urlencoded)
app.use(cors())

// Routes
app.use('/api/user', userRoutes)
app.use('/api/post', postRoutes)

app.use(notFound)
app.use(errorMiddleware)

const PORT = process.env.PORT || 5000

connect(process.env.MONGO_URI).then(app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`)))