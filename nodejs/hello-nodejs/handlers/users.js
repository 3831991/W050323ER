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

function like(req, res) {
    connection.query("INSERT INTO `users_rating`(`targetedUser`, `isLike`) VALUES (?, 1)", [req.params.targetedUser], (err, result) => {
        if (err) {
            throw err;
        }

        res.send();
    });
}

function dislike(req, res) {
    connection.query("INSERT INTO `users_rating`(`targetedUser`, `isDislike`) VALUES (?, 1)", [req.params.targetedUser], (err, result) => {
        if (err) {
            throw err;
        }

        res.send();
    });
}

exports.getUsers = getUsers;
exports.getUser = getUser;
exports.like = like;
exports.dislike = dislike;