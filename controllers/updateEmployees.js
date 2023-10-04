const connectDb = require ('../config/db.js');
const { Employee } = require ('../models/models.js');

connectDb();


async function updateEmployee (req, res) {
    try{

        const {id} = req.params;

        const {name, surname, departement} = req.body;

        const updateEmployeeData = await Employee.findByIdAndUpdate(
            id, 
            {name, surname, departement}, 
            {new: true}
        );

        


        if(!updateEmployeeData){
            res.status(404).json({message: 'Employee not updated'});
        }
        res.status(200).json({message:"Employee Updated Successfully", Employee: updateEmployeeData});

    } catch (error){

        console.error("Error Updating Employee", error);
        res.status(500).json({message: 'Server Issues'});

    }
}

module.exports = {updateEmployee};