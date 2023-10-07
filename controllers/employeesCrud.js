const { Employee } = require('../models/models.js');



async function addEmployee(req, res) {
    try {

        //extract data from request body.
        const { name, surname, departement } = req.body;

        const newEmployee =  new Employee ({ name, surname, departement });
        console.log(newEmployee);
        // Save the new employee to the database
        await newEmployee.save()

        res.status(201).json({ message: 'Employee added successfully!' });

    } catch (err) {
         console.error('Error adding employee:', err);
        res.status(500).json({ message: 'Internal server error' });
    }
};

async function deleteEmployee (req, res){
    try{
        //Extract employee id from request params
        const { id } = req.params;

        //find employee by id and delete it
        const deletedEmployee = await Employee.findByIdAndDelete(id);

        if(!deletedEmployee){
            return res.status(404).json({ message: "Employee not Deleted"});
        }

        res.status(200).json({message: "Employee Deleted Succesfully"});


    } catch(err){
        console.error("Error Deleting Employee", err);
        res.status(500).json({message: "Server Issue"})
    }
};


async function getAllEmployees (req, res){
    try{
        const employeelist = await Employee.find();

        if(!employeelist){
            res.status(404).json('Employees Can not be listed')
        }
        res.status(200).json({employeelist});
    } 
    
    catch (error){
        console.error('Error employeelisting Employees', error);
        res.status(500).json('Server Issue')
    } 
  
};

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
};



module.exports = { addEmployee, deleteEmployee, getAllEmployees, updateEmployee };