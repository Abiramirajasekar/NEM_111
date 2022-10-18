// PRE CLASS

// const http = require("http")

// const Server = http.createServer((res,req)=>{
//     res.write("Hi")
//     res.end("!")
// })
// Server.listen(8080,()=>{
//     console.log("Server started on localhost:8080/")
// })


const http = require("http")
const fs = require("fs")
const server = http.createServer((req, res) => {
    // res.end("Hello!")

    if (req.method === "GET") {

        if (req.url === "/posts") {

            // return res.end("Here are your posts")

            const posts = fs.readFileSync("./posts.json", { encoding: "utf-8" })
            res.setHeader("content-type", "application/json")

            // return res.end(JSON.stringify([{ name: "post1" }, { name: "post2" }]))
            
            return res.end(JSON.stringify(posts))

        }
        else if (req.url === "/html") {
            // this is help us to fix type of content either i want html or just text
            res.setHeader("Content-Type", "text/plain")
            // "text/html"


            return res.end("<h1>I can identify Html data too</h1>")
        }
        else {
            return res.end("New server here!")
        }
    }
    else if (req.url === "POST") {
        if (req.url === "/uploaddata") {
            let str = "";
            req.on("data", function (packet) {
                str += packet
            })
            req.on("end", () => {
                // console.log(str)
                fs.writeFileSync("./dummy.txt", str, { encoding: "utf-8" })
                res.end("We have got your data!")
            })

        }
    }


})

server.listen(8080)
