const express = require ('express');
const app =  express();

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



//Routes 
const employeeRoutes = require ('./routes/employeeRoutes');
app.use(employeeRoutes);


//Start the server 
const PORT = process.env.PORT || 4500;
app.listen(PORT, () => {
    console.log(`Server Started on port ${PORT}`);
})