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
    trim: true,
    required: true,
  },
  profilePicture: {
    type: String,
    required: true,
    default: '',
  },
})

const Author = mongoose.model('Author', authorSchema)

export default Author
