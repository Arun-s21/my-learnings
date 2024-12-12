const express = require('express');
const mysql = require('mysql2');
const userRoutes = require('./routes/user');
const adminRoutes = require('./routes/admin');
const courseRoutes = require('./routes/course');

const app = express();


app.use(express.json());


app.use('/users', userRoutes);
app.use('/admins', adminRoutes);
app.use('/courses', courseRoutes);


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running`);
});
