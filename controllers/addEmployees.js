const connectDb = require('../config/db.js')
const { Employee } = require('../models/models.js');




connectDb();


async function addEmployee(req, res) {
    try {

        //extract data from request body.
        const { name, surname, departement } = req.body;
        

        const newEmployee =  new Employee ({ name, surname, departement});

        console.log(newEmployee);

        // Save the new employee to the database
        await newEmployee.save()

        

        res.status(201).json({ message: 'Employee added successfully!' });

    } catch (err) {
         console.error('Error adding employee:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
module.exports = {
    addEmployee
};