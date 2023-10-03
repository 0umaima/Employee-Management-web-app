const connectDb = require('../config/db.js');
const { Employee } = require('../models/models.js');

connectDb();

async function getAllEmployees (req, res){
    try{
        const display = await Employee.find();

        if(!display){
            res.status(404).json('Employees Can not be displayed')
        }
        res.status(200).json({display});
    } catch (error){
        console.log('Error Displaying Employees', error);
        res.status(500).json('Server Issue')
    }
};

module.exports = {getAllEmployees}