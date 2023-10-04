const connectDb = require('../config/db.js')
const { Employee } = require('../models/models.js')

    connectDb();

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




module.exports= {deleteEmployee};




