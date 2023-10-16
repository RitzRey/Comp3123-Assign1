const express = require("express")
const EmpModel = require('../models/Employees')

const routes = express.Router()

// Get All Employees
// http://localhost:3001/api/v1/emp/employees
routes.get("/emp", async (req, res) => {
    try{
        const empList = await EmpModel.find({})
        res.status(200).send(empList)
    } catch(error){
        res.status(500).send(error)
    }
})

// Add new Employee
// http://localhost:3002/api/v1/emp/employees
routes.post("/emp", async (req, res) => {
    console.log(req.body)
    try{
        const newEmp = new EmpModel({
            ...req.body
        })
        await newEmp.save()
        res.status(200).send(newEmp)
    } catch(error){
        res.status(500).send(error)
    }
})

// Get Employee by Id
// http://localhost:3002/api/v1/emp/employees/{eid}
routes.post("/emp:eid", async (req, res) => {
    try {
        const employee = await EmpModel.findById(req.params.bookid)
        res.status(200).json(employee)
    } catch(error){
        res.status(500).json(error)
    }
})

// Update Employee by Id
// http://localhost:3002/api/v1/emp/employees{eid}
routes.post("/emp/:eid", async (req, res) => {
    try {
        const updatedEmp = await EmpModel.findByIdAndUpdate(req.params.eid, req.body)
        res.status(200).json(updatedEmp)
    } catch(error){
        res.status(500).json(error)
    }
})


// Delete Employee By Id
// http://localhost:3002/api/v1/emp/employees?eid=
routes.delete("/emp/employees?eid=", async (req, res) => {
    try {
        const employee = await EmpModel.findOneAndDelete(req.params.eid)
        if(!employee){
            res.status(200).send({message: "Employee Not found"})
        }else{
            res.status(200).send(employee)
        }
    } catch(error){
        res.status(500).send(error)
    }
})

module.exports = routes