// const os = require("os")
// console.log(os.version())
// console.log(os.cpus())

const fs = require("fs")
const data = fs.readFileSync("./Calc.js",{encoding:"utf-8"})

console.log(data)