const mongoose = require('mongoose');

const {Schema} = mongoose;
const employeeSchema = new Schema({

    name: {
        type: String,
        required: true,
    },
    surname: {
        type: String,
        required: true,
    },
    departement: {
        type: Object,
        required: true,
    }
}, {
    //Automate the update of two fields: createdAt && updatedAt.
    timestamps: true,
});

const departmentSchema = new Schema({
        name: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true,
    });



const Employee = mongoose.model('Employee', employeeSchema, 'Employees');
const Departements = mongoose.model('Department', departmentSchema, 'Departements');

module.exports = { Employee, Departements }