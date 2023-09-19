const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const { JWT_SECRET, getUser } = require('../config');
const authGuard = require('../auth-guard');

module.exports = (app) => {
    const schema = new mongoose.Schema({
        firstName: String,
        lastName: String,
        phone: String,
        email: String,
        password: String,
    });

    const UserAdmin = mongoose.model("admins", schema);

    // Login status
    app.get('/login', authGuard, async (req, res) => {
        const user = getUser(req);

        res.send(user);
    });

    app.post('/login', async (req, res) => {
        const { email, password } = req.body;

        const user = await UserAdmin.findOne({ email });

        if (!user) {
            return res.status(403).send("username or password is incorrect");
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(403).send("username or password is incorrect");
        }

        // יצירת אובייקט רגיל מהמחלקה של היוזר
        const userResult = user.toObject();
        // מחיקת הסיסמה מהאובייקט שנשלח למשתמש
        delete userResult.password;
        // יצירת טוקן
        userResult.token = jwt.sign({ user: userResult }, JWT_SECRET, { expiresIn: '1h' });

        res.send(userResult);
    });

    app.post('/signup', async (req, res) => {
        const { firstName, lastName, email, phone, password } = req.body;

        const user = new UserAdmin({
            firstName,
            lastName,
            email,
            phone,
            password: await bcrypt.hash(password, 10),
        });

        // הוספת המשתמש לדטה בייס
        const newUser = await user.save();
        // מחקנו את הסיסמה מהאובייקט שמחזירים ללקוח
        delete newUser.password;

        // החזרת המתשמש החדש ליוזר
        res.send(newUser);
    });

    app.get('/logout', async (req, res) => {

    });
}