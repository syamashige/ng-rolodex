const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const Users = require('../models/Users.js');
const Contacts = require('../models/Contacts');
const UsersRoute = require('../routes/usersRoute');
const ContactsRoute = require('../routes/contactsRoute');

const PORT = process.env.EXPRESS_CONTAINER_PORT;

app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ******** USERS ******** //

// GET all users
app.get('/users', (req, res) => {
    Users
        .fetchAll()
        .then(results => {
            console.log('users results: ', results)
            res.json(results);
        })
        .catch(err => {
            console.log('error getting all users', err);
        })
}) 

// GET users by id
app.get('/users/:id', (req, res) => {
    const { id } = req.params;
    Users 
        .where({id})    
        .fetchAll()
        .then(results => {
            console.log('user by id results: ', results);
            res.json(results);
        })
        .catch(err => {
            console.log('error getting user by id', err);
    })
})


// ******** CONTACTS ******** //

// GET all contacts
app.get('/contacts', (req, res) => {
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

//GET contacts by id
app.get('/contacts/:id', (req, res) => {

    const { id } = req.params;
    console.log('uuugggghhh', id)
    Contacts
        .where({ id })
        .fetch()
        .then(results => {
            console.log('contacts by id results: ', results)
            res.json(results);
        })
        .catch(err => {
            console.log('error getting contact by id', err);
    })
})

//Create new contact 
app.post('/contacts/new', (req, res) => {
    const { id } = req.params;
    const payload = {
        name: req.body.name,
        address: req.body.address,
        mobile: req.body.mobile,
        work: req.body.work,
        home: req.body.home,
        email: req.body.email,
        twitter: req.body.twitter,
        instagram: req.body.instagram,
        github: req.body.github
    }

    Contacts
        .forge(payload)
        .save()
        .then(result => {
            res.redirect('/contacts');
        })
        .catch(err => {
            res.json(err);
        });
})




app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
});