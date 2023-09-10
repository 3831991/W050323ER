const express = require("express");
const cors = require('cors');
const formidable = require('formidable');
const fs = require('fs');
const app = express();

app.use(cors({
    origin: true,
    credentials: true,
    methods: 'GET,PUT,POST,DELETE',
    allowedHeaders: 'Content-Type, Accept',
}));

app.listen(421);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/files/upload', (req, res) => {
    const form = new formidable.IncomingForm();

    form.parse(req, (err, fields, files) => {
        const file = files.myFile[0];

        const allowed = ['image/jpg', 'image/jpeg', 'image/png'];

        if (!allowed.includes(file.mimetype)) {
            return res.status(403).send('Invalid file type specified for ' + file.originalFilename + ': ' + file.mimetype);
        }

        if (file.size > 1000 * 1024 * 3) {
            return res.status(403).send('Invalid file size specified for ' + file.originalFilename + ': ' + file.size);
        }

        fs.copyFile(file.filepath, `./files/${file.originalFilename}`, err => {
            if (err) {
                console.log(err);
            }

            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(`<meta charset="UTF-8">`);
            res.write(`<h1>התמונה עלתה בהצלחה</h1>`);
            res.write(`<img src="http://localhost:421/file/${file.originalFilename}" width="100%">`);
            res.end();
        });
    });
});

app.get('/file/:fileName', (req, res) => {
    res.sendFile(`${__dirname}/files/${req.params.fileName}`);
});

app.get('/files', (req, res) => {
    fs.readdir(`${__dirname}/files`, (err, files) => {
        if (err) {
            throw err;
        }

        res.send(files);
    });
});

app.delete('/files/:fileName', (req, res) => {
    fs.unlink(`${__dirname}/files/${req.params.fileName}`, (err, files) => {
        if (err) {
            throw err;
        }

        res.send();
    });
});