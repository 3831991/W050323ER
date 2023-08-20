const connection = require('../sqlConnection').connection;

function getUsers(req, res) {
    connection.query("SELECT * FROM `users`", (err, result) => {
        if (err) {
            throw err;
        }

        res.send(result);
    });
}

function getUser(req, res) {
    connection.query("SELECT * FROM `users` WHERE `id` = ?", [req.params.id], (err, result) => {
        if (err) {
            throw err;
        }

        res.send(result.pop());
    });
}

exports.getUsers = getUsers;
exports.getUser = getUser;