const routes = require('express').Router();
const {format} = require('util');
const Multer = require('multer');
const multerConfig = require('./config/multer')
const crypto = require('crypto');
const models = require('./models');
const { Case } = models;
const path = require("path")
const {Storage} = require('@google-cloud/storage')

const storage = new Storage({
  keyFilename: path.join(__dirname, "../limpa-multas-api123-5fb974bace1e.json"),
  projectId: 'limpa-multas-api123',
})

const multer = Multer({
  storage: Multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024, // no larger than 5mb, you can change as needed.
},
});

const bucket = storage.bucket('limpa-multas-api123.appspot.com');

routes.post('/upload', multer.single('file'), (req, res, next) => {
  const { originalname } = req.file;

  const blob = bucket.file(`${Date.now()}-${Math.random().toString(22).substr(2)}-${originalname}`);
  const blobStream = blob.createWriteStream();

  const publicUrl = `https://storage.cloud.google.com/limpa-multas-api123.appspot.com/${blob.name}`
  blobStream.end(req.file.buffer); 

  Case.create({
    multa:publicUrl,
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    description: req.body.description,
    status: 0,
  })
  .then((o) => {
    res.send(o.dataValues);
  });
});

routes.post('/enviar', multer.single('file'), (req, res) => {
  Case.create({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      description: req.body.description,
      status: 0,
    })
       .then((o) => {
         res.send(o.dataValues);
    });
});

routes.post('/caralho', multer.single('file'), async (req, res) => {
  await Case.create({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      description: req.body.description,
      status: 0,
    })
       .then((o) => {
         res.send(o.dataValues);
    });
});


routes.get('/', async (req, res) => {
  if(req.query.login === 'admin' && req.query.password=== 'carlinhos') {
    const cases = await Case.findAll({
      where: { status: '0' },
    })
    res.send(cases);
  }  else {
        res.status(500).send('nrolou')
    }
});


module.exports = routes;
