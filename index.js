const express = require('express');
const colors = require('colors');
const port = 3000;
const connectDB = require('./config/db');

connectDB();
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
    res.json({ hello : 'World'});
})

app.use('/api/users', require('./routes/usersRoutes'))

app.listen(port, () => {
    console.log('Server started on port '+ port);
});