const express = require('express'),
      app = express(),
      router = require('./router'),
      cors = require('cors'),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose'),
      config = require('./config/main');

const databse =   'mongodb://abba:123qwe!@#QWE@ds159782.mlab.com:59782/ticket-system'


mongoose.connect(config.database);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
router(app);

app.listen(config.port);
console.log('Your server is running on port ' + config.port + '.');