const express = require('express');
const router = express.Router();
const Contacts = require('../models/Contacts');

router.get('/contacts', (req, res) => {
    Contacts
        .fetchAll()
        .then(results => {
            console.log('contacts results:', results);
            res.json(results);
        })
        .catch(err => {
            console.log('error getting all contacts', err);
        })
})

module.exports = router;