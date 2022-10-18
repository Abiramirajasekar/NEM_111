const express = require("express")
const messageRouter = express.Router()

messageRouter.post("/add", (req, res) => {
    console.log(req.body)
    res.send("Messages Received...")
})

messageRouter.get("/", (req, res) => {
    res.send("Messages")
})
messageRouter.delete("/delete", (req, res) => {
    res.send("Message Deleted")
})

module.exports = { messageRouter }