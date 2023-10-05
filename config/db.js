const mongoose = require('mongoose');

const URI = 'mongodb+srv://Reader:reader123@cluster1.f6qvi2y.mongodb.net/Employee-Managment?retryWrites=true&w=majority';

const connectDb = async () =>{
    mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then( () => {
        console.log('Connected to MongoDb');
    }) .catch((error) =>{
        console.error('Error connecting to MongoDB:', error);
    });
};

module.exports = connectDb;