const { getUsers, getUser, like, dislike, removeUser, addUser, updateUser } = require('./handlers/users');
const { getClients, getClient } = require('./handlers/clients');
const { getGrades, addGrade, removeGrade } = require('./handlers/grades');

module.exports = (app) => {
    app.get('/', (req, res) => res.send('ברוכים הבאים'));

    app.get('/users', getUsers);
    app.get('/users/:id', getUser);
    app.post('/users/:targetedUser/like', like);
    app.post('/users/:targetedUser/dislike', dislike);
    app.post("/users", addUser);
    app.put("/users/:id", updateUser);
    app.delete("/users/:id", removeUser);

    app.get('/clients', getClients);
    app.get('/clients/:id', getClient);

    app.get('/grades', getGrades);
    app.post('/grades', addGrade);
    app.delete('/grades/:id', removeGrade);
}