const jwt = require('jsonwebtoken');
const JWT_SECRET = "FullStackW050323MyTokenMagnivMeod";

exports.getUser = req => {
    const data = jwt.decode(req.headers.authorization, JWT_SECRET);
    return data.user;
}

exports.addLog = (req, message) => {

}

exports.JWT_SECRET = JWT_SECRET;