const mysql = require('mysql2');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    // port: 8889, // למחשבי Mac
    database: 'full-stack-w050323er',
});

con.connect(err => {
    if (err) {
        throw err;
    }

    console.log("Connection established");
});

module.exports = con;