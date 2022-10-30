const express = require("express")
const { conn, StudentModel } = require("./db")
const app = express()
app.use(express.json())

app.get("/", (req, res) => {
    res.send("Welcome to the home!")
})
app.get("/about", (req, res) => {
    res.send("I'm about page ;)")
})
app.get("/students", async (req, res) => {
    // StudentModel.insertMany([{ name: "Abirami", age: 25, course: "NEM_111" }])
    const result = await StudentModel.find({})
    console.log(result)
    res.send(result)
})
app.post("/addstudent", async (req, res) => {
    const payload = req.body
    const ans = new StudentModel([payload])
    await ans.save()
    res.send(ans)
})
app.listen(8080, async () => {
    try {
        await conn
        console.log("Connected to db sucessfully")
    }
    catch (err) {
        console.log(err)
        console.log("err while connecting to db")
    }
    console.log("Listening at 8080")
})