const mongoose = require('mongoose');

const url = '';

const connectDb = () =>{
    mongoose.connect(url, () => {
        console.log('Connected to MongoDb');
    });
};

module.exports = connectDb;