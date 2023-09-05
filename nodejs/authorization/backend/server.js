const express = require('express');
const cors = require('cors');
const con = require('./sqlConnection');
const app = express();

app.use(express.json());

app.use(cors({
    origin: true,
    methods: 'GET,PUT,POST,DELETE,OPTIONS',
    credentials: true,
    allowedHeaders: 'Content-Type, Accept',
}));

app.listen(420, () => {
    console.log("Server listening on port 420");
});

app.get('/', (req, res) => {
    res.send("Welcome!");
});

// Login status
app.get('/login', (req, res) => {
    // לצורך דוגמא
    const isLogged = false;

    if (isLogged) {
        res.send({
            // פרמטרים של היוזר המחובר
        });
    } else {
        res.status(401).send('Not connected');
    }
});

// Login
app.post('/login', (req, res) => {
    const { userName, password } = req.body;

    con.query("SELECT * FROM `users` WHERE `userName` = ? AND `password` = MD5(?)", [userName, password], (err, result) => {
        if (err) {
            throw err;
        }

        if (!result.length) {
            return res.status(403).send("שם משתמש או סיסמה שגויים");
        }

        const user = result[0];

        res.send(user);
    });
});

// Signup
app.post('/signup', (req, res) => {
    const { firstName, lastName, phone, email, userName, password } = req.body;

    con.query("INSERT INTO `users`(`firstName`, `lastName`, `phone`, `email`, `userName`, `password`) VALUES (?, ?, ?, ?, ?, MD5(?))", [firstName, lastName, phone, email, userName, password], (err, result) => {
        if (err) {
            return res.status(403).send("שגיאה");
        }

        res.send({
            message: "המשתמש נוסף בהצלחה",
        });
    });
});

// Logout
app.get('/logout', (req, res) => {

});