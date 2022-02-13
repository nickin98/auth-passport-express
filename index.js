require('dotenv').config();
const express = require('express');
const sequelize = require('./db');
require('./models/user');
const passport = require('passport');
const expressSession = require('express-session');
const router = require('./routes/index');

const PORT = process.env.PORT || 5000;

const app = express();
app.use(expressSession({secret: process.env.SECRET_KEY}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());
app.use('/', router);

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    } catch (e) {
        console.log(e);
    }
}

start();
