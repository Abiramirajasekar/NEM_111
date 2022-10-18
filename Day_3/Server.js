const express = require("express")
const fs = require("fs")
const app = express();

app.get("/product", (req, res) => {
    res.send("products here")
})
app.post("/addPro", (req, res) => {
    // 1.accessing the product the clinte is sending ,req.body 2 read file
    const file = fs.readFileSync("./db.json", { encoding: "utf-8" })
    let pasrsedFile = JSON.parse(file)
    // modify the products in  the file
    pasrsedFile.product.push(req.body)
    console.log(pasrsedFile)
    // stringify the file
    pasrsedFile = JSON.stringify(pasrsedFile)
    // write the file back
    fs.writeFileSync("./db.json", pasrsedFile, { encoding: "utf-8" })
    res.send("ADDED")
})

app.listen(8080, () => {
    console.log("Listening port on 8080")
})