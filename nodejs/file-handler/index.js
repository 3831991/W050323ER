const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();

app.use(cors({
    origin: true,
    credentials: true,
    methods: 'GET,PUT,POST,DELETE',
    allowedHeaders: 'Content-Type, Accept',
}));

app.listen(2);

app.get('/', (req, res) => {
    res.send("Welcome");
});

app.get('/test', (req, res) => {
    fs.appendFile("test.txt", 'Hello world!', (err) => {
        if (err) {
            throw err;
        }

        res.send('File created...');
    });
});