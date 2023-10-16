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
        res.status(201).send(newUser)
    } catch(error){
        res.status(500).send(error)
    }
})

// User Login or Signin
// http://localhost:3002/api/v1/user/login







// Get All Users for testing
// http://localhost:3001/api/v1/getUser/
routes.get("/getUser", async (req, res) => {
    try{
        const userList = await UserModel.find({})
        res.status(200).send(userList)
    } catch(error){
        res.status(500).send(error)
    }
})

// User delete for testing
// Delete Employee By Id
// http://localhost:3002/api/v1/deleteUser/:userid
routes.delete("/deleteUser/:userid", async (req, res) => {
    try {
        const user = await UserModel.findOneAndDelete(req.params.eid)
        if(!user){
            res.status(204).send({message: "User Not found"})
        }else{
            res.status(200).send(user)
        }
    } catch(error){
        res.status(500).send(error)
    }
})

// export routes
module.exports = routes