const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

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
    app.get('/login', async (req, res) => {

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

        user.password = undefined;

        res.send(user);
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