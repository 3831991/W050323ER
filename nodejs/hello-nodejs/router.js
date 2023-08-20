module.exports = (app) => {

    app.get('/', (req, res) => {
        res.send("ברוכים הבאים");
    });
    
    app.get('/test', (req, res) => {
        res.send("עבר בהצלחה");
    });

}