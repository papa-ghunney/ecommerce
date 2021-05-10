const expressAsyncHandler = require('express-async-handler')
const mongoose = require('mongoose')
const userRouter = require('../routes/userRoutes')


const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false, required: true }
}, {
    timestamps: true
})



module.exports = mongoose.model('User', userSchema)
