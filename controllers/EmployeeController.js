const { response } = require('express')
const Employee = require('../models/Employee')

const index = (req, res, next) => {
    Employee.find()
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message : "An error occured!"
        })
    })
}

const show = (req, res, next) => {
    let employeeID = req.body.employeeID
    Employee.findById(employeeID)
    .then(response =>{
        res.json({
            response
        })
    })
    .catch(error =>{
        res.join({
            message :'An error occured!'
        })
    })
}

const store= (req, res, next) =>{
    let employee = new Employee({
        name : req.body.name,
        email : req.body.email,
        phone : req.body.phone,
        password : req.body.password,
    })
    employee.save()
    .then(response =>{
        res.json({
            message : 'Employee added successfully'
        })
    })
    .catch(error =>{
        res.json({
            message : 'An error occured!'
        })
    })
}

const update = (req, res, next) =>{
    let employeeID=req.body.employeeID

    let updateData = {
        name : req.body.name, 
        email : req.body.email,
        phone : req.body.phone,
        password : req.body.password,
    }

    Employee.findByIdAndUpdate(employeeID, {$set: updateData})
    .then(() => {
        res.json({
            message : 'Employee updated successfully'
        })
    })
    .catch(error =>{
        res.json({
            message : 'An eror occured!'
        })
    })
}
 const destroy = (req, res, next)=>{
     let employeeID=req.body.employeeID
     Employee.findByIdAndRemove(employeeID)
     .then(() => {
        res.json({
            message : 'Employee deleted successfully'
        })
    })
    .catch(error =>{
        res.json({
            message : 'An eror occured!'
        })
    })
 }
 module.exports= {
     index, show, store, update, destroy
 }