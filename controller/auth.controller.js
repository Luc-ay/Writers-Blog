import Author from '../models/author.model.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const registerController = async (req, res) => {
  try {
    const { email, password, fullName } = req.body
    if (!email || !password || !fullName) {
      return res.status(500).json({ Msg: 'All field are required' })
    }

    // Check if user exist in Database
    const existingUser = await Author.findOne({ email })
    if (existingUser) {
      return res.status(409).json({ Msg: 'User already exist' })
    }

    // Hash password
    const saltRound = bcrypt.genSaltSync(10)
    const hashedPassword = bcrypt.hash(password, saltRound)

    const user = new Author({
      fullName,
      email,
      password: hashedPassword,
    })
    await user.save()

    password = undefined

    res.status(201).json({
      Message: 'Signup Successful',
      user,
    })
  } catch (error) {
    res.status(500).json({
      Success: false,
      Message: 'error in signup API',
      error: error.message,
    })
  }
}

export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body
    if (!email || !password) {
      return res.status(500).json({ Mgs: 'All field are required' })
    }

    const user = await Author.findOne({ email })
    if (!check) {
      return res.status(404).json({ Msg: 'User not Found' })
    }

    // compare password
    const isMAtch = await bcrypt.compare(password, user.password)
    if (!isMAtch) {
      return res.status(500).json({ Msg: 'Invalid Credentials' })
    }

    const token = await jwt.sign({ id: user._id }, proccess.env.JWT_SECRET)
    user.pasword = undefined
    res.status(200).json(token, user)
  } catch (error) {
    res.status(500).json({
      Success: false,
      Message: 'error in logins API',
      error: error.message,
    })
  }
}
