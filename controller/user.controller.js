import bcrypt from 'bcrypt'
import Author from '../models/author.model.js'

export const profile = async (req, res) => {
  try {
    const { id: userId } = req.params
    const user = await Author.findById(userId)
    if (!user) {
      return res.status(404).json({ Msg: 'User not Found' })
    }
    user.password = undefined
    res.status(200).json(user)
  } catch (error) {
    res.status.json({
      Success: false,
      Message: 'Error in profile API',
      Error: error.message,
    })
  }
}

// Update Profile
export const profileUpdate = async (req, res) => {
  try {
    const { id: userId } = req.params
    const { fullName, oldPassword, newPassword, profilePicture } = req.params

    const user = await Author.findById(userId)
    if (!user) {
      return res.status(404).json({
        Success: false,
        Message: 'User Does not Exist',
      })
    }
    const isMatch = await bcrypt.compare(oldPassword, user.password)
    if (!isMatch) {
      return res.status(500).json({ Msg: 'Incorrect Old Password' })
    }
    if (newPassword) () => user.password
    if (fullName) () => user.fullName
    if (profilePicture) () => user.profilePicture

    await user.save()
  } catch (error) {
    res.status.json({
      Success: false,
      Message: 'Error in profile API',
      Error: error.message,
    })
  }
}
