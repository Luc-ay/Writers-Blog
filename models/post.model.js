import mongoose from 'mongoose'

const postSchema = new mongoose.Schema({
    title:{
        type: String,
        required: [true, 'Title is required'],
        min: 5,
    },
    description:{
        type: String,
        required: true,
        min: 50,
    },
    authur:{
        type: mongoose.SchemaType.objectid,
        required: true,
    },
    picture: {
        type: String,
        required: true,
    },
},{timestamps: true},);

const Post = mongoose.model('Post', postSchema, 'post');

export default Post;