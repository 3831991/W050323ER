const connection = require('../sqlConnection').connection;

// כמות משתמשים
// כמות משתמשים מהשנה האחרונה
// רשימה של 10 משתמשים אחרונים

function getAverageGrade(req, res) {
    connection.query("SELECT AVG(grade) average FROM `grades`", (err, result) => {
        if (err) {
            throw err;
        }

        let average = null;

        if (result?.length) {
            average = Math.round(result[0].average);
        }

        res.send({ res: average });
    });
}

function getAmountOfGrades(req, res) {
    connection.query("SELECT COUNT(grade) amount FROM `grades`", (err, result) => {
        if (err) {
            throw err;
        }

        let amount = null;

        if (result?.length) {
            amount = result[0].amount;
        }

        res.send({ res: amount });
    });
}

function getDevOfGrades(req, res) {
    connection.query("SELECT STDDEV(grade) dev FROM `grades`", (err, result) => {
        if (err) {
            throw err;
        }

        let dev = null;

        if (result?.length) {
            dev = Math.round(result[0].dev);
        }

        res.send({ res: dev });
    });
}

function getMaxGrade(req, res) {
    connection.query("SELECT MAX(grade) max FROM `grades`", (err, result) => {
        if (err) {
            throw err;
        }

        let max = null;

        if (result?.length) {
            max = result[0].max;
        }

        res.send({ res: max });
    });
}

function getMinGrade(req, res) {
    connection.query("SELECT MIN(grade) min FROM `grades`", (err, result) => {
        if (err) {
            throw err;
        }

        let min = null;

        if (result?.length) {
            min = result[0].min;
        }

        res.send({ res: min });
    });
}

function getUserAmount(req, res) {
    connection.query("SELECT COUNT(*) amount FROM `users`", (err, result) => {
        if (err) {
            throw err;
        }

        let amount = null;

        if (result?.length) {
            amount = result[0].amount;
        }

        res.send({ res: amount });
    });
}

function getUsersAmountFromCurrentYear(req, res) {
    connection.query("SELECT COUNT(*) amount FROM `users` WHERE YEAR(createdTime) = YEAR(CURRENT_DATE())", (err, result) => {
        if (err) {
            throw err;
        }

        let amount = null;

        if (result?.length) {
            amount = result[0].amount;
        }

        res.send({ res: amount });
    });
}

function getLastUsers(req, res) {
    connection.query("SELECT * FROM users ORDER BY id DESC LIMIT ?", [+req.params.amount], (err, result) => {
        if (err) {
            throw err;
        }

        res.send(result);
    });
}

exports.getAverageGrade = getAverageGrade;
exports.getAmountOfGrades = getAmountOfGrades;
exports.getDevOfGrades = getDevOfGrades;
exports.getMaxGrade = getMaxGrade;
exports.getMinGrade = getMinGrade;
exports.getUserAmount = getUserAmount;
exports.getUsersAmountFromCurrentYear = getUsersAmountFromCurrentYear;
exports.getLastUsers = getLastUsers;