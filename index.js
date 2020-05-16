const express = require('express');
const app = express();
var cors = require('cors');
const models = require("./models/")
const Case = models.Case
const User = models.User
const analise = models.Analise;

const bodyParser = require("body-parser");
app.use(cors())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req,res)=>{
    const cases = await Case.findAll({include: [User],attributes: ['id','status','description'], where: { status:'0'}}).then(t =>{
        res.send(t)
    })

    res.send(cases)
})

app.get("/casos", async (req, res) =>{

    const cases = await Case.findAll({ where: { status: '0' } });
    if (cases === null) {
      console.log('Not found!')}
    res.send(cases)
})

app.get("/caso/:id", async (req, res) =>{

    const cases = await Case.findByPk(1);
    res.send(cases)
})

app.post("/enviar", (req, res) =>{
analise.create({name:req.body.name,email:req.body.email,phone:req.body.phone,description:req.body.description}).then( o=>{
        res.send(o.dataValues)}
        )

    })


app.listen(3000, (req, res) =>{
    console.log("servidor funcionando na porta 3000")
})