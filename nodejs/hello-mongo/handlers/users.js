const mongoose = require('mongoose');
const Joi = require('joi');
const authGuard = require('../auth-guard');

module.exports = (app) => {
    const schema = new mongoose.Schema({
        firstName: String,
        lastName: String,
        phone: String,
        email: String,
    });

    const joiSchema = Joi.object({
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        email: Joi.string().max(62).required().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
        password: Joi.string()
                     .required()
                     .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d{4})(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{9,30}$/)
                     .message('user "password" must be at least nine characters long and contain an uppercase letter, a lowercase letter, 4 numbers and one of the following characters !@#$%^&*')
    });

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