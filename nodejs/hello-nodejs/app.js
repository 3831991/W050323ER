const express = require('express');
const app = express();
require('./router')(app);
require('./sqlConnection');

app.listen(4000, () => {
    console.log("Listening to port 4000...");
});