const { getUsers, getUser, like, dislike } = require('./handlers/users');
const { getClients, getClient } = require('./handlers/clients');

module.exports = (app) => {
    app.get('/', (req, res) => res.send('ברוכים הבאים'));
    app.get('/users', getUsers);
    app.get('/users/:id', getUser);
    app.post('/users/:targetedUser/like', like);
    app.post('/users/:targetedUser/dislike', dislike);
    app.get('/clients', getClients);
    app.get('/clients/:id', getClient);
}