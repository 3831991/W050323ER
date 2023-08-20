const express = require('express');

const app = express();

app.listen(4000, () => {
    console.log("Listening to port 4000...");
});

app.get('/', (req, res) => {
    res.send("ברוכים הבאים");
});

app.get('/test', (req, res) => {
    res.send("עבר בהצלחה");
});