const express = require('express');
const router = express.Router();
const Users = require('../models/Users');

router.get('/', (req, res) => {
    Users
        .fetchAll()
        .then(results => {
            console.log('users results', results)
            res.json(results);
        })
        .catch(err => {
            console.log('error getting all users', err);
        })
}) 


module.exports = router;