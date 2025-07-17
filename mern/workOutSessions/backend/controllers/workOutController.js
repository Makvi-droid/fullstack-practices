const workOutModel = require('../models/workoutsModel.js')
const mongoose = require('mongoose')

// get all workouts
const getWorkOuts = async (req, res) => {
    const workOuts = await workOutModel.find({}).sort({createdAt: -1})

    res.status(200).json(workOuts)
}

//get a single workout
const getWorkOut = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such workout"})
    }

    const workOut = await workOutModel.findById(id)

    if(!workOut){
        return res.status(400).json({error: "No such work out"})
    }

    res.status(200).json(workOut)
}


//create new workout
const createWorkOut = async (req, res) => {
    const {title, reps, load} = req.body

    //add doc to db
    try{
        const workOut = await workOutModel.create({title, reps, load}) 
        res.status(200).json(workOut)
    }
    catch(error){
        res.status(400).json({error: error.message})
    }
    
}

//delete a workout
const deleteWorkOut = async (req, res) => {
    const {id} = req.params
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({errpr: "No such workout"})
    }

    const workOut = await workOutModel.findOneAndDelete({_id: id})

    if(!workOut){
        return res.status(400).json({error: "No such work out"})
    }

    res.status(200).json(workOut)
}

//update a workout
const updateWorkOut = async (req, res) => {
    const {id} = req.params
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({errpr: "No such workout"})
    }

    const workOut = await workOutModel.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if(!workOut){
        return res.status(400).json({error: "No such work out"})
    }

    res.status(200).json(workOut)
}


module.exports = {
    createWorkOut,
    getWorkOuts,
    getWorkOut,
    deleteWorkOut,
    updateWorkOut
}