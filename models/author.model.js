import mongoose from 'mongoose'

const authorSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: [true, 'EMail is required'],
    trim: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    min: [6, 'Password should be atleast 6 characters']
  },
  avatar: {
    type: String,
    default: '',
  },
  post: {
    type: Number,
    default: 0,
  },
}, {timestamps: true})

const Author = mongoose.model('Author', authorSchema)

export default Author
