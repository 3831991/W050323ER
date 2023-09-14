const mongoose = require('mongoose');

module.exports = (app) => {
    const schema = new mongoose.Schema({
        date: Date,
        title: String,
        grade: Number,
    });
    
    const Grade = mongoose.model("grades", schema);
    
    app.get('/grades', async (req, res) => {
        res.send(await Grade.find());
    });
    
    app.get('/grades/:id', async (req, res) => {
        res.send(await Grade.findOne({ _id: req.params.id }));
    });
    
    app.post('/grades', async (req, res) => {
        const { date, title, grade } = req.body;
    
        const user = new Grade({ date, title, grade });
        const newUser = await user.save();
        res.send(newUser);
    });
    
    app.put('/grades/:id', async (req, res) => {
        const { date, title, grade } = req.body;
        const g = await Grade.findOne({ _id: req.params.id });
    
        if (!g) {
            return res.status(403).send("הציון לא קיים!");
        }
    
        g.date   = date;
        g.title  = title;
        g.grade  = grade;
    
        await g.save();
    
        res.send(g);
    });
    
    app.delete('/grades/:id', async (req, res) => {
        await Grade.deleteOne({ _id: req.params.id });
        res.send();
    });
}