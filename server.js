const express = require("express")
const usersRoutes = require("./routes/users")
const mongoose = require('mongoose')

const app = express()

const SERVER_PORT = 3002

app.use(express.json())
app.use(express.urlencoded())
const DB_CONNECTION_STRING = "mongodb+srv://reyritz2224:password123FullStack@cluster0.ehvajcf.mongodb.net/f2023_comp3123?retryWrites=true&w=majority"

mongoose.connect(DB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use("/api/v1", usersRoutes)

app.route("/")
    .get((req, res) => {
        res.send("<h1>Comp3123 Assignment1</h1>")
    })

app.listen(SERVER_PORT, () => {
    console.log(`Server running at http://localhost:${SERVER_PORT}`)
})