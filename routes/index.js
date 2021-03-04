const
  bodyParser = require('body-parser'),
  cors = require('cors'),
  
  contacts = require('./contacts');

  

module.exports = (app) => {
  app.use(cors());
  app.use(bodyParser.json());

  let routers = {
    contacts
  };


  for (var key in routers)
    app.use(`/api/${key}`, routers[key]);
};