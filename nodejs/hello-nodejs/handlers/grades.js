const connection = require('../sqlConnection').connection;

function getGrades(req, res) {
    connection.query("SELECT * FROM `grades`", (err, result) => {
        if (err) {
            throw err;
        }

        res.send(result);
    });
}

function addGrade(req, res) {
    const { date, grade, title } = req.body;

    connection.query("INSERT INTO `grades`(`date`, `grade`, `title`) VALUES (?, ?, ?)", [date, grade, title], (err, result) => {
            if (err) {
                throw err;
            }

            connection.query("SELECT * FROM `grades` WHERE `id` = ?", [result.insertId], (err, result) => {
                if (err) {
                    throw err;
                }

                res.send(result.pop());
            });
        }
    );
}

function removeGrade(req, res) {
    connection.query("DELETE FROM `grades` WHERE `id` = ?", [req.params.id], (err, result) => {
        if (err) {
            throw err;
        }

        res.send();
    });
}

exports.getGrades = getGrades;
exports.addGrade = addGrade;
exports.removeGrade = removeGrade;