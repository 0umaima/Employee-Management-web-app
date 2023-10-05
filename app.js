const express = require ('express');
const app =  express();

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



//Routes 
const employeeRoutes = require ('./routes/employeeRoutes');
app.use('/employees', employeeRoutes);
//line 12 I added /employees as a standard route for all routes inside employeesRoutes


//Start the server 
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server Started on port ${PORT}`);
})