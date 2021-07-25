// Iteration #1
const mongoose = require('mongoose')
const Drone = require('../models/Drone.model')

const dronesSeed = [
    {

        name: 'trainer-3000',
        propellers: 4,
        maxSpeed: 10,
    
    },
    {

        name: 'fat-Joe',
        propellers: 2,
        maxSpeed: 6,
    
    },
    {

        name: 'speedy-Gonzales',
        propellers: 6,
        maxSpeed: 20,
    
    },
]

const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/lab-express-drones";

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  })
  .then(() => {
    Drone.create(dronesSeed).then(droneDoc => {
        console.log(droneDoc.length)
    }).catch(e => console.log(e))
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });
