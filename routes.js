const routes = require('express').Router();
const models = require("./models/")
const Case = models.Case
const User = models.User
const analise = models.Analise;


routes.get("/", async (req,res)=>{
    const cases = await Case.findAll({include: [User],attributes: ['id','status','description'], where: { status:'0'}}).then(t =>{
        res.send(t)
    })

    res.send(cases)
})

routes.get("/casos", async (req, res) =>{

    const cases = await Case.findAll({ where: { status: '0' } });
    if (cases === null) {
      console.log('Not found!')}
    res.send(cases)
})

routes.get("/caso/:id", async (req, res) =>{

    const cases = await Case.findByPk(1);
    res.send(cases)
})

routes.post("/enviar", (req, res) =>{
analise.create({name:req.body.name,email:req.body.email,phone:req.body.phone,description:req.body.description}).then( o=>{
        res.send(o.dataValues)}
        )

    })

    module.exports = routes;