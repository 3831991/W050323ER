const express = require('express');
const app = express();
require('./router')(app);

app.listen(4000, () => {
    console.log("Listening to port 4000...");
});