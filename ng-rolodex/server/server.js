const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const Users = require('../db/models/Users');
const Contacts = require('../db/models/Contacts');

const PORT = process.env.EXPRESS_CONTAINER_PORT;

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));





app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
});