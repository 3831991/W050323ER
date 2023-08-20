const connection = require('../sqlConnection').connection;

function getUsers(req, res) {
    connection.query("SELECT * FROM `users`", (err, result) => {
        if (err) {
            throw err;
        }
    
        res.send(result);
    });
}

exports.getUsers = getUsers;