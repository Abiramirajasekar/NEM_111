const { Router } = require("express")
const { Student } = require("../Models/Student.model")

const studentRouter = Router()
studentRouter.get("/", async (req, res) => {
    const student_data = await Student.find()
    res.send(student_data)
})
studentRouter.get("/:studentname", async (req, res) => {
    console.log(req.params.studentname)
    const student_data = await Student.find({ name: req.params.studentname })
    res.send(student_data)
})

module.exports={studentRouter}