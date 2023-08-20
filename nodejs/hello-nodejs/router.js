const users = require('./handlers/users');

module.exports = (app) => {

    app.get('/', (req, res) => {
        res.send("ברוכים הבאים");
    });

    app.get('/users', users.getUsers);

}