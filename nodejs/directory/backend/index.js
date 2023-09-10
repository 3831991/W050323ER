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

app.listen(8200);

app.get('/', (req, res) => {
    res.send("Welcome");
});

app.get('/folders', (req, res) => {
    fs.readdir(`${__dirname}/folders${req.query.path || ''}`, (err, files) => {
        if (err) {
            throw err;
        }

        res.send(files);
    });
});

app.post('/folder/:folderName', (req, res) => {
    fs.mkdir(`${__dirname}/folders/${req.params.folderName}`, err => {
        if (err) {
            throw err;
        }

        res.send();
    });
});