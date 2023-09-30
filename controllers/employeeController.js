
const {Employee} = require('../models/models.js');

async function createEmployee(req, res) {
  try {
    const newEmployee = new Employee(
        {
            name: req.body.name,
            surname: req.body.surname,
            departement: req.body.departement
        });

    console.log( newEmployee);
    const employee = await Employee.create(newEmployee);
    res.status(201).json(employee);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Failed to create employee' });
  }
}




module.exports = {createEmployee};