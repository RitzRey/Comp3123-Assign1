const mongoose = require('mongoose')

const employeeSchema = new mongoose.Schema({
    employee:{
        type: String,
        required: true,
        lowercased: true
    },
    eid: {
        type: Number,
        required: true,
        unique: true
    }
})


module.exports = mongoose.model("employee", employeeSchema)