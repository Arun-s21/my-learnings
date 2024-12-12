const express = require('express');
const router = express.Router();
const db = require('../db');


router.post('/signup', (req, res) => {
    const { name, email, password } = req.body;

    const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
    db.query(query, [name, email, password], (err, result) => {
        res.status(201).json({ message: 'User signed up successfully', userId: result.insertId });
    });
});

module.exports = router;
