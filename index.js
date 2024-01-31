const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/restapi');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/', routes());

const port = 5000;

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});