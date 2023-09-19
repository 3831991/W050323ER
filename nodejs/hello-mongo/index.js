const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const moment = require('moment');
const fs = require('fs');
const { getUser } = require('./config');

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/full-stack-w050323er');
    console.log('mongodb connection established on port 27017');
}

main().catch(err => console.log(err));

const app = express();

app.use(express.json());

app.use(cors({
    origin: true,
    credentials: true,
    methods: 'GET,PUT,POST,DELETE',
    allowedHeaders: 'Content-Type, Accept, Authorization',
}));

app.use((req, res, next) => {
    const fileName = 'log_' + moment().format('YYYY_MM_DD') + '.txt';
    let fileContent = '';
    const user = getUser(req);

    fileContent += `Time: ${moment().format('DD/MM/YYYY HH:mm:ss')}\n`;
    fileContent += `Method: ${req.method}\n`;
    fileContent += `Route: ${req.path}\n`;

    if (user) {
        fileContent += `User: ${user._id} (${user.firstName} ${user.lastName})\n`;
    }

    fileContent += '\n';

    fs.appendFile(fileName, fileContent, () => next());
});

app.listen(4444);

app.get('/', (req, res) => {
    res.send("Welcome");
});

require('./handlers/users')(app);
require('./handlers/grades')(app);
require('./handlers/auth')(app);