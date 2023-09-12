const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/full-stack-w050323er');
    console.log('mongodb connection established on port 27017');
}

main().catch(err => console.log(err));

const schema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    phone: String,
    email: String,
});

const User = mongoose.model("users", schema);

const app = express();

app.use(cors({
    origin: true,
    credentials: true,
    methods: 'GET,PUT,POST,DELETE',
    allowedHeaders: 'Content-Type, Accept',
}));

app.listen(4444);

app.get('/', (req, res) => {
    res.send("Welcome");
});

app.get('/users', async (req, res) => {
    res.send(await User.find());

    // User.find().then(data => {
    //     res.send(data);
    // });
});

app.get('/users/:id', async (req, res) => {
    res.send(await User.find({ _id: req.params.id }));
});

app.post('/users', async (req, res) => {
    // const user = new User({ firstName: 'Steve', lastName: 'iDigital', email: 'abc@digi', phone: '0505232356' });
    // await user.save();
});

app.put('/users', async (req, res) => {

});

app.delete('/users', async (req, res) => {

});