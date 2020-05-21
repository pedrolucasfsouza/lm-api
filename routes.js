const routes = require('express').Router();
const multer = require('multer');
const multerConfig = require('./config/multer')
const models = require('./models');
const { Case } = models;


routes.get('/', async (req, res) => {
  const cases = await Case.findAll({
    where: { status: '0' },
  }).then((t) => {
    res.send(t);
  });

  res.send(cases);
});


routes.post("/upload", multer(multerConfig).single('file'), (req, res) =>{
  console.log(req.file.filename)
  return res.send(req.file.filename)
  
})

routes.post('/enviar', multer(multerConfig).single('file'), (req, res) => {
  Case
    .create({
      multa:req.file.filename,
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      description: req.body.description,
      status: 0,
    })
    .then((o) => {
      console.log('sucesso!')
      res.send(o.dataValues);
    });
});


routes.get('/casos', async (req, res) => {
  const Analise = await Analise.findAll({ where: { status: '0' } });
  if (cases === null) {
    console.log('Not found!');
  }
  res.send(cases);
});

routes.get('/caso/:id', async (req, res) => {
  const cases = await Case.findByPk(1);
  res.send(cases);
});

module.exports = routes;
