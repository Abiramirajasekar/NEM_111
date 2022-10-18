const express = require("express")
const { connection } = require("./db")
const app = express()
const{studentRouter}=require("./routes/student.route")
const {iaRouter} = require("./routes/ia.route")
app.get("/", (req, res) => {
    res, send("Hello")
})
app.use("/students",studentRouter)
app.use("/ias",iaRouter)
app.listen(8008, async () => {
    try {
        await connection
        console.log("Connected")
    }
    catch (err) {
        console.log("Found error")
        console.log(err)
    }
    console.log("Server listening 8008")
})