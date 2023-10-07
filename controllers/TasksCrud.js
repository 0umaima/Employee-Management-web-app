const { Task } = require('../models/models.js');



async function addTask(req, res) {
    try {

        //extract data from request body.
        const { title, Description, assignedEmployee } = req.body;

        const newTask =  new Task ({ title, Description, assignedEmployee });
        console.log(newTask);
        // Save the new Task to the database
        await newTask.save()

        res.status(201).json({ message: 'Task added successfully!' });

    } catch (err) {
         console.error('Error adding Task:', err);
        res.status(500).json({ message: 'Internal server error' });
    }
};

async function deleteTask (req, res){
    try{
        //Extract Task id from request params
        const { id } = req.params;

        //find Task by id and delete it
        const deletedTask = await Task.findByIdAndDelete(id);

        if(!deletedTask){
            return res.status(404).json({ message: "Task not Deleted"});
        }

        res.status(200).json({message: "Task Deleted Succesfully"});


    } catch(err){
        console.error("Error Deleting Task", err);
        res.status(500).json({message: "Server Issue"})
    }
};


async function getAllTasks (req, res){
    try{
        const Tasklist = await Task.find();

        if(!Tasklist){
            res.status(404).json('Tasks Can not be Tasklisted')
        }
        res.status(200).json({Tasklist});
    } 
    
    catch (error){
        console.error('Error Tasklisting Tasks', error);
        res.status(500).json('Server Issue')
    } 
  
};

async function updateTask (req, res) {
    try{

        const {id} = req.params;

        const {title, Description, assignedEmployee} = req.body;

        const updateTaskData = await Task.findByIdAndUpdate(
            id, 
            {title, Description, assignedEmployee}, 
            {new: true}
        );

        


        if(!updateTaskData){
            res.status(404).json({message: 'Task not updated'});
        }
        res.status(200).json({message:"Task Updated Successfully", Task: updateTaskData});

    } catch (error){

        console.error("Error Updating Task", error);
        res.status(500).json({message: 'Server Issues'});

    }
};



module.exports = { addTask, deleteTask, getAllTasks, updateTask };