const connectDb = require('../config/db.js')
const {
    Employee
} = require('../models/models.js');
const {
    Departements
} = require('../models/models.js');


// async function addEmployee(req, res) {
//     // connectDb();
//     // try {
//     //     const {
//     //         name,
//     //         surname,
//     //         departement
//     //     } = req.body;

//     //     console.log({
//     //         name,
//     //         surname,
//     //         departement
//     //     })

//     //     //find departement by name 
//     //     const foundDepartment = await Departements.findOne({
//     //         name: departement
//     //     });
//     //     console.log(foundDepartment);

//     //     await Employee.populate('departement').execPopulate();



//     //     if (!foundDepartment) {
//     //         return res.status(400).json({
//     //             error: 'Invalid department'
//     //         });
//     //     }

//     //     const newEmployee = {
//     //         name,
//     //         surname,
//     //         departement: foundDepartment.name,
//     //     };

//     //     const employee = await Employee.create(newEmployee);
//     //     res.status(201).json(employee);
//     // } catch (err) {
//     //     console.log(err);
//     //     res.status(500).json({
//     //         error: 'Failed to create employee'
//     //     });
//     // }
// }


connectDb();


async function addEmployee(req, res) {
    try {
        const {
            name,
            surname,
            departement
        } = req.body;

        const foundDepartment = await Departements.find();
        const emp = await Employee.find();

        console.log(foundDepartment, emp);

    } catch (err) {

    }
}
module.exports = {
    addEmployee
};




// async function createEmployee(req, res) {
//   try {
//     const newEmployee = new Employee(
//         {
//             name: req.body.name,
//             surname: req.body.surname,
//             departement: req.body.departement
//         });

//     console.log( newEmployee);
//     const employee = await Employee.create(newEmployee);
//     await employee.populate('departement').execPopulate();
//     console.log(employee.departement); // This will print the populated department object
//     res.status(201).json(employee);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ error: 'Failed to create employee' });
//   }
// }