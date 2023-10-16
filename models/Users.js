const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        lowercased: true,
        unique: true
    },
    email: {
        type: String,
        maxlength: 50,
        unique: true
    },
    password: {
        type: String,
        maxlength: 50
    }

})

// exports as mongoose model for user using userSchema
module.exports = mongoose.model("user", userSchema)