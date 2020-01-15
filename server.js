const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir')

const PORT = 3000;
const HOST = '0.0.0.0';

// Iniciando o App
const app = express();
app.use(express.json());
app.use(cors());

// Iniciando o DB
mongoose.connect('mongodb://cursonodejs.mongodb:27017/nodeapi',
   {
      useNewUrlParser: true,
      useUnifiedTopology: true
   });
requireDir('./src/models');

// Rotas
app.use('/api', require('./src/routes'));

app.listen(PORT, HOST);