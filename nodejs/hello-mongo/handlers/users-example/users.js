const mongoose = require('mongoose');
const authGuard = require('../auth-guard');
const { schema } = require('./users.mongo');
const { joiSchema } = require('./users.joi');

module.exports = (app) => {
    const User = mongoose.model("users", schema);

    app.get('/users', authGuard, async (req, res) => {
        res.send(await User.find());
    });

    app.get('/users/:id', authGuard, async (req, res) => {
        res.send(await User.findOne({ _id: req.params.id }));
    });

    app.post('/users', authGuard, async (req, res) => {
        const { firstName, lastName, email, phone } = req.body;
        const schema = joiSchema.validate(req.body, { allowUnknown: true });

        if (schema.error) {
            return res.status(403).send(schema.error.details[0].message);
        }

        const user = new User({ firstName, lastName, email, phone });
        const newUser = await user.save();
        res.send(newUser);
    });

    app.put('/users/:id', authGuard, async (req, res) => {
        const { firstName, lastName, email, phone } = req.body;
        const user = await User.findOne({ _id: req.params.id });
    
        if (!user) {
            return res.status(403).send("משתמש לא קיים!");
        }
    
        user.firstName  = firstName;
        user.lastName   = lastName;
        user.email      = email;
        user.phone      = phone;
    
        await user.save();
    
        res.send(user);
    });

    app.delete('/users/:id', authGuard, async (req, res) => {
        await User.deleteOne({ _id: req.params.id });
        res.send();
    });
}