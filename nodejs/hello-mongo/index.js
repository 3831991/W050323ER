const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/full-stack-w050323er');
    console.log('mongodb connection established on port 27017');
}

const schema = new mongoose.Schema({
    firstName: {
        type: String,
        maxLength: 256,
        trim: true,
        lowercase: true,
    },
    lastName: {
        type: String,
        maxLength: 256,
        trim: true,
        lowercase: true,
    },
    phone: {
        type: String,
        required: true,
        match: RegExp(/0[0-9]{1,2}\-?\s?[0-9]{3}\s?[0-9]{4}/),
    },
    email: {
        type: String,
        required: true,
        match: RegExp(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/),
        lowercase: true,
        trim: true,
        unique: true,
    },
});

const User = mongoose.model("user", schema);

const app = express();

app.use(cors({
    origin: true,
    credentials: true,
    methods: 'GET,PUT,POST,DELETE',
    allowedHeaders: 'Content-Type, Accept',
}));

app.listen(4444);

app.get('/', (req, res) => {
    res.send("Welcome");
});

app.get('/users', (req, res) => {

});