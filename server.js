const express = require("express")
const usersRoutes = require("./routes/users")
const mongoose = require('mongoose')
const empRoutes = require("./routes/employees")

const app = express()
const v1api = express()

const SERVER_PORT = 3002

app.use(express.json())
app.use(express.urlencoded())
const DB_CONNECTION_STRING = "mongodb+srv://reyritz2224:password123FullStack@cluster0.ehvajcf.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(DB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

v1api.use("/user", usersRoutes)
v1api.use("/emp", empRoutes)
app.use("/api/v1", v1api)

app.route("/")
    .get((req, res) => {
        res.send("<h1>Comp3123 Assignment1</h1>")
    })

app.listen(SERVER_PORT, () => {
    console.log(`Server running at http://localhost:${SERVER_PORT}`)
})