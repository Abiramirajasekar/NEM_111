const express = require("express")
const fs = require("fs")
const app = express()

const { messageRouter } = require("./routes/messages.route")

// Middleware Function ->which has access to req obj and res obj and next ()
// CallBack function -> any fun tat is passed as an argument to other function 

// Express Eg

// app.get("/", (req, res) => {
//     console.log(`The method is ${req.method} and the url is ${req.url}`)
// })
// app.post("/about", (req, res) => {
//     console.log(req, url)
//     res.send("About page here!..")
// })

// app.listen(8000, () => {
//     console.log("Express api started on 8000")
// })



// const time = (req, res, next) => {
//     const setTime = new Date().getTime()
//     next()
//     const endTime = new Date().getTime();
// }

const char = (req, res, next) => {
    console.log("O")
    console.log(`The method is ${req.method} and the url is ${req.url}`)
    next()
    console.log("P")
}

const urlLogger = (req, res, next) => {
    console.log("M")
    next()
    console.log("N")
}
app.use(char, urlLogger)
app.use("/message", messageRouter)
app.get("/", (req, res) => {
    res.send("Welcome!")
})
app.get("/about", (req, res) => {
    res.send("About page here!")
})
app.get("/contact", (req, res) => {
    res.send("contact details are...")
})
app.listen(8080, () => {
    console.log("Listening port on 8080")
})