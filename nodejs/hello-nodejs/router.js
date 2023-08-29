const { getUsers, getUser, like, dislike, removeUser, addUser, updateUser } = require('./handlers/users');
const { getClients, getClient } = require('./handlers/clients');
const { getGrades, addGrade, removeGrade } = require('./handlers/grades');
const { getAverageGrade, getAmountOfGrades, getDevOfGrades, getMaxGrade, getMinGrade, getUserAmount, getUsersAmountFromCurrentYear, getLastUsers } = require('./handlers/dashboard');

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

    app.get('/dashboard/grades/average', getAverageGrade);
    app.get('/dashboard/grades/amount', getAmountOfGrades);
    app.get('/dashboard/grades/dev', getDevOfGrades);
    app.get('/dashboard/grades/max', getMaxGrade);
    app.get('/dashboard/grades/min', getMinGrade);

    app.get('/dashboard/users/amount', getUserAmount);
    app.get('/dashboard/users/amount-year', getUsersAmountFromCurrentYear);
    app.get('/dashboard/users/last/:amount', getLastUsers);
}