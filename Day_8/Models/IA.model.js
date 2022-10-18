const mongoose = require("mongoose")
const  iaSchema = new mongoose.Schema({
    name: String,
    course: String
})
const IA = mongoose.model("ia",iaSchema)
module.exports={IA}