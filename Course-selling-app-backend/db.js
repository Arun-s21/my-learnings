const mysql = require('mysql2');


const connection = mysql.createConnection({
    host: 'localhost', 
    user: 'username',
    password: 'password',
    database: 'world', 
});

connection.connect((err) => {
    console.log('Connected to the database.');
});

module.exports = connection;


