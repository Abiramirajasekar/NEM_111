const mongoose = require("mongoose")

const main = async () => {
    try {
        const conn = await mongoose.connect("mongodb://127.0.0.1:27017/data")
        console.log("Connected")
        // await StudentModel.insertMany([{ name: "Abirami", age: 25, course: "NEM_111" }])
        const result = await StudentModel.find()
        console.log(result)
        conn.disconnect
    }
    catch (err) {
        console.log(err)
    }

}
main()

const StudentModel = mongoose.model("student", mongoose.Schema({
    name: String,
    age: Number,
    course: String

}))