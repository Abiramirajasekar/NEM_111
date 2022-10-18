const express = require("express")
const app = express();
// Middleware Function ->which has access to req obj and res obj and next ()
app.use((req, res, next) => {
    console.log(req.url)
    next()
})
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