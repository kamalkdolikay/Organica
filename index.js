const express = require('express');
const cors = require('cors');
const colors = require('colors');
const dotenv = require('dotenv').config();

const port = process.env.PORT || 3000;
const connectDB = require('./config/db');

connectDB();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/api/users', require('./routes/usersRoutes'));
app.use('/api/products', require('./routes/productsRoutes'))

app.listen(port, () => {
    console.log('Server started on port '+ port);
});