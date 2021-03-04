const
  express = require('express'),
  http = require('http'),
  app = express(),
  server = http.createServer(app);

http.createServer(app);

require('dotenv').config();
require('./routes')(app);
require('./config/db');


port = process.env.PORT || 6000;

server.listen(port, () => (
  console.log(`listening on port ${port} !`)
));