const connection = require('../sqlConnection').connection;

function getClients(req, res) {
    connection.query("SELECT * FROM `clients`",(err, result) => {
        if (err) {
            throw err;
        }

        res.send(result);
    })
}

function getClient(req, res) {
    connection.query("SELECT * FROM `clients` WHERE `id` = ?", [req.params.id], (err, result) => {
        if (err) {
            throw err;
        }
        res.send(result.pop());
    });
}

exports.getClients = getClients;
exports.getClient = getClient;