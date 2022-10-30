const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    email: { type: String, require: true },
    password: String
})
const UserModel = mongoose.model("user", userSchema)
module.exports = { UserModel }