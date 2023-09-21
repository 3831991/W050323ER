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
            res.send([]);
        }

        res.send(files);
    });
});

app.post('/folder/:folderName', (req, res) => {
    fs.mkdir(`${__dirname}/folders${req.query.path || ''}/${req.params.folderName}`, err => {
        res.send();
    });
});