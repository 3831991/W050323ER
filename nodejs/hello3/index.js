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
    con.query("SELECT * FROM `clients`", (err, result) => {
        if (err) {
            throw err;
        }

        res.send(result);
    })
});

app.get('/table/:tableName', (req, res) => {
    
    con.query(`SELECT * FROM ${req.params.tableName}`, (err, result) => {
        if (err) {
            throw err;
        }

        res.writeHead(200, {'Content-Type': 'text/html'});

        if (!result.length) {
            res.end(`<h1>אין נתונים</h1>`);
            return;
        }

        const keys = Object.keys(result[0]);

        res.end(`
            <!DOCTYPE html>
                <html>
                <head>
                    <meta charset="UTF-8">
                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.rtl.min.css">
                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
                    <title>Table ${req.params.tableName}</title>
                </head>
                <body>
                    <h1>Table ${req.params.tableName}</h1>

                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Wheeler</td>
                                <td>Guyonneau</td>
                                <td>wguyonneau0@wufoo.com</td>
                                <td>668-715-0256</td>
                            </tr>
                        </tbody>
                    </table>
                </body>
            </html>
        `);
    })
});