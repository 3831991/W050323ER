const { getUsers, getUser } = require('./handlers/users');
const { getClients, getClient } = require('./handlers/clients');

module.exports = (app) => {
    app.get('/', (req, res) => {
        res.send({
            message: 'ברוכים הבאים',
        });
    });

    app.get('/users', getUsers);
    app.get('/users/:id', getUser);
    app.get('/clients', getClients);
    app.get('/clients/:id', getClient);
}