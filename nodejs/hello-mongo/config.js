const jwt = require('jsonwebtoken');
const JWT_SECRET = "FullStackW050323MyTokenMagnivMeod";
const moment = require('moment');
const fs = require('fs');

const getUser = req => {
    if (!req.headers.authorization) {
        return null;
    }

    const data = jwt.decode(req.headers.authorization, JWT_SECRET);
    return data.user;
}

exports.addLog = (req, message = '') => {
    const fileName = 'log_' + moment().format('YYYY_MM_DD') + '.txt';
    let fileContent = '';
    const user = getUser(req);

    fileContent += `Time: ${moment().format('DD/MM/YYYY HH:mm:ss')}\n`;
    fileContent += `Method: ${req.method}\n`;
    fileContent += `Route: ${req.path}\n`;

    if (user) {
        fileContent += `User: ${user._id} (${user.firstName} ${user.lastName})\n`;
    }

    fileContent += '\n';

    fs.appendFile(fileName, fileContent, err => {});
}

exports.JWT_SECRET = JWT_SECRET;
exports.getUser = getUser;