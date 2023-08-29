const connection = require('../sqlConnection').connection;

// הציון הגבוה
// הציון הנמוך

// כמות משתמשים
// כמות משתמשים מהשנה האחרונה
// רשימה של 10 משתמשים אחרונים

function getAverageGrade(req, res) {
    connection.query("SELECT AVG(grade) average FROM `grades`", (err, result) => {
        if (err) {
            throw err;
        }

        let avg = null;

        if (result?.length) {
            avg = result[0].average;
        }

        res.send(avg);
    });
}

function getAmountOfGrades(req, res) {
    connection.query("SELECT COUNT(grade) count FROM `grades`", (err, result) => {
        if (err) {
            throw err;
        }

        let count = null;

        if (result?.length) {
            count = result[0].count;
        }

        res.send(count);
    });
}

function getDevOfGrades(req, res) {
    connection.query("SELECT STDDEV(grade) dev FROM `grades`", (err, result) => {
        if (err) {
            throw err;
        }

        let dev = null;

        if (result?.length) {
            dev = result[0].dev;
        }

        res.send(dev);
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

        res.send(max);
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

        res.send(min);
    });
}

exports.getAverageGrade = getAverageGrade;
exports.getAmountOfGrades = getAmountOfGrades;
exports.getDevOfGrades = getDevOfGrades;
exports.getMaxGrade = getMaxGrade;
exports.getMinGrade = getMinGrade;