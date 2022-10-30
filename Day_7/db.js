const mongoose = require("mongoose")


const conn = mongoose.connect("mongodb://127.0.0.1:27017/new")

const StudentModel = mongoose.model("student", mongoose.Schema({
    name: String,
    age: Number,
    course: String

}))
module.exports = { conn, StudentModel }