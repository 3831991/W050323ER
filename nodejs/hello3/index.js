const express = require('express');
const con = require('./sqlConnection');

const app = express();

app.use(express.json());

app.listen(7777);

app.use((req, res, next) => {
    console.log(req.method, req.url);

    next();
});

app.get('/', (req, res) => {
    res.send({
        message: 'Welcome to the club',
    });
});

app.get('/number/:num', (req, res) => {
    res.send({
        numbers: new Array(+req.params.num).fill().map((x, i) => i),
    });
});

app.get('/number/:min/:max', (req, res) => {
    const min = +req.params.min;
    const max = +req.params.max;

    res.send({
        numbers: new Array(max - min + 1).fill().map((x, i) => i + min),
    });
});

app.get('/clients', (req, res) => {
    
});

