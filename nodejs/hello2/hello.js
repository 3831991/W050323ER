const express = require('express');

const app = express();

app.use(express.json());

app.listen(6969, () => {
    console.log('The app is listening...');
});

app.get('/', (req, res) => {
    res.send({
        message: 'Hello World',
    });
});

app.get('/number/:number', (req, res) => {
    res.send({
        n: req.params.number
    })
});