const express = require('express')
const router = express.Router();
const workOutModel = require('../models/workoutsModel.js')
const {
    createWorkOut,
    getWorkOuts,
    getWorkOut,
    deleteWorkOut,
    updateWorkOut
} = require('../controllers/workOutController.js')

//get all workouts
router.get('/', getWorkOuts)


//get a single workout
router.get('/:id', getWorkOut)

//create a workout
router.post('/', createWorkOut)


//delete a workout
router.delete('/:id', deleteWorkOut)


//update a workout
router.patch('/:id', updateWorkOut)



module.exports = router