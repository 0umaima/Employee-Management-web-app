const mongoose = require('mongoose');

const URI = 'mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.10.6';

const connectDb = () =>{
    mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then( () => {
        console.log('Connected to MongoDb');
    }) .catch((error) =>{
        console.error('Error connecting to MongoDB:', error);
    });
};

module.exports = connectDb;