const mongoose = require('mongoose');
const env = require('dotenv').config()

//installed dotenv 

const URI = process.env.URI
const localuri = 'mongodb://127.0.0.1:27017/Employee-Management?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.0.1'

const connectDb = async () =>{
    mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then( () => {
        console.log('Connected to MongoDb');
    }) .catch((error) =>{
        console.error('Error connecting to MongoDB:', error);
    });
};

module.exports = connectDb; 