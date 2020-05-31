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


const arr = [1, 2, 4, 500, 706, 402, 504, 2, 4, 43]

const reducer = (accumulator, currentValue) => {
  if (currentValue < 3){
    accumulator + currentValue
  }
  else return 5000
}

console.log(arr.reduce(reducer))


app.listen(3000, (req, res) => {
  console.log('servidor funcionando na porta 3000');
});
