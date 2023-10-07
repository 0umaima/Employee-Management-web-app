const {Schema, mongoose} = require('mongoose');


const employeeSchema = new Schema({

    //i made all the keys start with capital letters
    Name: {
        type: String,
        required: true,
    },
    Surname: {
        type: String,
        required: true,
    },
    //i updated the department so it comes from  the department schema
    Departement: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'department',
        required: true,
    }
}, {
    //Automate the update of two fields: createdAt && updatedAt.
    timestamps: true,
});

const departmentSchema = new Schema({
        //i added more elements here Description and its not required 
        // also the local Id that we're going to use to point towards our department
        name: {
            type: String,
            required: true,
        },
        description:{
            type: String,
            required: false,
        }
    },
    {
        timestamps: true,
    });


const Employee = mongoose.model('Employee', employeeSchema, 'Employees');
const Departement = mongoose.model('Department', departmentSchema, 'Departements');

module.exports = { Employee, Departement }