const express = require("express")
const connection =require("./db")
const app = express()

app.get("/",(req,res)=>{
    res.send("Welcome to the home!")
})
