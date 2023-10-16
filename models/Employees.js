const mongoose = require('mongoose')

const employeeSchema = new mongoose.Schema({
    first_name:{
        type: String,
        required: true,
        maxlength: 100
    },
    last_name:{
        type: String,
        required: true,
        maxlength: 50
    },
    email:{
        type: String,
        unique: true,
        maxlength: 50
    },
    gender:{
        type: String,
        maxlength: 25,
        enum: ["male","female","other"]

    },
    salary:{
        type: Number,
        required: true
    }
    
})

// exports as mongoose model for user using employeeSchema
module.exports = mongoose.model("employee", employeeSchema)