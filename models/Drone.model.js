// Iteration #1

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const droneModel = new Schema({

    name: String,
    propellers: Number,
    maxSpeed: Number,

})

const Drone = mongoose.model('drone', droneModel)

module.exports = Drone