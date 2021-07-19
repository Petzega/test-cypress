const express = require('express');
const app = express();
const authRoute = require('./routes/auth')
const mongoose = require('mongoose');
const dotenv = require('dotenv');

//setup to read an env variable from a file
dotenv.config();

//connect to the DB
mongoose.connect(process.env.DB_CONNECT,
    {useNewUrlParser: true},
    () => console.log('Connected to db!')
);

app.use('/api/user', authRoute);
app.listen(3000, () => console.log('Server is running!'));