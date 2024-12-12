const express = require('express');
const router = express.Router();
const db = require('../db');


router.post('/signup', (req, res) => {
    const { name, email, password } = req.body;

    const query = 'INSERT INTO admins (name, email, password) VALUES (?, ?, ?)';
    db.query(query, [name, email, password], (err, result) => {
       
        res.status(201).json({ message: 'Admin signed up successfully', adminId: result.insertId });
    });
});

module.exports = router;
