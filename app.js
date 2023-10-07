const express = require('express');
const connectDb = require('./config/db.js');
const app =  express();

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



//Routes 
const employeeRoutes = require ('./routes/employeeRoutes');
app.use('/employees', employeeRoutes);
//line 12 I added /employees as a standard route for all routes inside employeesRoutes
const DepartmentRoutes = require('./routes/DepartmentsRoutes');
app.use('/departments', DepartmentRoutes)

const TaskRoutes = require('./routes/TasksRoutes');
app.use('/Tasks', TaskRoutes)

// const {connectDb} = require('./config/db.js')
//Start the server 
const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
    console.log(`Server Started on port ${PORT}`);
    connectDb()
})
