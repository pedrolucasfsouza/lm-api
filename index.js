const express = require('express');
const app = express();
var cors = require('cors');
const bodyParser = require("body-parser");

app.use(cors())
app.use(require('./routes'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, (req, res) =>{
    console.log("servidor funcionando na porta 3000")
})