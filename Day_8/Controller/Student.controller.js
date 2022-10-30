const { Student } = require("../Models/Student.model")

const getStudents = ( async (req, res) => {
    const student_data = await Student.find()
    res.send(student_data)
})
module.exports={
    getStudents
}