const express = require('express');
const colors = require('colors');
const port = 3000;
const connectDB = require('./config/db');

connectDB();
const app = express();

app.get('/', (req, res) => {
    res.json({ hello : 'World'});
})

app.listen(port, () => {
    console.log('Server started on port '+ port);
});