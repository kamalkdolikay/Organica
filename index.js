const express = require('express');
const cors = require('cors');
const path = require('path');
const colors = require('colors');
const dotenv = require('dotenv').config();

const port = process.env.PORT || 3000;
const connectDB = require('./config/db');

connectDB();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//ot be used for angular production
app.use(express.static(path.join(__dirname, 'public/browser')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/browser/index.html'));
});
//--//

app.use('/api/users', require('./routes/usersRoutes'));
app.use('/api/products', require('./routes/productsRoutes'))

app.listen(port, () => {
    console.log('Server started on port '+ port);
});