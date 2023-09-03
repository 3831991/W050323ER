const express = require('express');
const con = require('./sqlConnection');
const moment = require('moment');

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

    let sql = `SELECT * FROM (${req.params.tableName})`;
    
    if (req.query.limit) {
        sql += ` LIMIT ${+req.query.limit}`;
    }

    con.query(sql, (err, result) => {
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
                                ${keys.map(k => `<th>${k}</th>`).join('')}
                            </tr>
                        </thead>
                        <tbody>
                            ${result.map(item => `
                                <tr>
                                    ${Object.values(item).map(v => `<td>${v instanceof Date ? moment(v).format('DD/MM/YYYY') : v}</td>`).join('')}
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </body>
            </html>
        `);
    })
});

app.get('/login', (req, res) => {
    if (!req.query.userName || !req.query.password) {
        return res.send("שגיאה");
    }

    con.query("SELECT * FROM `users` WHERE `userName` = ? AND `password` = MD5(?)", [req.query.userName, req.query.password], (err, result) => {
        if (!result.length) {
            return res.send("שם משתמש או סיסמה לא נכונים");
        } else {
            return res.send(result[0]);
        }
    });
});