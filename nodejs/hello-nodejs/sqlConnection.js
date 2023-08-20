const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    // port: 8889, // למחשבי Mac
    database: 'full-stack-w050323er',
});

connection.connect(err => {
    if (err) {
        throw err;
    }

    console.log("Connection established");
});

exports.connection = connection;