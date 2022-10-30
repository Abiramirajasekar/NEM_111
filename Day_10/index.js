const express = require("express")
const { default: mongoose } = require("mongoose")
const { connection } = require("./config/db")
const { UserModel } = require("./models/User.model")
const app = express()

// const isAuth = false

app.use(express.json())
app.get("/", (req, res) => {
    res.send("Home page here!")
})

app.get("/dashboard", (req, res) => {
    const { token } = req.query

    // if(isAuth){
    //     res.send("some important data")
    // }
    // else{
    //     res.send ("login please")
    // }

    if (Number(token) === 54321) {
        res.send("Some Important data")
    }
    else {
        res.send("Please do login first")
    }
})

app.get("/reports", (req, res) => {
    res.send("Some important reports")
})
app.post("/signup", async (req, res) => {
    const { email, password } = req.body
    const new_user = new UserModel({
        email, password
    })

    await new_user.save()
    res.send("Signed up")
})
// const isAuth = false
app.post("/login", async (req, res) => {
    // isAuth = true
    const { email, password } = req.body;
    const result = await UserModel.find({ email, password })
    console.log(result)
    if (result) {
        res.send({ "msg": "Logged in sucessfully", "token": 54321 })
    }
    else {
        res.send("Login Failed")
    }
})


app.listen(8004, async (req, res) => {
    try {
        await connection
    }
    catch (err) {
        console.log("Something went wrong", err)
    }
    console.log("Listening on 8004")
})