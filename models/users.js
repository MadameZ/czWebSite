const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    society: String,
    gender: String,
    firstName: String,
    lastName: String,
    message: String, 
})

const userModel = mongoose.model('users', userSchema)

module.exports = userModel