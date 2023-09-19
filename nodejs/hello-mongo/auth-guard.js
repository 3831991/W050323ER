const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('./config');

module.exports = (req, res, next) => {
    jwt.verify(req.headers.authorization, JWT_SECRET, (err, data) => {
        if (err) {
            res.status(401).send("User is not authorized");
        } else {
            next();
        }
    });
}