const mongoose = require("mongoose")


const conn = await mongoose.connect("mongodb://127.0.0.1:27017/data")

const StudentModel = mongoose.model("student", mongoose.Schema({
    name: String,
    age: Number,
    course: String

}))
module.exports = { conn, StudentModel }