const express = require('express');
const cors = require('cors');
const app = express();
require('./sqlConnection');

app.use(cors({
    origin: true,
    methods: 'GET,PUT,POST,DELETE,OPTIONS',
    credentials: true,
    allowedHeaders: 'Content-Type, Accept',
}));

app.use(express.json());

app.listen(4000, () => {
    console.log("Listening to port 4000...");
});

require('./router')(app);