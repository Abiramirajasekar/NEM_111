// Juz refer this 

const mongoose = require("mongoose")
const connection = mongoose.connect("mongodb://127.0.0.1:27017/data")
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
studentSchema = mongoose.Schema({
    name: String,
    age: Number,
    course: String

})

const StudentModel = mongoose.model("student", studentSchema)

const employeeSchema = mongoose.Schema({
    name: String,
    salary: Number,
    role: String

})
const EmployeeModel = mongoose.model("employee", employeeSchema)

module.exports = { StudentModel, connection }



