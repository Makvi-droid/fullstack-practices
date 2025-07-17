require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workOutRoutes = require('./routes/workouts.js')

//express app
const app = express()


//middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/workOuts', workOutRoutes)


//connect to DB
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    //listen for requests 
    app.listen(process.env.PORT, () => {
    console.log(`connected to mongoDB and listening on port ${process.env.PORT}`)
})
})
.catch((error) => {
    console.log(error)
})



