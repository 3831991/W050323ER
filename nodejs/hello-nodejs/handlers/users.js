const connection = require('../sqlConnection').connection;

function getUsers(req, res) {
    connection.query("SELECT `users`.*, SUM(`users_rating`.`isLike`) as 'likes', SUM(`users_rating`.`isDislike`) as 'dislikes' FROM `users` LEFT JOIN `users_rating` ON `users`.`id` = `users_rating`.`targetedUser` GROUP BY `users`.`id`", (err, result) => {
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

function addUser(req, res) {
    // יצירת משתמש חדש
    connection.query(
        "INSERT INTO `users`(`firstName`, `lastName`, `phone`, `email`, `userName`, `password`) VALUES (?, ?, ?, ?, ?, MD5(?))",
        [req.body.firstName, req.body.lastName, req.body.phone, req.body.email, req.body.userName, req.body.password],
        (err, result) => {
            if (err) {
                throw err;
            }

            // המזהה של השורה החדשה שהוספנו
            const insertId = result.insertId;

            // קבלת האובייקט החדש שנוסף
            connection.query("SELECT * FROM `users` WHERE `id` = ?", [insertId], (err, result) => {
                if (err) {
                    throw err;
                }
        
                res.send(result.pop());
            });
        }
    );
}

function updateUser(req, res) {
    connection.query(
        "UPDATE `users` SET `firstName`=?, `lastName`=?, `phone`=?, `email`=?, `roleType`=? WHERE `id` = ?",
        [req.body.firstName, req.body.lastName, req.body.phone, req.body.email, req.body.roleType, req.params.id],
        (err, result) => {
            if (err) {
                throw err;
            }

            res.send();
        }
    );
}

function removeUser(req, res) {
    connection.query("DELETE FROM `users` WHERE `id` = ?", [req.params.id], (err, result) => {
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
exports.addUser = addUser;
exports.updateUser = updateUser;
exports.removeUser = removeUser;