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

        res.send({ average });
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

        res.send({ amount });
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

        res.send({ dev });
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

        res.send({ max });
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

        res.send({ min });
    });
}

function getUserAmount(req, res) {
    connection.query("", (err, result) => {
        if (err) {
            throw err;
        }

    });
}

function getUserAmountFromYear(req, res) {
    connection.query("", (err, result) => {
        if (err) {
            throw err;
        }

    });
}

function getLastUsers(req, res) {
    connection.query("", [req.params.amount], (err, result) => {
        if (err) {
            throw err;
        }

    });
}

exports.getAverageGrade = getAverageGrade;
exports.getAmountOfGrades = getAmountOfGrades;
exports.getDevOfGrades = getDevOfGrades;
exports.getMaxGrade = getMaxGrade;
exports.getMinGrade = getMinGrade;
exports.getUserAmount = getUserAmount;
exports.getUserAmountFromYear = getUserAmountFromYear;
exports.getLastUsers = getLastUsers;