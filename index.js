require("dotenv").config
const express = require('express');
const morgan = require("morgan");
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');


app.use(express.static('public'));
app.set('view engine', 'pug');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(require('./routes'));




app.listen(3000, (req, res) => {
  console.log('servidor funcionando na porta 3000');
});
