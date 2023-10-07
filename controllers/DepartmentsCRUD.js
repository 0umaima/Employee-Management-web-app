// const connectDb = require('../config/db.js');
const { Departement } = require('../models/models.js');




// connectDb();


async function addDepartement(req, res) {
    try {

        //extract data from request body.
        const { name, description} = req.body;
        

        const newDepartement =  new Departement ({ name, description });
        
        await newDepartement.save()
        console.log(newDepartement);

        // Save the new Departement to the database

        

        res.status(201).json({ message: 'Departement added successfully!' });

    } catch (err) {
         console.error('Error adding Departement:', err);
        res.status(500).json({ message: 'Internal server error' });
    }
};

async function deleteDepartement (req, res){
    try{
        //Extract Departement id from request params
        const { id } = req.params;
        

        //find Departement by id and delete it
        const deletedDepartement = await Departement.findByIdAndDelete(id);
        console.log(deletedDepartement)
        if(!deletedDepartement){
            return res.status(404).json({ message: "Departement not Deleted"});
        }

        res.status(200).json({message: "Departement Deleted Succesfully"});


    } catch(err){
        console.error("Error Deleting Departement", err);
        res.status(500).json({message: "Server Issue"})
    }
};


async function getAllDepartements (req, res){
    try{
        const display = await Departement.find();

        if(!display){
            res.status(404).json('Departements Can not be displayed')
        }
        res.status(200).json({display});
    } 
    
    catch (error){
        console.error('Error Displaying Departements', error);
        res.status(500).json('Server Issue')
    } 
  
};

async function updateDepartement (req, res) {
    try{

        const {id} = req.params;

        const { name, description } = req.body;

        const updateDepartementData = await Departement.findByIdAndUpdate(
            id, 
            { name, description}, 
            {new: true}
        );

        


        if(!updateDepartementData){
            res.status(404).json({message: 'Departement not updated'});
        }
        res.status(200).json({message:"Departement Updated Successfully", Departement: updateDepartementData});

    } catch (error){

        console.error("Error Updating Departement", error);
        res.status(500).json({message: 'Server Issues'});

    }
};



module.exports = { addDepartement, deleteDepartement, getAllDepartements, updateDepartement };