const express = require('express');
const usersApi = require('./routes/api/v1/Users/index.js');

const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/api/v1/users',usersApi);

module.exports = app;