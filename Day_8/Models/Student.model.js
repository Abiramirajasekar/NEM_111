const mongoose = require("mongoose")
const studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    course: String
})
const Student = mongoose.model("student", studentSchema)
module.exports = { Student }