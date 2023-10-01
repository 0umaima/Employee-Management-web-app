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
        type: String,
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



const Employee = mongoose.model('employees', employeeSchema);
const Departements = mongoose.model('Departements', departmentSchema);

module.exports = {
    Employee,
    Departements
}