const express = require("express")
const bodyParser = require("body-parser")
const path = require("path")
const app = express()

app.use(express.static(path.join(__dirname, "build")))
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", function (req, res) {
	res.sendFile(path.join(__dirname, "build", "index.html"))
})

app.post("/login", function (req, res) {
	console.log(req.body)
	res.send("Successful Login!!")
})

app.listen(process.env.PORT || 8080)
