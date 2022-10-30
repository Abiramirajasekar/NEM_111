const { Router } = require("express")
const app = require("../../Assi/Ass/features/movies.routes")
const { getStudents } = require("../Controller/Student.controller")
const { Student } = require("../Models/Student.model")
app.use(express.json())
const studentRouter = Router()
studentRouter.get("/", getStudents())
studentRouter.get("/:studentname", async (req, res) => {
    console.log(req.params.studentname)
    const student_data = await Student.find({ name: req.params.studentname })
    res.send(student_data)
})
studentRouter.post("/addStudent", async (req, res) => {
    const payload = req.body;
    if (payload.course === "NEM_111") {
        await Student.insertMany([payload])
        res.send("student data created sucessfully")
    }
    else {
        res.send("Please enter a valid course name")
    }
})

module.exports = { studentRouter }