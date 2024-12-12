const express = require('express');
const router = express.Router();
const db = require('../db');

router.post('/add', (req, res) => {
    const { title, description, price } = req.body;

    const query = 'INSERT INTO courses (title, description, price) VALUES (?, ?, ?)';
    db.query(query, [title, description, price], (err, result) => {
        
        res.status(201).json({ message: 'Course added successfully', courseId: result.insertId });
    });
});


router.delete('/:id', (req, res) => {
    const courseId = req.params.id;

    const query = 'DELETE FROM courses WHERE id = ?';
    db.query(query, [courseId], (err, result) => {
        
        res.status(200).json({ message: 'Course deleted successfully' });
    });
});


router.get('/', (req, res) => {
    const query = 'SELECT * FROM courses';
    db.query(query, (err, results) => {
        
        res.status(200).json({ courses: results });
    });
});

module.exports = router;
