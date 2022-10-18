const { Router } = require("express")
const { IA } = require("../Models/IA.model")

const iaRouter = Router()
iaRouter.get("/", async (req, res) => {
    const ia_data = await IA.find()
    res.send(ia_data)
})
module.exports = { iaRouter }