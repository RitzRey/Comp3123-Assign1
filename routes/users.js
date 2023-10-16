const express = require("express")
const UserModel = require('../models/Users')

const routes = express.Router()

// User Signup
// http://localhost:3002/api/v1/user/signup
routes.post("/signup", async (req, res) => {
    console.log(req.body)
    try {
        const newUser = new UserModel({
            ... req.body
        })
        await newUser.save()
        res.status(200).send(newUser)
    } catch(error){
        res.status(500).send(error)
    }
})

// User Login or Signin
// http://localhost:3002/api/v1/user/login


module.exports = routes